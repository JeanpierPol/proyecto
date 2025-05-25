import { Link } from "react-router-dom";
const DropdownItem = ({text, link}) =>{

    return(
        <>
         <li><Link className="dropdown-item" to={link}>{text}</Link></li>
        </>
    )
}

export default DropdownItem;