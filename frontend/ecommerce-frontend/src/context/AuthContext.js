import React, {Children, createContext, userState, useState} from "react";
export const AUthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(localStorage.getItem("user") || null);

    const login =(token, userData) =>{
        localStorage.setItem("token",token);
        localStorage.setItem("user",userData.username);
        setUser(userData.username);
    };

    const logout =() =>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setUser(null);
    };

    return(
        <AUthContext.Provider value={{user, login, logout}}>
            {children}
        </AUthContext.Provider>
    );
};