import React from "react";
import "../asserts/Body.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Body() {
  return (
    <div className="text-light" id="main">
      <div id="container">
        <div>
          <h1>Welcome to DEV WORK TIME</h1>
        </div>
        <div id="cta">
          <button className="btn btn-light">SIGN UP</button>
          <h3>OR</h3>
          <button className="btn btn-light">SIGN IN</button>
        </div>
      </div>
      <div id="imgdiv">
        <img id="homeimg" src="images/home.jpg" alt="" />
      </div>
    </div>
  );
}

export default Body;
