import Logo from '../Logo'
import { Link } from 'react-router-dom'

const NavbarBrand = ({link, title}) => {
    return (
        <>
            <Link className="navbar-brand" to={link}>
                <Logo alt="30" height="24"/>
                {title}
            </Link>

        </>
    )
}

export default NavbarBrand