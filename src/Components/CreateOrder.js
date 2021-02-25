import React from 'react';
import {useMutation} from "@apollo/client";
import {createOrderMutation} from "../constants";

function CreateOrder(props) {
    let products = props.products
    let productIds = [];
    let price = 0;
    for (let product of products){
        productIds.push(product.id)
        price += product.price
    }
    console.log(productIds)
    const [createOrder] = useMutation(createOrderMutation);


    function handleClick() {
        createOrder({
            update: (proxy, mutationResult) => {
                console.log('mutationResult: ', mutationResult);
            },
            variables: {order: {id: "", orderDate: new Date().toLocaleDateString(), price: price, productIds: productIds}}
        });
    }

    return (
        <div>
            <button onClick={handleClick}>Create Order</button>
        </div>
    );
}

export default CreateOrder;
