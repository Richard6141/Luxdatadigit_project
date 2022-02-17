import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import "../asserts/signup.css";
import axios from "axios";

import { Redirect } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [birthday, setBirthday] = useState("");

  const register = (e) => {
    e.preventDefault();
    const enter = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      nationality: nationality,
      birthday: birthday,
      speciality: speciality,
    };
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    };
    console.log(
      name,
      surname,
      password,
      passwordConfirm,
      nationality,
      speciality,
      birthday
    );
    axios.post("http://localhost:5000/user/register", enter, headers).then(res =>{
      console.log("Succes")
      window.console.Redirect("/")
    }).catch(error=>{alert("Something when wrong !")})
  };
 

  return (
    <div className="signup">
      <Form onSubmit={(e) => register(e)} style={{ marginBottom: "0px" }}>
        <Row className="mb-3" style={{ margin: "8.5px" }}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              placeholder="Enter surname"
              required
            />
          </Form.Group>
        </Row>
        <Form.Group
          className="mb-3"
          style={{ margin: "20px" }}
          controlId="formGridAddress1"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email addresse"
            required
          />
        </Form.Group>
        <Row className="" style={{ display: "flex", margin: "8.5px" }}>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Nationality</Form.Label>
            <Form.Control required onChange={(e) => setNationality(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Speciality</Form.Label>
            <Form.Select required
              onChange={(e) => setSpeciality(e.target.value)}
              defaultValue="Choose..."
            >
              <option value={""}>Choose...</option>
              <option value={"Backend"}>Backend</option>
              <option value={"Frontend"}>Frontend</option>
              <option value={"Fullstack"}>Fullstack</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              onChange={(e) => setBirthday(e.target.value)}
              type="date"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group
          as={Col}
          style={{ margin: "20px" }}
          controlId="formGridPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            placeholder="Enter password"
            required
          />
        </Form.Group>

        <Form.Group
          as={Col}
          style={{ margin: "20px" }}
          controlId="formGridPassword"
        >
          <Form.Label>Password Confiramtion</Form.Label>
          <Form.Control
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="Password"
            placeholder="Enter password"
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          style={{ float: "right", marginRight: "20px" }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
