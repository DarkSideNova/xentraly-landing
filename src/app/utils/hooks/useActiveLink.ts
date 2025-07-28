import { useEffect, useState } from "react";

/**
 * Retorna true si la ruta actual contiene o es igual al texto dado.
 * Si la ruta es "/", solo retorna true si pathname es exactamente "/".
 * @param path Texto o ruta a comparar.
 */
const useActiveLink = (path: string): boolean => {
    const [pathname, setPathname] = useState<string>(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => setPathname(window.location.pathname);
        window.addEventListener("popstate", handleLocationChange);
        return () => window.removeEventListener("popstate", handleLocationChange);
    }, []);

    if (path === "/") {
        return pathname === "/";
    }
    return pathname === path || pathname.includes(path);
};

export default useActiveLink;