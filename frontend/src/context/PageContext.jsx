import { createContext, useContext, useState } from "react";
import { createPageRequest, getPagesByStoryRequest, getPageRequest } from "../api/page";
import { useFeedback } from "./FeedbackContext";

const PageContext = createContext();

export const usePage = () => {
    const context = useContext(PageContext);
    if (!context) throw new Error("usePage must be used within a PageProvider");
    return context;
};

export const PageProvider = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(false);
    const { showSuccess, showError } = useFeedback();

    const createPage = async (pageData) => {
        try {
            const res = await createPageRequest(pageData);
            showSuccess("Página creada correctamente");
            console.log(res)
            setPages(res);
            return res.data;
        } catch (error) {
            console.error("Error al crear página:", error);
            console.log(error)
            showError(error.response?.data?.error || "No se pudo crear la página");
            throw error;
        }
    };

    const getPagesByStory = async (idStory) => {
        try {
            const res = await getPagesByStoryRequest(idStory)
            setPages(res.data);
            return res.data;
        } catch (error) {
            console.error("Error al obtener las páginas:", error);
            console.log(error)
            showError(error.response?.data?.error || "No se pudo obtener las historias");
            throw error;

        }
    }

    const getPage = async (idPage) => {
        try {
            const res = await getPageRequest(idPage)
            setPages(res.data[0]);
            return res.data;
        } catch (error) {
            console.error("Error al obtener las páginas:", error);
            console.log(error)
            showError(error.response?.data?.error || "No se pudo obtener las historias");
            throw error;
        }
    }

    return (
        <PageContext.Provider
            value={{
                pages,
                loading,
                createPage,
                getPagesByStory,
                getPage
            }}
        >
            {children}
        </PageContext.Provider>
    );
};
