import React from 'react';
import {useQuery} from "@apollo/client";
import {getProductsQuery} from "../constants";
import CreateOrder from "./CreateOrder";
import {Get} from "react-axios";
import AddToShoppingCart from "./AddToShoppingCart";

function ShoppingCart() {
    // if (response.data){
    //     let products = response.data;
    // }
    //
    // let shoppingList = [];
    //
    // for (let i = 0; i < localStorage.length; i++){
    //     let key = localStorage.key(i);
    //     let value = localStorage.getItem(key);
    //     console.log(key, value);
    //
    //     for (let product of response.data){
    //         if (product.id === value){
    //             shoppingList.push(product)
    //         }
    //     }
    // }

    function handleClick() {
        localStorage.clear()
        window.location.reload(false)
    }

    return (
        <Get url="/products">
            {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                    return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                    return (<div>Loading...</div>)
                }
                else if(response !== null) {
                    let shoppingList = [];

                    for (let i = 0; i < localStorage.length; i++){
                        let key = localStorage.key(i);
                        let value = localStorage.getItem(key);
                        console.log(key, value);

                        for (let product of response.data){
                            if (product.id === value){
                                shoppingList.push(product)
                            }
                        }
                    }
                    console.log(response.data)
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
                    )
                }
                return (<div>Default message before request is made.</div>)
            }}
        </Get>

    );
}

export default ShoppingCart;
