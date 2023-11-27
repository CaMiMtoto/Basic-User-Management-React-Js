import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import NavLink from "./NavLink.jsx";
import {useNavigate} from "react-router-dom";

export default function AppBar() {

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/auth/login");
    }
    return (<Navbar expand="md" className="bg-body-tertiary border-bottom">
        <Container>
            <Navbar.Brand href="#home">
                User Management
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as="span">
                        <NavLink href='/' text="Home"/>
                    </Nav.Link>
                    <Nav.Link as="div">
                        <NavLink href='/profile' text="Profile"/>
                    </Nav.Link>
                    <NavDropdown title="Hello,Jean" id="basic-nav-dropdown">
                        <NavDropdown.Item as="div">
                            <NavLink href='/change-password' text="Change Password"/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}