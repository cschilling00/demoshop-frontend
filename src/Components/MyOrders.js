import Product from "./Product";
import React from 'react';
import {useQuery} from "@apollo/client";
import {getOrderByUserIdQuery} from "../constants";
function MyOrders() {
    let userId = ""
    if(sessionStorage.getItem('userId')){
        userId = sessionStorage.getItem('userId')
    }

    const {loading, error, data} = useQuery(getOrderByUserIdQuery, {
        variables: {id: userId}
    });
    if (data){
        console.log(sessionStorage.getItem('userId'))
        console.log(data)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;

    return (
        <div>
            <h2>My Orders</h2>
                {/*<pre>{JSON.stringify(data.getOrderByUserId)}</pre>*/}
                {data.getOrderByUserId.map(order => (
                    <div>
                    <h4>Order: {order.id} ordered at {order.orderDate} for {order.price} €</h4>
                    <ul>
                        {order.products.map(product => (
                            <li >
                                <Product item={product}>{product.name}</Product>
                            </li>
                        ))}

                    </ul>
                    </div>
                ))}

        </div>
    );

}

export default MyOrders;
