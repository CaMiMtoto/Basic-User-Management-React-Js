import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import AppBar from "../components/AppBar.jsx";
import AppFooter from "../components/Footer.jsx";

function AppLayout() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user)
        window.location.href = '/auth/login';
    return <div className="d-flex flex-column justify-content-between min-vh-100">
        <div className="flex-grow-1">
            <AppBar/>
            <Container className="py-4">
                <Outlet/>
            </Container>
        </div>
        <AppFooter/>
    </div>;
}

export default AppLayout;