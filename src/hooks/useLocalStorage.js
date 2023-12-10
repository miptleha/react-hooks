import { useState } from "react";

export default function useLocalStorage(name, initValue) {
    const [value, setValue] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(name));
        } catch {
            return initValue;
        }
    });

    function setValueAndSave(arg) {
        let newValue = arg;
        if (typeof arg === "function") {
            newValue = arg(value);
        }
        localStorage.setItem(name, JSON.stringify(newValue));
        setValue(newValue);
    }

    return [value, setValueAndSave];
}