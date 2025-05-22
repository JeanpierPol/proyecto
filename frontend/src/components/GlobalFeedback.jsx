import { useFeedback } from "../context/FeedbackContext";
import { AlertSuccess, AlertWarning } from "./alert/AlertComponents";

export const GlobalFeedback = () => {
    const { message, type } = useFeedback();

    if (!message) return null;

    return (
        <div >
            {type === "success" && <AlertSuccess text={message} />}
            {type === "error" && <AlertWarning text={message} />}
        </div>
    );
};
