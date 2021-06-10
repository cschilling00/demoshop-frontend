import Product from "./Product";
import React from 'react';
import { Get } from 'react-axios'

function Home() {
    return (
    <div>
        <Get url="/products">
            {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                    return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                    return (<div>Loading...</div>)
                }
                else if(response !== null) {
                    console.log(response.data[0])
                    return (
                        <div>
                            <ul>
                                {response.data.map(item => (
                                    <li key={item.id}>
                                        <Product item={item}>{item.name}</Product>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }
                return (<div></div>)
            }}
        </Get>
    </div>

    );

}

export default Home;


