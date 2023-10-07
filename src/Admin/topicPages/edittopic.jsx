import React from 'react'
import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';


const Edittopic = () => {

    const {id} = useParams()
    console.log(id);
    const inputRef = useRef();

    const handleSubmit = ()=>{

    }
  return (
    <div style={{marginLeft:"25rem"}}>
<div >
        
        <Form ref={inputRef} >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Domian Name</Form.Label>
      <Form.Control type="text" name='domain'   placeholder="Write domain name here !!!!!!!! "
       title="Hint: Enter the domain name (e.g., MEARN STACK,PYTHON, etc.)"
       />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Topic Category</Form.Label>
      <Form.Control type="text" name='title'   placeholder="Write domain name here !!!!!!!! " 
         title="Hint: Enter the topic name (e.g., React, MongoDB,DJANGO etc.)"
      />
    </Form.Group> 

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label >Topic Name</Form.Label>
      <Form.Control type="text" name='topic'   placeholder="Write domain name here !!!!!!!! " 
         title="Hint: Enter the topic name (e.g., React, MongoDB,DJANGO etc.)"
      />
    </Form.Group> 

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label >Resource</Form.Label>
      <Form.Control type="text" name='resource'   placeholder="Write domain name here !!!!!!!! " 
         title="Hint: Provide available resources(e.g., Youtube channels, Links,websites etc.)"
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label >Week</Form.Label>
      <Form.Control type="text" name='week'   placeholder="Write domain name here !!!!!!!! " 
         title="Hint: Provide the week (e.g., Week 1 etc.)"
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label >day`</Form.Label>
      <Form.Control type="text" name='day'   placeholder="Write domain name here !!!!!!!! " 
         title="Hint: Provide the  day  (e.g.,Day 1 etc.)"
      />
    </Form.Group>
   
    <Button variant="warning" type='submit' onClick={handleSubmit}>
            Add
          </Button>
  </Form>
      </div>


    </div>
  )
}

export default Edittopic