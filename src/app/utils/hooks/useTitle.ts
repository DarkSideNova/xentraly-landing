import React from "react";

export const useTitle = (title: string) => {

    const documentDefined = typeof document !== 'undefined';
    const originalTitle = React.useRef(documentDefined ? document.title : "");

    React.useEffect(() => {

        if (!documentDefined) return;
        if (document.title !== title) document.title = `${title} | Xentraly`;

        const cleanupTitle = originalTitle.current;

        return () => {
            document.title = cleanupTitle;
        };

    }, [title, documentDefined]);
};