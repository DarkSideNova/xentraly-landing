/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BusinessFailure } from '@/app/domain/entities/failures/business/business.f';
import { GetBusinessesPayload } from '@/app/domain/entities/payloads/business.payload';
import { BusinessesResponse } from '@/app/domain/entities/responses/business/getBusiness.response';
import { Business } from '@/app/domain/entities/types/business/business.t';
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseInfiniteScrollBusinessesResult {
    businesses: Business[];
    loading: boolean;
    error: string | null;
    loadMore: () => void;
    hasMore: boolean; // Include hasMore in the result
}

const INITIAL_LOAD = 15;
const LOAD_MORE = 5;

const useInfiniteScrollBusinesses = (
    fetchBusinesses: (params: GetBusinessesPayload) => Promise<BusinessesResponse>
): UseInfiniteScrollBusinessesResult => {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [totalBusinesses, setTotalBusinesses] = useState<number | null>(null);

    const loadingRef = useRef(false);

    const loadMore = useCallback(async () => {
        if (loadingRef.current || !hasMore) return;
        loadingRef.current = true;

        setLoading(true);
        setError(null);

        try {
            const currentOffset = businesses.length;
            console.log("Llamando loadMore con offset:", currentOffset);
            const result = await fetchBusinesses({ offset: currentOffset, limit: LOAD_MORE });
            console.log("Respuesta de fetchBusinesses:", result);

            if (
                result &&
                !(result instanceof BusinessFailure) &&
                typeof result === "object" &&
                "data" in result &&
                "total" in result
            ) {
                const { data, total } = result as BusinessesResponse;
                setBusinesses((prevBusinesses) => {
                    const newBusinesses = [...prevBusinesses, ...data];
                    // Calcula hasMore usando el nuevo array
                    if (total !== null && newBusinesses.length >= total) {
                        setHasMore(false);
                    } else if (data.length < LOAD_MORE) {
                        setHasMore(false);
                    }
                    return newBusinesses;
                });
                setOffset((prevOffset) => prevOffset + LOAD_MORE);
                setTotalBusinesses(total);
            } else if (result instanceof BusinessFailure) {
                setError(result.code || 'Error al cargar más negocios.');
            } else {
                setError('Respuesta inesperada del servidor.');
            }
        } finally {
            loadingRef.current = false;
            setLoading(false);
        }
    }, [fetchBusinesses, hasMore, offset, businesses.length]);

    useEffect(() => {
        const initialLoad = async () => {
            setLoading(true);
            setError(null);
            setOffset(0); // Reset offset on initial load
            setBusinesses([]); // Reset businesses on initial load
            setHasMore(true); // Reset hasMore on initial load
            setTotalBusinesses(null); // Reset total on initial load

            try {
                const result = await fetchBusinesses({ offset: 0, limit: INITIAL_LOAD });
                console.log("fetchBusinesses result (initialLoad):", result);

                if (
                    result &&
                    !(result instanceof BusinessFailure) &&
                    typeof result === "object" &&
                    "data" in result &&
                    "total" in result
                ) {
                    const { data, total } = result as BusinessesResponse;
                    setBusinesses(data);
                    setOffset(INITIAL_LOAD);
                    setTotalBusinesses(total);
                    if (total !== null && data.length >= total) {
                        setHasMore(false);
                    } else if (data.length < INITIAL_LOAD) {
                        setHasMore(false);
                    }
                } else if (result instanceof BusinessFailure) {
                    setError(result.code || 'Error al cargar los negocios iniciales.');
                } else {
                    setError('Respuesta inesperada del servidor.');
                }
            } catch (err: any) {
                setError(err.message || 'Error inesperado al cargar los negocios iniciales.');
            }
        };

        initialLoad();
    }, [fetchBusinesses]);

    const loadMoreRef = useRef(loadMore);

    useEffect(() => {
        loadMoreRef.current = loadMore;
    }, [loadMore]);

    useEffect(() => {
        console.log("Registrando scroll listener");

        let lastScrollTop = 0;
        let debounceTimeout: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            if (debounceTimeout) clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                const { scrollTop } = document.documentElement;
                const isScrollingDown = scrollTop > lastScrollTop;

                console.log("Scroll handler ejecutado", {
                    scrollHeight: document.documentElement.scrollHeight,
                    innerHeight: window.innerHeight,
                    scrollTop,
                    isScrollingDown,
                    loadingRef: loadingRef.current,
                    hasMore
                });

                if (
                    document.documentElement.scrollHeight > window.innerHeight &&
                    Math.ceil(window.innerHeight + scrollTop) >= document.documentElement.scrollHeight &&
                    isScrollingDown &&
                    !loadingRef.current &&
                    hasMore
                ) {
                    console.log("Aqui");
                    loadMoreRef.current(); // Usa la referencia actualizada
                }

                lastScrollTop = scrollTop;
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (debounceTimeout) clearTimeout(debounceTimeout);
        };
    }, [hasMore]);

    return { businesses, loading, error, loadMore, hasMore };
};

export default useInfiniteScrollBusinesses;