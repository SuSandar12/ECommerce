import React,{useContext} from "react";
import {Link} from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/AuthContext";

const Navbar =()=>{
    const {user, logout} =useContext(AuthContext);

    return(
        <nav>
            <a href="/">Home</a>  |   <a href="/products">Products</a>    |       
            {user ? (
                <>
                    <span>Welcome, {user}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ):(
                 <a href="/a">Login</a>
            )}
        </nav>
    );
};
export default Navbar;