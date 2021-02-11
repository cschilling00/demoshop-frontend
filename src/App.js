import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import ProductInfo from "./Components/ProductInfo";
import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import {graphqlApi, getProductsQuery} from "./constants";
import ShoppingCart from "./Components/ShoppingCart";
import Navbar from "./Components/Navbar";

const client = new ApolloClient({
    uri: graphqlApi,
    cache: new InMemoryCache()
});

function App() {

    client
        .query({
            query: getProductsQuery
        }).then(result => console.log(result));

  return (
      <ApolloProvider client={client}>
      <div className="App">
      <h1>Welcome to the Shop!</h1>
          <Router>
              <Navbar></Navbar>
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
          </Router>
      </div>
      </ApolloProvider>
  );
}

export default App;
