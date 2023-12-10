import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function UseLocalStorageTest() {
    const [value, setValue] = useLocalStorage("testInput", "");

    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="center-top">
            <h1>State that is stored in local storage</h1>
            <input type="text" value={value} placeholder="Type something" onChange={onChange} />
            <p>Refresh the page or close and open the browser, the entered value will be restored</p>
        </div>
    )
}