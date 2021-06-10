import React, {useEffect, useState} from 'react';
import productserviceApi from "../productserviceApi";

function MyOrders() {
    let userId = ""
    const [order, setOrder] = useState([]);
    if (sessionStorage.getItem('userId')) {
        userId = sessionStorage.getItem('userId')
    }

    useEffect(() => {
        productserviceApi.get(`orders/myOrders/` + userId)
            .then(res => {
                setOrder(res.data);
                console.log(order);
                console.log(res.data);

            }).catch(error => {
            console.error(error)
            alert(error);
        });
    }, []);


    return (
        <div>
            <h2>My Orders</h2>
            {order.map(or => {
                return (
                    <div>
                        <h4>Order: {or.id} ordered at {or.orderDate} for {or.price} €</h4>
                {
                    or.products.map((product) =>{
                        return(<div>{product.name}</div>)
                    })
                }
                    </div>
            )

            })}

</div>
)
;


}

export default MyOrders;
/*
return (
    <div>
        {order ? order.id}
        <h4>Order: {res.data[0].id}</h4>
        <h4>Order: {res.data.id} ordered at {res.data.orderDate} for {res.data.price} €</h4>
        <ul>
            {res.data.products.map(item => (
                <li key={item.id}>
                    <Product item={item}>{item.name}</Product>
                </li>
            ))}
        </ul>
    </div>
)*/