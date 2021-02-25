import React, {useState} from 'react';
import {ApolloClient, InMemoryCache, useMutation, useQuery,useLazyQuery} from "@apollo/client";
import {getProductByIdQuery, getProductsQuery, loginQuery} from "../constants";

function Login() {

    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');
    const [
        loginFunction,
        {error, loading, data }
    ] = useLazyQuery(loginQuery, {
        variables: {credentials:{username: username, password: password}},
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;
    function handleClick() {
        loginFunction()

        // console.log(data.login.token)
        // login({
        //     // update: (proxy, mutationResult) => {
        //     //     console.log('mutationResult: ', mutationResult);
        //     //     console.log('token: ', mutationResult.data.token);
        //     // },
        //     variables: {credentials: {username: username, password: password}}
        // });
    }
    //
    // function handleClick(event) {
    //     alert('A name was submitted: ' + username);
    //     event.preventDefault();
    // }
    if (data && data.login) {
        console.log(data.login);
    }
    function changeUsername(event) {
        setUsername({value: event.target.value});
    }
    function changePassword(event) {
        setPassword({value: event.target.value});
    }


        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={handleClick}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={changeUsername}/>
                    </label>
                    <p><label>
                        Password:
                        <input type="text" value={password} onChange={changePassword}/>
                    </label></p>
                    <input type="submit" value="Submit"/>
                </form>
                {data && data.login && data.login.token }
            </div>

        );

}

export default Login;
