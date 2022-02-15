import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

function Userlist(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/user").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Speciality</th>
            <th>Task number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map(user=>{
    return <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.email}</td>
    <td>{user.speciality}</td>
    <td>{user.birthday}</td>
    <td>
      <Button variant="primary">View</Button>{" "}
      <Button variant="danger">Del</Button>{" "}
    </td></tr>
  })}          
        </tbody>
      </Table>
    </div>
  );
}

export default Userlist;
