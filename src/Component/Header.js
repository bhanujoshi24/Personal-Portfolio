import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

const Header = () => {
  let activeStyle = {
    color: "#ffff",
  };
  return (
    <div>
      <Navbar expand="md" fixed="top">
        <Container>
          <Navbar.Brand className="navbar-brand">
            <span className="logo-shape logo-text">B.J.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Skills
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
