import { useEffect, useRef } from "react";

export default function useScroll(ref, cb) {
    const obs = useRef();

    useEffect(() => {
        obs.current = new IntersectionObserver(intOb);
        
        function intOb(ent, obs) {
            if (ent[0] && ent[0].isIntersecting) {
                cb();
            }
        }

        var node = ref.current;
        obs.current.observe(node);

        return function() {
            obs.current?.unobserve(node);
        }
    }, [ref, cb]);
}