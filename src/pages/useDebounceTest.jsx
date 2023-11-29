import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function useDebounceTest() {
    const [value, setValue] = useState('');
    const [debValue, setDebValue] = useState('');
    const debCall = useDebounce(cb, 400);

    const onChange = (e) => {
        const val = e.target.value;
        setValue(val);
        debCall(val);
    }

    function cb(val) {
        setDebValue(val);
    }

    return (
        <div>
            <h1>Debounce user input</h1>
            <p><input onChange={onChange} value={value} placeholder="Type something"/></p>
            <p>Input value: {value}</p>
            <p>Debounce value: {debValue}</p>
        </div>
    )
}