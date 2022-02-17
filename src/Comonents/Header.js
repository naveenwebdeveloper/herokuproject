import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

function header(props) {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand ><Link to="/">Bharat Bills</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto NavLinks">
                        <div className='NavUrls'>
                            <Nav.Link ><Link to="/dashboard">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/dashboard/Cdetails">Company Details</Link></Nav.Link>
                            <Nav.Link><Link to="/dashboard/Ledgers">Ledgers</Link></Nav.Link>
                            <Nav.Link><Link to="/dashboard/Bills">Bills</Link></Nav.Link>
                        </div>
                        <NavDropdown title={props.userName} id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/dashboard">My Profile</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={props.Logout}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header