import { useRef, useCallback } from "react";

export default function useDebounce(cb, delay) {
    const timerRef = useRef();

    return useCallback((...args) => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            cb(...args);
        }, delay);
    }, [timerRef, cb, delay]);
}