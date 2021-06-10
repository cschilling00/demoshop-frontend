import React, {useState} from 'react';
import {Post} from "react-axios";
import productserviceApi from "../productserviceApi";
import usermanagementApi from "../usermanagementApi";

function Login() {

    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('password');


    const handleClick = async event => {
        event.preventDefault();
        var credentials = {};
        credentials.username= username;
        credentials.password= password;
        if (!sessionStorage.key('token')){
            usermanagementApi.post(`/users/login`, credentials, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(res => {
                    // console.log(res.data);
                    sessionStorage.setItem("token", res.data.token);
                    sessionStorage.setItem("userId", res.data.userId);
                    alert("You have successfully logged in!");
                }).catch(error => {
                console.error(error);
                alert(error);

            });
        } else {
            alert("You are already logged in!");
        }

    }
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={handleClick}>
                    <label>
                        Username:
                        <input type="text"  onChange={e => setUsername(e.target.value)}/>
                    </label>
                    <p><label>
                        Password:
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label></p>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
}

export default Login;
