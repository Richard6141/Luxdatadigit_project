import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asserts/AllTaskForUser.css";
import {
  Card,
  Button,
  Modal,
  Form,
  FloatingLabel,
  Toast,
} from "react-bootstrap";
import axios from "axios";

function AllTaskForUser(props) {
  const [show, setShow] = useState(false);
  const [showme, setShowme] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [datatask, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const save = (e) => {
    e.preventDefault();
    const content = {
      userId: parseInt(localStorage.getItem("userId")),
      taskName: taskName,
      description: description,
    };
    console.log(content);
    const token = localStorage.getItem("Token");

    const headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .post("http://localhost:5000/tasks/", content, { headers })
      .then((res) => {
        axios.get("http://localhost:5000/tasks").then((res) => {
          setData(res.data);
          console.log(res.data);
        });
      })

      .catch((error) => {
        console.log("There was an error!", error);
      });
  };

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  const destroy = (e) => {
    const token = localStorage.getItem("Token");

    const headers = {
      Authorization: "Bearer " + token,
    };

    axios
      .delete("http://localhost:5000/tasks/" + e, { headers })
      .then((res) => {
        axios.get("http://localhost:5000/tasks").then((res) => {
          setData(res.data);
          console.log(res.data);
        });
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  };

  return (
    <div>
      <div>
        <h1> AllTasks</h1>

        <div id="all">
          {datatask.map((task) => {
            return (
              <>
                <Card className="text-center" id="card-main">
                  <Toast>
                    <Toast.Header>
                      <Button
                        variant="danger"
                        onClick={(e) => destroy(task.id)}
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      >
                        X
                      </Button>
                      <strong className="me-auto">{task.taskName}</strong>
                      <small>{dateParser(task.createdAt)}</small>
                    </Toast.Header>
                  </Toast>
                  <Card.Body>
                    <Card.Text>{task.description}</Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                      Modify
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
          <div>
            <Button variant="primary" onClick={handleShow}>
            A task<strong> +</strong> {" "}
            </Button>{" "}
          </div>
        </div>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>New task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => save(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={(e) => setTaskName(e.target.value)}
                  type="text"
                  placeholder="Enter title"
                />
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Description"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) => setDescription(e.target.value)}
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>{" "}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>{" "}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div />
      </div>
    </div>
  );
}
export default AllTaskForUser;
