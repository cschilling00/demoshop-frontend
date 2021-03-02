import React from 'react';
import {useQuery} from "@apollo/client";
import {getProductsQuery} from "../constants";
import CreateOrder from "./CreateOrder";

function ShoppingCart() {
    const {loading, error, data} = useQuery(getProductsQuery);
    console.log(data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;

    let products = data.getProducts;
    let shoppingList = [];

    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(key, value);

        for (let product of products){
            if (product.id === value){
                shoppingList.push(product)
            }
        }
    }

    function handleClick() {
        localStorage.clear()
        window.location.reload(false)
    }

    return (
        <div>
            <h3>Shopping Cart</h3>
            <ul>
                {shoppingList.map((item, index) => (
                    <li key={index}>
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                    </li>
                ))}
            </ul>
            <CreateOrder products={shoppingList}></CreateOrder>
            <button onClick={handleClick}>Clear shopping cart</button>

        </div>
    );
}

export default ShoppingCart;
