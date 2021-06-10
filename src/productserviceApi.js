import axios from 'axios';

let headers = null;

const productServiceApi = axios.create({
    baseURL: `http://localhost:3000/productservice`,
    timeout: 2000,
    headers: headers
});

productServiceApi.interceptors.request.use(function (config){
    let token = sessionStorage.getItem('token');
    if(token){
        console.log("Token: "+ token);
        config.headers  =  {'Authorization': `Bearer ${token}`,
                            "Content-Type": "application/json"}

    }
    return config

})

export default productServiceApi;