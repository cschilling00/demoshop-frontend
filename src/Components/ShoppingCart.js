import React from 'react';
import {useQuery} from "@apollo/client";
import {getProductsQuery} from "../constants";

function ShoppingCart() {
    const {loading, error, data} = useQuery(getProductsQuery);
    console.log(data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;

    let products = data.getProduct;
    let shoppingListIds = new Map();
    let shoppingList = [];

    for (let i = 0; i < sessionStorage.length; i++){
        let key = sessionStorage.key(i);
        let value = sessionStorage.getItem(key);
        console.log(key, value);

        for (let product of products){
            if (product.id == value){
                shoppingList.push(product)
            }
        }

    }

    return (
        <div>
            <h3>Shopping List</h3>
            <ul>
            {shoppingList.map((item, index) => (
                <li key={index}>
                    <p>Name: {item.name}</p>
                    <p>Id: {item.id}</p>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <p>Category: {item.category}</p>
                </li>
            ))}
        </ul>

        </div>
    );
}

export default ShoppingCart;
