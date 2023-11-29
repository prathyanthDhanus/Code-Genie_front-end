import React from "react";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import Form from "react-bootstrap/Form";
import "../topicPages/topic.css";
import axios from "axios";

const CreateTopic = () => {
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const topicData = {
      domainName: inputRef.current.domain.value,
      topicCategory: inputRef.current.title.value,
      topicName: inputRef.current.topic.value,
      resource: inputRef.current.resource.value,
      week: inputRef.current.week.value,
      day: inputRef.current.day.value,
    };
    // console.log(topicData);
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/topic",
        topicData
      );
      console.log(response);
      if (response.status === 201) {
        alert(response.data.message);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="create-topic-form">
        <div>
          <Form ref={inputRef}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Domian Name</Form.Label>
              <Form.Control
                type="text"
                name="domain"
                placeholder="Write domain name here !!!!!!!! "
                title="Hint: Enter the domain name (e.g., MEARN STACK,PYTHON, etc.)"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Topic Category</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Write domain name here !!!!!!!! "
                title="Hint: Enter the topic name (e.g., React, MongoDB,DJANGO etc.)"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Topic Name</Form.Label>
              <Form.Control
                type="text"
                name="topic"
                placeholder="Write domain name here !!!!!!!! "
                title="Hint: Enter the topic name (e.g., React, MongoDB,DJANGO etc.)"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Resource</Form.Label>
              <Form.Control
                type="text"
                name="resource"
                placeholder="Write domain name here !!!!!!!! "
                title="Hint: Provide available resources(e.g., Youtube channels, Links,websites etc.)"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Week</Form.Label>
              <Form.Control
                type="text"
                name="week"
                placeholder="Write domain name here !!!!!!!! "
                title="Hint: Provide the week (e.g., Week 1 etc.)"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>day`</Form.Label>
              <Form.Control
                type="text"
                name="day"
                placeholder="Write domain name here !!!!!!!! "
                title="Hint: Provide the  day  (e.g.,Day 1 etc.)"
              />
            </Form.Group>

            <Button variant="warning" type="submit" onClick={handleSubmit}>
              Add
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateTopic;
