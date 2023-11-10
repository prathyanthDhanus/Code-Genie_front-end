import React from 'react'
import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';



const Edittopic = () => {

  const { id } = useParams();
  const [topicData, setTopicData] = useState([]);
  // console.log(id);
  const inputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/domain/topic/${id}`);
        const data = response.data.data;
        setTopicData([data]);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id])
  // console.log(topicData);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const topicData = {
       domainName : inputRef.current.domain.value,
       topicCategory : inputRef.current.title.value,
       topicName : inputRef.current.topic.value,
       resource : inputRef.current.resource.value,
      week : inputRef.current.week.value,
      day : inputRef.current.day.value,
    }
    console.log(topicData);

    try{
      const response =  await axios.put(`http://localhost:3000/admin/domain/topic/${id}`,topicData)
      console.log(response)
      if(response.status === 200){
       alert(response.data.message)
      }else{
       alert("something went wrong")
      }
   }catch(error){
 console.log(error)
   }
     
  }

  return (
    <div style={{ marginLeft: "25rem" }}>
      <div >
      {topicData.map((item, index) => (
        <Form ref={inputRef} key={index}>
          <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Domain Name</Form.Label>
              <Form.Control
                type="text"
                name='domain'
                placeholder="Write domain name here !!!!!!!!"
                defaultValue={item.domain.name}
                title="Hint: Enter the domain name (e.g., MERN STACK, PYTHON, etc.)" 
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Topic Category</Form.Label>
              <Form.Control
                type="text"
                name='title'
                defaultValue={item.category}
                placeholder="Write domain name here !!!!!!!!"
                title="Hint: Enter the topic name (e.g., React, MongoDB, DJANGO etc.)"
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Topic Name</Form.Label>
              <Form.Control
                type="text"
                name='topic'
                defaultValue={item.topicName}
                placeholder="Write domain name here !!!!!!!!"
                title="Hint: Enter the topic name (e.g., React, MongoDB, DJANGO etc.)"
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Resource</Form.Label>
              <Form.Control
                type="text"
                name='resource'
                defaultValue={item.resource}
                placeholder="Write domain name here !!!!!!!!"
                title="Hint: Provide available resources (e.g., Youtube channels, Links, websites, etc.)"
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Week</Form.Label>
              <Form.Control
                type="text"
                name='week'
                defaultValue={item.week}
                placeholder="Write domain name here !!!!!!!!"
                title="Hint: Provide the week (e.g., Week 1 etc.)"
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Day</Form.Label>
              <Form.Control
                type="text"
                name='day'
                defaultValue={item.day}
                placeholder="Write domain name here !!!!!!!!"
                title="Hint: Provide the day (e.g., Day 1 etc.)"
              />
            </Form.Group>
    
            <Button variant="warning" type='submit' onClick={handleSubmit}>
              Add
            </Button>

          </>
        </Form>
      ))}
          </div>


    </div>
  )
}

export default Edittopic