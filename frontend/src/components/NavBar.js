import React from "react";
import "../asserts/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" text="light">
      <Container fluid className="cont">
        <Navbar.Brand href="#">DevWorkTime</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">News</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <NavLink exact to="/signup">
            <Button variant="outline-info" className="me-3">
              Sign up
            </Button>
            </NavLink>
            <Button variant="outline-primary">Sign in</Button>
            <NavDropdown title="Username" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Today Tasks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Previews Tasks
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
