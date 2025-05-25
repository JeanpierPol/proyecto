import { NavLink } from "react-router-dom";

const NavItem = ({ link, text }) => {
    return (
        <li className="nav-item">
            <NavLink
                to={link}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                aria-current="page"
            >
                {text}
            </NavLink>
        </li>
    );
};

export default NavItem;
