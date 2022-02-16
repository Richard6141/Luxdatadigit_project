import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Form, Row, Col, Button} from "react-bootstrap"
import '../asserts/signup.css'

function SignInForm() {
    return (
        <div className='signup'>
            <Form style={{  marginTop:'40px', marginBottom:'0px' }}>
            <Row className="mb-3" style={{  margin:'20px' }}>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col}  controlId="formGridPassword">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter surname" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3"  style={{  margin:'20px' }}  controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email addresse" />
            </Form.Group>

            <Row className="mb-3" style={{  margin:'20px', display:'flex' }}>
                <Form.Group as={Col}  controlId="formGridCity">
                <Form.Label>Nationality</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col}  controlId="formGridState">
                <Form.Label>Speciality</Form.Label>
                <Form.Select    defaultValue="Choose...">
                    <option value={""}>Choose...</option>
                    <option value={"Backend"}>Backend</option>
                    <option value={"Frontend"}>Fronend</option>
                    <option value={"Fullstack"}>Fullstack</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control type="date"/>
                </Form.Group>
            </Row>

            <Form.Group as={Col} style={{  margin:'20px' }} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control    type="Password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group as={Col} style={{  margin:'20px' }} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="Password" placeholder="Enter password" />
                </Form.Group>

            <Button variant="primary" style={{ float: 'right', marginRight:'20px' }} type="submit">
                Submit
            </Button>
            </Form>        
        </div>
    );
}

export default SignInForm;