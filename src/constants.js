import {gql} from "@apollo/client";

// export const productserviceApi = "http://localhost:3000/graphql";
// export const usermanagementApi = "http://localhost:8081/graphql";

export const getProductsQuery = gql`
        query {
            getProducts {
                name
                description
                id
                price
                category
            }
        }`;

export const getProductByIdQuery = gql`
        query Product($id: String!){
            getProductById(id: $id)  {
                name
                description
                id
                price
                category
            }
        }`;

export const createOrderMutation = gql`
  mutation CreateOrder($order: OrderInput) {
    createOrder(order: $order) {
      id  
      orderDate
      price
      productIds 
    }
  }
  
`;

export const loginQuery = gql`
  query Login($credentials: LoginInput) {
    login(credentials: $credentials) {
    token
    }
  }  
`;



