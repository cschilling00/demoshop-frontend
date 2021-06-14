import React from 'react';

function AddToShoppingCart(props) {
    let count = localStorage.length;

    function handleClick() {
        console.log("Product with id "+ props.id + " should be added to shopping cart");
        localStorage.setItem('cartItem_'+count, props.id)
        console.log(localStorage.getItem('cartItem_'+count))
        count++;
    }
        return (
            <div>
                <button className='btn' onClick={handleClick}>Add to Shopping Cart</button>
            </div>
        );
}

export default AddToShoppingCart;

