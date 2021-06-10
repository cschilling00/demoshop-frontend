import React from 'react';
import productserviceApi from "../productserviceApi";
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

    function handleClick() {
        const order = {id: null,
            orderDate: new Date().toLocaleDateString(),
            price: price,
            products: products,
            userId: userId };
        productserviceApi.post(`orders`, order)
            .then(res => {
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
