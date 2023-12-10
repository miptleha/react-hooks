import React, { useRef } from "react";
import useIdle from "../hooks/useIdle";

export default function UseIdleTest() {
    const isIdle = useIdle();
    const inputRef = useRef();
    const pRef = useRef();

    function click() {
        pRef.current.textContent = inputRef.current.value + "⠀";
    }

    return (
        <div className="center-top">
            <h1>Detects user activity</h1>
            <p>
                <input ref={inputRef} type="text" placeholder="Text input field" />
                &nbsp;&nbsp;
                <button onClick={click}>Button</button>
            </p>
            <p ref={pRef}>⠀</p>
            {isIdle ?
                <p className="inactive-status">User inactive</p> 
            :
                <p className="active-status">Some activity on page</p>
            }
            <div className="tall-div"></div>
        </div>
    )
}