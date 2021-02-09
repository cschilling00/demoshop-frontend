import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {getProductByIdQuery} from "../constants";
import AddToShoppingCart from "./AddToShoppingCart";
import Product from "./Product";

function ProductInfo() {
    let { id } = useParams();
    const {loading, error, data} = useQuery(getProductByIdQuery, {
        variables: {id},
    });
    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;

    return (
        <div>
            <p>Name: {data.getProductById.name}</p>
            <p>Id: {data.getProductById.id}</p>
            <p>Price: {data.getProductById.price}</p>
            <p>Description: {data.getProductById.description}</p>
            <AddToShoppingCart id={ data.getProductById.id}></AddToShoppingCart>
        </div>
    );

}
export default ProductInfo;
