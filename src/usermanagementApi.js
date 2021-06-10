import axios from 'axios';

let headers = null;

const usermanagementApi =  axios.create({
    baseURL: `http://localhost:3000/usermanagement`,
    timeout: 2000,
    headers: headers
});

usermanagementApi.interceptors.request.use(function (config){
    let token = sessionStorage.getItem('token');
    if(token){
        console.log("Token: "+ token);
        config.headers  =  {'Authorization': `Bearer ${token}`,
                            "Content-Type": "application/json"}

    }
    return config

})
export default usermanagementApi;

