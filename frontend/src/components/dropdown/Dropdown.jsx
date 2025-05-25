import React from 'react';

const Dropdown = ({ text, children }) => {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {text}
            </a>
            <ul className="dropdown-menu">
                {children}
            </ul>
        </li>
    );
};

export default Dropdown;
