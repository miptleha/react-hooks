import { useEffect, useState, useRef, useCallback } from "react";

const types = [ "mousedown", "mouseup", "mousemove", "keydown", "keyup", "wheel", "scroll", "touchstart", "touchmove" ];

export default function useIdle(timeout = 1000) {
    const [isIdle, setIsIdle] = useState(true);
    const timerRef = useRef();

    const active = useCallback(() => {
        setIsIdle(false);
        clear();
        timerRef.current = setInterval(() => {
            setIsIdle(true);
        }, timeout);
    }, [timeout]);

    function clear() {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    }

    useEffect(() => {
        for (const t of types) {
            document.addEventListener(t, active, true);
        }

        return function() {
            clear();
            for (const t of types) {
                document.removeEventListener(t, active);
            }
        }
    }, [setIsIdle, timeout, active]);

    return isIdle;
}