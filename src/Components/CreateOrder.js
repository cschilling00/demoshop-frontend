import React from 'react';
import {Get, Post} from "react-axios";
import productserviceApi from "../productserviceApi";
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

            // return(<Post url="/orders" data={{order}}>
            //             {(error, response, isLoading, makeRequest, axios) => {
            //                 if(error) {
            //                     return (<div>An error occured: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
            //                 }
            //                 else if(isLoading) {
            //                     return (<div>Loading...</div>)
            //                 }
            //                 else if(response !== null) {
            //                     console.log(response.data);
            //                 }
            //                 return (<div></div>)
            //             }}
            //         </Post>)


        productserviceApi.post(`orders`, {order}, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => {
                console.error(error)
                console.log(order);
                alert(error);

            });
        }

    return (
        <div>
            <button onClick={handleClick}>Order now</button>
        </div>
    );
}

export default CreateOrder;
