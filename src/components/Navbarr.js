import React, {useContext, useEffect, useState} from 'react';
// import {useFormik} from 'formik';
import {Button, Card, Container, Form, Nav, NavbarBrand, NavDropdown, Row} from "react-bootstrap";
import * as Yup from "yup";
// import './Login.css';
import axios, {Axios} from "axios";
// import {LoginContext} from "../../context/LoginContext";
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import './Navbarr.css'

const Navbarr =()=>{
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="#E2DDDD" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: "black" }}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" style={{ color: "black" }}>
                                <NavDropdown.Item href="#action/3.1" style={{ color: "black" }}>Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" style={{ color: "black" }}>Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" style={{ color: "black" }}>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                            <Nav.Link eventKey={2} href="Login.js">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>


    );
}
export default Navbarr;