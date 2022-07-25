import React, { useState } from "react";
import CartSummary from "./CartSummary";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";
export default function Navi() {
  //default false because this is an authentication
  const [isAuthenticated, setisAuthenticated] = useState(true);

  const history = useNavigate();

  function handleSignOut() {
    setisAuthenticated(false);
    history("/");
  }

  function handleSignIn() {
    setisAuthenticated(true);
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} something="1" />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
