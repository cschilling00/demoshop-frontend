import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import ProductInfo from "./Components/ProductInfo";
import ShoppingCart from "./Components/ShoppingCart";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import MyOrders from "./Components/MyOrders";
import Logout from "./Components/Logout";
import productserviceApi from "./productserviceApi";
import usermanagementApi from "./usermanagementApi";
import AxiosProvider from "react-axios/lib/components/AxiosProvider";

function App() {
  return (

      <div className="App">
          <Router>
              <Navbar></Navbar>

              <AxiosProvider instance={productserviceApi}>
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
                  <AxiosProvider instance={usermanagementApi}>
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