import React, { useRef } from "react";
import useHover from "../hooks/useHover";

export default function UseHoverTest() {

    const refRedBox = useRef();
    const refGreenBox = useRef();
    const redHover = useHover(refRedBox);
    const greenHover = useHover(refGreenBox);

    return (
        <div>
            <h1>Сhecks if the mouse cursor is over an element</h1>
            <div className="redBox" ref={refRedBox}>
                Hover: {redHover.toString()}
                <div className="greenBox" ref={refGreenBox}>
                    Hover: {greenHover.toString()}
                </div>
            </div>
        </div>
    )
}