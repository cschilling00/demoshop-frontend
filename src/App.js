import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import ProductInfo from "./Components/ProductInfo";
import {ApolloClient, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import {getProductsQuery} from "./constants";
import ShoppingCart from "./Components/ShoppingCart";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

const client = new ApolloClient({
    uri: '/productservice',
    cache: new InMemoryCache()
});
const usermanagement = new ApolloClient({
    uri: '/usermanagement',
    cache: new InMemoryCache()
})
function App() {
  return (

      <div className="App">
          <Router>
              <Navbar></Navbar>

              <ApolloProvider client={client}>
              <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/shoppingCart">
                          <ShoppingCart />
                      </Route>

                      <Route path="/product/:id" children={<ProductInfo />}>
                      </Route>
              </Switch>
              </ApolloProvider>
              <Switch>
                  <ApolloProvider client={usermanagement}>
                      <Route path="/login">
                          <Login></Login>
                      </Route>
                  </ApolloProvider>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
