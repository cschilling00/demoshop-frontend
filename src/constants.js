import {gql} from "@apollo/client";

export const graphqlApi = "http://localhost:3000/graphql";

export const getProductsQuery = gql`
        query {
            getProduct {
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

