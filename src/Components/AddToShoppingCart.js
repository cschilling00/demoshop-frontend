import React from 'react';

function AddToShoppingCart(props) {

    let productIds = sessionStorage.getItem('id').split(',')
    console.log("productid: "+productIds)

    function handleClick() {
        console.log("Product with id "+ props.id + " should be added to shopping cart");
        productIds.push(props.id);
        sessionStorage.setItem('id', productIds)
        console.log(sessionStorage.getItem('id'))
    }

        return (
            <div>
                <button onClick={handleClick}>Add to Shopping Cart</button>
            </div>
        );
}

export default AddToShoppingCart;

