import React from 'react'
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';


const StudentEdit = () => {

    const [studentData, setStudentData] = useState([]);
    const {id}= useParams()

    useEffect(()=>{
        const fetchData = async ()=>{

            try{
                const response = await axios.get(`http://localhost:3000/admin/student/${id}`)
                const data = response.data.data;
                // console.log(data);
                setStudentData(data)
            }catch(error){
                console.log("Error", error)
            }
             
        }
        fetchData()
    },[id])


  return (
    <div>
     
    <Box
  component="form"
  sx={{
    display: 'flex',
    flexDirection: 'column', // Display the fields one below the other
    alignItems: 'center',    // Center align the fields horizontally
    '& > :not(style)': { m: 1, width: '25ch' },
    marginLeft:'20rem' 
  }}
  noValidate
  autoComplete="off"
>

 
  <Box>
  {studentData.profile && studentData.profile.length > 0 && (
    <TextField id="outlined-basic-1" label="Username" variant="outlined"
      defaultValue={studentData.profile[0].fullName}
    
     />
  )}
  </Box>

  <Box>
   
  {studentData.eMail !== undefined && (
    <TextField id="outlined-basic-1" label="Email" variant="outlined"  defaultValue={studentData.eMail}/>
  )}

  </Box>

  <Box>
  {studentData.eMail !== undefined && (
    <TextField id="outlined-basic-3" label="Batch_Number" variant="outlined" defaultValue={studentData.batch_Number} />
  )}
  </Box>
  
</Box>

    
    </div>
  )
}

export default StudentEdit