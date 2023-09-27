import React from 'react';
import "./navbar.css";
import CartWidget from './CartWidget.js';

//Importaciones de React-Boostrap para NavBar
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar () {
    return (
        <Navbar className="bgColor" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MundoCelulares</Navbar.Brand>
            </Container>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#home">Apple</Nav.Link>
                    <Nav.Link href="#">Samsung</Nav.Link>
                    <Nav.Link href="#">Xiaomi</Nav.Link>
                    <Nav.Link href="#">Motorola</Nav.Link>
                    <Nav.Link href="#">Accesorios</Nav.Link>
                    <Nav.Link><CartWidget counter="0"></CartWidget></Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default NavBar;