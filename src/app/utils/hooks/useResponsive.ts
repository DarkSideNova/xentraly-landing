import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useResponsive = (query: string): boolean => {
    const [isClient, setIsClient] = useState(false);
    const matches = useMediaQuery({ query });

    useEffect(() => {
        setIsClient(true); // Ensures the hook only runs on the client
    }, []);

    return isClient ? matches : false;
};

export default useResponsive;