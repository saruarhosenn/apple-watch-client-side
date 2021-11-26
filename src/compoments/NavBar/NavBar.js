import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './NavBar.css'
import logo from '../../img/logo.png'
const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="shadow">
            <Navbar style={{ backgroundColor: "#FFFFFF" }} collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" style={{textDecoration: "none"}}>  <img style={{height: "60px" }} src={logo} alt={logo} /> <span className="text-danger fw-bold">Watch</span> </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: "#6F8C88" }} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="navbarlink">

                            {user?.email && <NavLink eventKey={2} to="/dashboard">
                                <button className="btn btn-primary me-2"> DashBoard</button>
                            </NavLink>}
                            {
                                user?.email ?
                                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                                    :
                                    <NavLink eventKey={2} to="/login">
                                        <button className="btn btn-primary">login</button>
                                    </NavLink>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div className="navuser">
                    <img src={user.photoURL} alt="" />
                    <span className="text-dark">{user.displayName}</span>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;