import {  createContext, useState } from "react";

export const authContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser ] = useState(null);
    return(
        <AuthProvider.Provider value ={{}} >
            {children}
        </AuthProvider.Provider>
    )
}