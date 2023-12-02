import React from "react";
import useRequest from "../hooks/useRequest";
import useInput from "../hooks/useInput";

export default function UseRequestTest() {
    const [load, data, isLoading, error] = useRequest();
    const url = useInput("https://dummyjson.com/products");

    function fetchData() {
        load(url.value);
    }

    let res = null;
    if (isLoading) {
        res = (<p>Data is loading...</p>);
    } else if (error) {
        res = (<p className="error">{error}</p>)
    } else if (data && data.products) {
        res = data.products.map(i => (
            <div key={i.id} className="product">
                <div className="product_data">
                    <h2>{i.title} ({i.brand})</h2>
                    <p><i>{i.category}</i></p>
                    <p className="product_desc">{i.description}</p>
                    <p>Price: {i.price}$</p>
                    <p>Rating: {i.rating}⭐</p>
                </div>
                <div className="product_img">
                    <img src={i.thumbnail} alt={i.title}/>
                </div>
            </div>
        ));
    } else if (data) {
        res = (<p className="error">Invalid data</p>)
    }

    return (
        <div className="center-top">
            <h1>Loading handler for json data</h1>
            <p>
                <input {...url} type="text" placeholder="url" className="wide-input" />
                <button onClick={fetchData}>Fetch</button>
            </p>
            {res}
        </div>
    )
}