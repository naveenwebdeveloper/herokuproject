import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

function header(props) {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Bharat Bills</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto NavLinks">
                        <div className='NavUrls'>
                            <Nav.Link ><Link to="/dashboard">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/CompanyDetails">Company Details</Link></Nav.Link>
                            <Nav.Link><Link to="/Ledgers">Ledgers</Link></Nav.Link>
                            <Nav.Link><Link to="/Ledgers">Bills</Link></Nav.Link>
                        </div>
                        <NavDropdown title={props.userName} id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/Myprofile">My Profile</Link></NavDropdown.Item>
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