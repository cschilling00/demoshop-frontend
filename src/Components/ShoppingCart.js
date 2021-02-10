import React from 'react';
import {useQuery} from "@apollo/client";
import {getProductByIdQuery, getProductsQuery} from "../constants";
import Product from "./Product";

function ShoppingCart() {
    const {loading, error, data} = useQuery(getProductsQuery);
    console.log(data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;

    console.log("ShoppingCart: " + sessionStorage.getItem('id').split(','));
    let productIds = [];
    let products = data.getProduct;
    let shoppingList = [];
    productIds = sessionStorage.getItem('id').split(',');
    console.log("ProductIds: " + productIds);


    // let productIdsMap = productIds.map((value, key) => ({key, value}));
    // let iterator = productIdsMap.entries();
    // console.log("productIdsMap" + productIdsMap)
    // console.log("productIdsMap" + iterator.next().value)
    // console.log("productIdsMap" + iterator.next().value)





    for (let productId of productIds) {
        for(let product of products){
            console.log(productId + product.id)
            if (productId == product.id){
                shoppingList.push(product)
            }
        }

    }

    return (
        <div>
            <h3>Shopping List</h3>
            <ul>
            {shoppingList.map(item => (
                <li key={item.id}>
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
