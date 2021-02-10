import React from 'react'
import {Link} from "react-router-dom";

function Product(props) {

    return (
        <div>
            <Link to={`/product/`+ props.item.id}>{props.item.name}</Link>
        </div>
    );

}
export default Product;
