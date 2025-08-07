import React,{useContext} from "react";
import {Link} from "react-router-dom";
import { AUthContext, AuthProvider } from "../context/AuthContext";

const Navbar =()=>{
    const {user, logout} =useContext(AUthContext);

    return(
        <nav>
            <link to="/">Home</link>  |   <link to="/products">Products</link>
            {user ? (
                <>
                    <span>Welcome, {user}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ):(
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};
export default Navbar;