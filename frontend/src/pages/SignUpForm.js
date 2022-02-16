import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Form, Row, Col, Button} from "react-bootstrap"
import '../asserts/signup.css'

function SignUpForm() {
  return (
    <div className='signup'>
      <Form >
        <Form.Group
          className="mb-3"
          style={{ margin: "20px" }}
          controlId="formGridAddress1"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email addresse" />
        </Form.Group>

        <Form.Group
          as={Col}
          style={{ margin: "20px" }}
          controlId="formGridPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Enter password" />
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

export default SignUpForm;
