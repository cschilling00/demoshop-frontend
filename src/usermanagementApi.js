import axios from 'axios';

let token = sessionStorage.getItem('token');
let headers = null;
if(token){
    headers =  {'Authorization': `Bearer ${token}` }

}

export default axios.create({
    baseURL: `http://localhost:3000/usermanagement`,
    timeout: 2000,
    headers: headers
});