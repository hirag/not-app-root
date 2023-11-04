import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

export const useBgCol = () => {
    const router = useRouter();
    const bgcol = useMemo(() => {
        return router.pathname === "/" ? "lightblue" : "beige";
    }, [router.pathname])
    useEffect(() => {
        document.body.style.backgroundColor = bgcol;
        return () => {
            document.body.style.backgroundColor = "";

        }
    }, [bgcol]
    );
}