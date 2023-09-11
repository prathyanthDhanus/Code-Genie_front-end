import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';


const SingleStudentDetails = () => {
  const inputRef = useRef();
  const [defaultValue,setDefaultValue] = useState("")

const handleSearch = async ()=>{
   const id = inputRef.current.value;
 try{
    const response = await axios.get(`http://localhost:3000/admin/student/${id}`);
       const data = response.data;
       setDefaultValue(data)
  console.log(response);
 }catch(error){
  console.log("Error",error)
 }
}
console.log(defaultValue);

  return (

    <div style={{width:"80%"}} >
<h3> Details of a Student </h3>

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div className='d-flex' style={{alignItems:'center', justifyContent:'center'}}>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for a student by ID"
              className="me-2"
              aria-label="Search"
              ref={inputRef}
            />
          </Form>
          <Button variant="outline-success" onClick={handleSearch}>Search</Button>

    </div>
      <div >
    
      <TextField
          id="outlined-read-only-input"
          label="Username"
          defaultValue=''
          InputProps={{
            readOnly: true,
          }}
        />
     
        <TextField
          id="outlined-read-only-input"
          label="Email"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Batch-Number"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        
      </div>
      
       
      <div>
      <h5>Profile Details Section</h5>
      <TextField
          id="outlined-read-only-input"
          label="Full-Name"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
         <TextField
          id="outlined-read-only-input"
          label="Phone-Number"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Pincode"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div>
      <TextField
          id="outlined-read-only-input"
          label="Blood_Group"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
      <TextField
          id="outlined-multiline-static"
          label="Full_Address"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
          <TextField
          id="outlined-read-only-input"
          label="Qualification"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div>
      <TextField
          id="outlined-read-only-input"
          label="Guardian Name"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
         <TextField
          id="outlined-read-only-input"
          label="Batch-Number"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
         <TextField
          id="outlined-read-only-input"
          label="Guardian-PhoneNumber"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
       
    
      </div>
    </Box>

    </div>
  )
}

export default SingleStudentDetails