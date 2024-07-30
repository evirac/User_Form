import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Nav className="m-2" variant="pills">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/register">
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/all-users">
          Users
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
