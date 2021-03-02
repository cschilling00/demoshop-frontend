import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import ProductInfo from "./Components/ProductInfo";
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import ShoppingCart from "./Components/ShoppingCart";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import {setContext} from "@apollo/client/link/context";
import MyOrders from "./Components/MyOrders";
import Logout from "./Components/Logout";

// const client = new ApolloClient({
//     uri: '/productservice',
//     cache: new InMemoryCache()
// });
// const usermanagement = new ApolloClient({
//     uri: '/usermanagement',
//     cache: new InMemoryCache()
// })

const httpLinkUsermanagement = createHttpLink({
    uri: '/usermanagement',
});

const httpLinkProductService = createHttpLink({
    uri: '/productservice',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = sessionStorage.getItem('token');
    console.log(sessionStorage.getItem('token'))
    // return the headers to the context so httpLink can read them
    if(token){
        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            }
        }
    }
});

const usermanagement = new ApolloClient({
    link: authLink.concat(httpLinkUsermanagement),
    cache: new InMemoryCache()
});

const productservice = new ApolloClient({
    link: authLink.concat(httpLinkProductService),
    cache: new InMemoryCache()
});

function App() {
  return (

      <div className="App">
          <Router>
              <Navbar></Navbar>

              <ApolloProvider client={productservice}>
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
              </ApolloProvider>
              <Switch>
                  <ApolloProvider client={usermanagement}>
                      <Route path="/login">
                          <Login></Login>
                      </Route>
                      <Route path="/logout">
                          <Logout></Logout>
                      </Route>
                  </ApolloProvider>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
