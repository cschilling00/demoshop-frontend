import React from 'react'
import {Link} from "react-router-dom";

function Product(props) {

    return (
        <Link to={`/product/`+ props.item.id}>{props.item.name}</Link>
    );

}
export default Product;
