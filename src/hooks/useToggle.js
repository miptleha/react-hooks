import { useState } from "react";

export default function useToggle(initState) {
    const [isOpen, setOpen] = useState(initState);

    function toggle() {
        setOpen(prev => !prev);
    }

    return [isOpen, toggle];
}