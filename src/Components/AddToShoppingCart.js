import React, {useState} from 'react';

function AddToShoppingCart(props) {
    const [productsIds, setproductsIds] = useState([]);

    console.log("Props: " +props.id)
    console.log(productsIds);


    function handleClick() {
        console.log("Product with id "+ props.id + " should be added to shopping cart");
        setproductsIds([
            ...productsIds, props.id

        ]);
        console.log(productsIds);

    }

        return (
            <div>
                <button onClick={handleClick}>Add to Shopping Cart</button>
            </div>
        );




}

export default AddToShoppingCart;

