import React, { useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

export default function UseScrollTest() {
    const refBottom = useRef();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    useScroll(refBottom, () => fill(10));

    function fill(size) {
        let newData = [];
        for (let i = 0; i < size; i++) {
            const cnt = page * size + i + 1;
            newData.push(cnt);
        }
        setData(prev => [...prev, ...newData]);
        setPage(prev => prev + 1);
    };

    return (
        <div className="center-top">
            <h1>Helps create infinite list</h1>
            {data.map((i, p) => (
                <div key={p} className="itemBox">
                    <div>Item{i}</div>
                </div>
            ))}
            <div ref={refBottom} className="scrollDiv"></div>
        </div>
    )
}