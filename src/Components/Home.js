import Product from "./Product";
import React from 'react';
import { Get } from 'react-axios'

function Home() {
    sessionStorage.setItem('token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaXNzIjoicHJvZHVjdHNlcnZpY2UtYXBpIiwiaWQiOiI2MDJhNzQxNjRmOWZmNjQwOGFhZDVkYTYiLCJleHAiOjE2MTcxNTIxNjEsImlhdCI6MTYxNzEzNzc2MX0.49kB8rqxv7_6OwHVypmG-ZEEQdOuotQ16iqIKssKu1AlXX8fGo0SqbMVkl0kqD_R-zaR4hLZ03ZJQ98FOXvsBQ")
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


