import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {

    return (
        <header className='header'>
            <Link to={"/"}>Home</Link>
            <Link to={"/shoppingCart"}>Shopping Cart</Link>
            <Link to={"/myOrders"}>My orders</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/logout"}>Logout</Link>
        </header>
    );
}

export default Navbar;
