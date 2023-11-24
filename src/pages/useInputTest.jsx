import React from "react";
import useInput from "../hooks/useInput";

export default function UseInputTest() {
    const name = useInput("");
    const email = useInput("");
    
    return (
        <div>
            <h1>Make it easier to work with a text input</h1>
            <p><input {...name} type="text" placeholder="Name" /></p>
            <p><input {...email} type="text" placeholder="Email" /></p>
            <p>Name: {name.value}, Email: {email.value}</p>
        </div>
    )
}