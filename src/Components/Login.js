import React, {useState} from 'react';
import {useLazyQuery} from "@apollo/client";
import {loginQuery} from "../constants";

function Login() {

    const [username, setUsername] = useState('user');
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
        if (!sessionStorage.key('token')){
            loginFunction()
        }
    }

    if (data && data.login) {
        console.log(data.login);
        sessionStorage.setItem("token", data.login.token)
        sessionStorage.setItem("userId", data.login.userId)
    }
    function changeUsername(event) {
        setUsername(event.target.value);
    }
    function changePassword(event) {
        setPassword(event.target.value);
    }


        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={handleClick}>
                    <label>
                        Username:
                        <input type="text"  onChange={changeUsername}/>
                    </label>
                    <p><label>
                        Password:
                        <input type="password" onChange={changePassword}/>
                    </label></p>
                    <input className='btn'  type="submit" value="Login"/>
                </form>
            </div>
        );
}

export default Login;
