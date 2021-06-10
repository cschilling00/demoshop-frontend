import {useParams} from "react-router-dom";
import AddToShoppingCart from "./AddToShoppingCart";
import {Get} from "react-axios";

function ProductInfo() {
    let { id } = useParams();
    
    return (
        <Get url="/products" params={{id: id}}>
            {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                    return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                    return (<div>Loading...</div>)
                }
                else if(response !== null) {
                    console.log(response.data)
                    return (
                        <div>
                            <p>Name: {response.data[0].name}</p>
                            <p>Id: {response.data[0].id}</p>
                            <p>Price: {response.data[0].price}</p>
                            <p>Description: {response.data[0].description}</p>
                            <p>Category: {response.data[0].category}</p>
                            <AddToShoppingCart id={id}></AddToShoppingCart>
                        </div>
                    )
                }
                return (<div></div>)
            }}
        </Get>
    );
}
export default ProductInfo;
