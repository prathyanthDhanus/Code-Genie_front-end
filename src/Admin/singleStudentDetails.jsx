import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CustomCard from '../Components/card';
import Studentdetails from './studentdetails';

const SingleStudentDetails = () => {

  const [student,setStudent] = useState(null);
  const inputRef  = useRef();

  const handleSubmit = async (e)=>{
    e.preventDefault()
  const  id = inputRef.current.value;

  try{
    const response = await axios.get(`http://localhost:3000/admin/student/${id}`);
    // console.log(response.data.data)
    setStudent(response.data.data)
   
  }catch(error){
    console.log(error);
  }

  }

  useEffect(() => {
    // This code will run after 'student' has been updated.
    // console.log(student);
  }, [student]);
   
  // useEffect(()=>{
  //   const fetchData = async ()=>{

  //     const response = await axios.get('http://localhost:3000//admin/student/')
  //   }
  // })
    

  return (
    <div style={{width:"80%"}} >
<h3>Single Student Details</h3>
<Container fluid>

              {student && (
         <p>gg</p>
        )}

</Container>
    </div>
  )
}

export default SingleStudentDetails