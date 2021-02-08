import Product from "./Product";
import React from 'react';
import {useQuery} from "@apollo/client";
import {getProductsQuery} from "../constants";

function Home() {
    const {loading, error, data} = useQuery(getProductsQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;

    return (
        <div>
            <ul>
                {data.getProduct.map(item => (
                    <li key={item.id}>
                        <Product item={item}></Product>
                    </li>
                ))}
            </ul>
            {/*<button onClick={() => this.handleClick()}>*/}
            {/*    Neues Produkt*/}
            {/*</button>*/}

        </div>
    );

}

export default Home;


