import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Form, Col, Button} from "react-bootstrap"
import '../asserts/signup.css'
import axios from "axios"


const SignInForm = () =>{

  const [data, setData] = useState({})
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const login = (e)=>{
    e.preventDefault();
    const enter = {
      email : email,
      password : password,
    };
    const headers = {
      "Content-type": "application/json",
      'Access-Control-Allow-Origin': "*",
      "Access-Control-Allow-Credentials": true
  };

   axios.post("http://localhost:5000/user/login", enter, headers).then(response => {

   localStorage.setItem("Token",response.data.token)
       localStorage.setItem("userId", response.data.decoc)
    })
    .catch(error => {
        console.log('There was an error!', error);
    });
  }


  return (
    <div className='signup'>
      <Form onSubmit={(e)=>login(e)}>
        <Form.Group
          className="mb-3"
          style={{ margin: "20px" }}
          controlId="formGridAddress1"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email addresse" />
        </Form.Group>

        <Form.Group
          as={Col}
          style={{ margin: "20px" }}
          controlId="formGridPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=>setPassword(e.target.value)}  type="Password" placeholder="Enter password" />
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
}

export default SignInForm;
