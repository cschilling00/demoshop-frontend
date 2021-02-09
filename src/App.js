import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import AddToShoppingCart from "./Components/AddToShoppingCart";
import ProductInfo from "./Components/ProductInfo";
import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import {graphqlApi, getProductsQuery} from "./constants";

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
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/shoppingCart">
                      <AddToShoppingCart />
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
