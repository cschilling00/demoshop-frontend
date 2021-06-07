import React, {useState} from 'react';
import {Post} from "react-axios";

function Login() {

    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('password');
    let submitAllowed = false;

    function handleClick() {
        // submitAllowed = true;
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
                        <input type="text" onChange={changePassword}/>
                    </label></p>
                    <input type="submit" value="Submit"/>
                </form>

                {!sessionStorage.key('token') &&
                    <Post url="/users/login" data={{'username': username,
                        'password': password }}>
                        {(error, response, isLoading, makeRequest, axios) => {
                            if(error) {
                                return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                            }
                            else if(isLoading) {
                                return (<div>Loading...</div>)
                            }
                            else if(response !== null) {
                                console.log(response.data);
                                sessionStorage.setItem("token", response.data.token);
                                sessionStorage.setItem("userId", response.data.userId);
                            }
                            return (<div>Default message before request is made.</div>)
                        }}
                    </Post>

                }
            </div>
        );
}

export default Login;
