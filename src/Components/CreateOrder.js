import React from 'react';
import {useMutation} from "@apollo/client";
import {createOrderMutation} from "../constants";

function CreateOrder(props) {
    let products = props.products
    let price = 0;
    let userId = ""
    if(sessionStorage.getItem('userId')){
        userId = sessionStorage.getItem('userId')
    }
    for (let product of products){
        price += product.price
    }
    const [createOrder] = useMutation(createOrderMutation);

    function handleClick() {
            createOrder({

                update: (proxy, mutationResult) => {
                    console.log('mutationResult: ', mutationResult);
                },
                variables: {order: {id: "", orderDate: new Date().toLocaleDateString(), price: price, products: products, userId: userId }}
            }).catch(error => {
                console.error("error" + error)
                alert(error + '! Please login');
            });
        }

    return (
        <div>
            <button onClick={handleClick}>Order now</button>

        </div>
    );
}

export default CreateOrder;
