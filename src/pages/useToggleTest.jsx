import React from "react";
import useToggle from "../hooks/useToggle";

export default function UseToggleTest() {
    const [isOpen, toggle] = useToggle(false);

    return (
        <div className="center-top">
            <h1>Helps implement switch logic</h1>
            <button onClick={toggle}>{isOpen ? "Hide 🔼" : "Show 🔽"}</button>
            {isOpen && (<p className="narrow-block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur illo blanditiis autem. 
                Nulla enim soluta nisi impedit maxime odit tempore quis et magnam, quidem repellendus maiores quo, 
                ipsum debitis tenetur facere deleniti ipsam dicta ea quas repudiandae minima minus a porro! 
                Sunt laboriosam repudiandae consequuntur hic eum nemo repellendus. Voluptates.
            </p>)}
        </div>
    );
}