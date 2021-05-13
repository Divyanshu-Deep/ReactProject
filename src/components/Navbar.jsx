import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const AppBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">SuperMart.</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
        
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="/admin">Admin Panel</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Checkout</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Register</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
      </NavDropdown>
        
      </Navbar>
    </>
  );
};

export default AppBar;
