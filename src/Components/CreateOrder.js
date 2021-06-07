import React from 'react';
import {Get, Post} from "react-axios";
import axios from "axios";

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
    // const [createOrder] = useMutation(createOrderMutation);

    function handleClick() {
        const order = {id: "",
            orderDate: new Date().toLocaleDateString(),
            price: price,
            products: products,
            userId: userId };

        axios.post(`/orders`, { order })
            .then(res => {
                console.log(res);
                console.log(res.data);
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
