import { Link } from "react-router-dom";
const DropdownItem = ({ text, link, onClick, children }) => {

    return (
        <>
            <li>
                <Link className="dropdown-item" to={link} onClick={onClick}>
                    {text}
                    {children}
                </Link>
            </li>
        </>
    )
}

export default DropdownItem;