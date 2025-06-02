import ToggleTheme from "./ToggleTheme";
import NavItem from "./NavItem";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";
import NavbarBrand from "./NavbarBrand";
import { useAuth } from "../../context/AuthContext";
import AvatarComponents from "../imagenComponent/AvatarComponents";
const Navbar = () => {
    const { IsAuthenticated, logout, user } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavbarBrand link="/" title="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavItem link="/" text="Historias" />

                        {
                            IsAuthenticated ?
                                (
                                    <>

                                        <NavItem >
                                            <AvatarComponents height="25" src={user.avatar} />
                                        </NavItem>

                                        <Dropdown text="Menú">
                                            <DropdownItem text="Perfil" link="/profile" />
                                            <DropdownItem text="Crear historia" link="/story/create" />
                                            <li><hr className="dropdown-divider" /></li>
                                            <DropdownItem text="Cerrar sesión" link="/" onClick={logout} />
                                        </Dropdown>
                                    </>

                                ) : (
                                    <>
                                        <NavItem link="/login" text="Login" />
                                        <NavItem link="/register" text="Registro" />
                                    </>
                                )
                        }

                    </ul>
                    <ToggleTheme />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;