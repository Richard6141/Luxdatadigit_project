import React from "react";
import "../asserts/Body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,

} from "react-bootstrap";

function Body() {
  return (
    <div className="text-light" id="main">
      <div id="container">
        <div>
          <h1>Welcome to DEV WORK TIME</h1>
        </div>
        <div id="cta">
        <Nav.Link className="btn btn-light"href="/signup">SIGN UP</Nav.Link>
          <h3>OR</h3>
        <Nav.Link className="btn btn-light"href="/signin">SIGN IN</Nav.Link>

        </div>
      </div>
      <div id="imgdiv">
        <img id="homeimg" src="images/home.jpg" alt="" />
      </div>
    </div>
  );
}

export default Body;
