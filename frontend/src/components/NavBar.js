import React from "react";
import "../asserts/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Button,
  Form,
} from "react-bootstrap";
function NavBar() {
  const logout = (e) => {
    e.preventDefault()

    const token = localStorage.getItem("Token");
    if(token != undefined ){
      localStorage.removeItem("Token")
      localStorage.removeItem("userId")
      window.location.replace("/")
    }else{
      window.location.replace("/")
    }
  };

  return (
    <Navbar bg="dark" variant="dark" text="light" id="nvb">
      <Container fluid className="cont">
        <Navbar.Brand href="">DevWorkTime</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/alltask">Tasks</Nav.Link>
            <Nav.Link href="/alluser">Users</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Nav.Link href="/signup">
              <Button variant="outline-info" className="me-3">
                Sign up
              </Button>
            </Nav.Link>
            <Nav.Link href="/signin">
              <Button variant="outline-primary">Sign in</Button>
            </Nav.Link>
            <NavDropdown title="Username" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Today Tasks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={(e)=>logout(e)}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
