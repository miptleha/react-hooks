import { useState } from "react";

export default function useInput(defValue) {
    const [value, setValue] = useState(defValue);
    const onChange = (e) => {
        setValue(e.target.value);
    }
    return {value, onChange};
}