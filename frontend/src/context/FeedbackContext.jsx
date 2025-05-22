import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null);

    const showSuccess = (text) => {
        setMessage(text);
        setType("success");
    };

    const showError = (text) => {
        setMessage(text);
        setType("error");
    };

    const clear = () => {
        setMessage(null);
        setType(null);
    };

    return (
        <FeedbackContext.Provider value={{ showSuccess, showError, message, type, clear }}>
            {children}
        </FeedbackContext.Provider>
    );
};
