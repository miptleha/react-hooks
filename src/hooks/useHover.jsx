import { useState, useCallback, useEffect } from "react";

export default function useHover(ref) {
    const [isHover, setHover] = useState(false);
    
    const hoverIn = useCallback(() => {
        setHover(true);
    }, [ setHover ]);
    const hoverOut = useCallback(() => {
        setHover(false);
    }, [ setHover ]);

 
    useEffect(() => {
        const e = ref.current;
        if (!e) {
            return;
        }

        e.addEventListener("mouseenter", hoverIn);
        e.addEventListener("mousemove", hoverIn);
        e.addEventListener("mouseleave", hoverOut);
        return function() {
            e.removeEventListener("mouseenter", hoverIn);
            e.removeEventListener("mousemove", hoverIn);
            e.removeEventListener("mouseleave", hoverOut);
        }
    }, [ref, hoverIn, hoverOut]);

    return isHover;
}