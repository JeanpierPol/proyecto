import { NavLink } from "react-router-dom";

const NavItem = ({ link, text, children }) => {
    return (
        <li className="nav-item">
            <NavLink
                to={link}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                aria-current="page"
            >
                {text}
                {children}
            </NavLink>
        </li>
    );
};

export default NavItem;
