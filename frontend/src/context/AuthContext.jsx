import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import { useFeedback } from "./FeedbackContext";
import Cookies from 'js-cookie'
const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [IsAuthenticated, setIsAuthenticated] = useState(false);
    const { showSuccess, showError } = useFeedback();

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
            showSuccess(res.data.message)
        } catch (error) {
            showError(error.response?.data?.error)
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            showSuccess(res.data.message)
        } catch (error) {
            console.log(error)
            showError(error.response?.data?.error)

        }
    }

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (cookies.token) {
                try {
                    const res = await verifyTokenRequest(cookies.token);
                    if (res.data) {
                        setIsAuthenticated(true);
                        setUser(res.data);
                    }
                } catch (error) {
                    showError(error.response?.data?.error || "Error al verificar token");
                    setIsAuthenticated(false);
                }
            }
        };

        checkLogin();
    }, []);


    return (
        <AuthContext.Provider
            value={{
                user,
                signup,
                signin,
                IsAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;