import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [IsAuthenticated, setIsAuthenticated] = useState(false);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);

        } catch (error) {
            console.log(error.response.data);
        }
    };
    
    return (
        <AuthContext.Provider
            value={{
                user,
                signup,
                IsAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;