import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import ProductInfo from "./Components/ProductInfo";
import ShoppingCart from "./Components/ShoppingCart";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import MyOrders from "./Components/MyOrders";
import Logout from "./Components/Logout";
import axios from "axios";
import AxiosProvider from "react-axios/lib/components/AxiosProvider";

// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = sessionStorage.getItem('token');
//     console.log(sessionStorage.getItem('token'))
//     // return the headers to the context so httpLink can read them
//     if(token){
//         return {
//             headers: {
//                 ...headers,
//                 Authorization: `Bearer ${token}`,
//             }
//         }
//     }
// });



let token = sessionStorage.getItem('token');
let headers = null;
if(token){
    headers =  {'Authorization': `Bearer ${token}` }

}

const usermanagement = axios.create({
    baseURL: '/usermanagement',
    timeout: 2000,
    headers: headers
});

const productservice = axios.create({
    baseURL: '/productservice',
    timeout: 2000,
    headers: headers
});

function App() {
  return (

      <div className="App">
          <Router>
              <Navbar></Navbar>

              <AxiosProvider instance={productservice}>
              <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/shoppingCart">
                          <ShoppingCart />
                      </Route>

                      <Route path="/product/:id" children={<ProductInfo />}>
                      </Route>
                  <Route path="/myOrders">
                      <MyOrders></MyOrders>
                  </Route>
              </Switch>
              </AxiosProvider>
              <Switch>
                  <AxiosProvider instance={usermanagement}>
                      <Route path="/login">
                          <Login></Login>
                      </Route>
                      <Route path="/logout">
                          <Logout></Logout>
                      </Route>
                  </AxiosProvider>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
