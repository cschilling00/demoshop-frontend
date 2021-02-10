import React from 'react';

function AddToShoppingCart(props) {
    let count = sessionStorage.length;

    function handleClick() {
        console.log("Product with id "+ props.id + " should be added to shopping cart");
        sessionStorage.setItem('cartItem_'+count, props.id)
        console.log(sessionStorage.getItem('cartItem_'+count))
        count++;
    }
        return (
            <div>
                <button onClick={handleClick}>Add to Shopping Cart</button>
            </div>
        );
}

export default AddToShoppingCart;

