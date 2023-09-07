import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { useEffect } from 'react';

const SingleStudentDetails = () => {


  const inputRef  = useRef();

  const handleSubmit = ()=>{
  const searchedData = inputRef.current.value;
  
  }


  return (
    <div style={{width:"80%"}} >
<h3>Single Student Details</h3>
<Container fluid>
<Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
               ref={inputRef}
              //  onChange={handleSubmit}
              />
              <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
              </Form>

</Container>
    </div>
  )
}

export default SingleStudentDetails