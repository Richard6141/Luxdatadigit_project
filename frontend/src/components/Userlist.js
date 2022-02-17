import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import "../asserts/signup.css";

import axios from "axios";

function Userlist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/user").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [])

  const remove = (e)=>{
    const token = localStorage.getItem("Token")
    const headers = {
      "Content-type": "application/json",
      'Access-Control-Allow-Origin': "https://developer.mozilla.org",
      "Authorisation": "Bearer "+ token
  };

    axios.post("http://localhost:5000/user/destroy/"+ e , headers)
    .catch(error => {
        console.log('There was an error!', error);
    });
  }

  return (
    <div className="userlist">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Speciality</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map(user=>{
    return <tr>
    <td>{user.id} </td>
    <td>{user.name} </td>
    <td>{user.surname} </td>
    <td>{user.email} </td>
    <td>{user.speciality}</td>
    <td>
      <Button variant="primary" >View</Button>{" "}
      <Button variant="danger" onClick={()=> remove(user.id) }>Del</Button>{" "}
    </td></tr>
  } )}          
        </tbody>
      </Table>
    </div>
  );
}

export default Userlist;
