import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import BatchStatus from './batchstatus';
// import Alert from '@mui/material/Alert';




const ViewBatch = () => {


 
  const inputRef = useRef();
  const { id } = useParams();
  const [searchedData, setSearchedData] = useState([]);
  const [student, setStudent] = useState([]);
  const [message,setMessage] = useState()
  const [isOn, setIsOn] = useState(false);
  // console.log("isOn:",isOn);
  // const [buttonText, setButtonText] = useState('Active');

//-----------------------------getting student list from corresponding batch-------------------

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get(`http://localhost:3000/admin/batch/${id}`)
        const data = response.data.data;
        // console.log(response.data.data);
        // console.log(response);
        setStudent(data)
        setIsOn(data[0]?.isBatchStatus || false);
      } catch (error) {
        console.log("Error", error)
      }

    }
    fetchData()
  }, [id])

  //--------------------------------search section----------------------------

  const handleSubmit = () => {
    const search = inputRef.current.value.trim().toLowerCase()
    const searchedData = student.filter((item) => item.userName.toLowerCase().includes(search))
    setSearchedData(searchedData)
  }

//------------------------------------------------------------------------------
  // const handleMouseEnter = () => {
  //   setButtonText('Inactivate Batch');

  // };

//-----------------------------activate and deactivating batch-------------------

  const inActivateBatch = async () => {
   

    try {
     const updateBatchStatus = !isOn
      
      const response = await axios.patch(`http://localhost:3000/admin/batch/${id}`,{isBatchStatus:updateBatchStatus})
      
      if (response.data.status === "success") {
        setIsOn(updateBatchStatus);
        if (updateBatchStatus) {
          setMessage("Batch")
          console.log("Batch activated successfully");
        } else {
          console.log("Batch deactivated successfully");
        }
      } else {
        console.log("Failed to activate/deactivate batch");
      }
    } catch (error) {
      console.log("Error:", error)
    }
  }

  // useEffect(()=>{
  //   inActivateBatch()
  // },[])
  
  // console.log("student",student[0]?.isBatchStatus);
  
  //----------------------------------------------------------------------

  return (

    <div style={{ width: "70%", marginLeft: "25rem" }} >

      <div style={{ width: "100%" }}>
      {/* <Alert severity="success">{message}</Alert> */}
<p>Batch Status:</p>
  <Switch onClick={inActivateBatch} checked={isOn}/>

        <TableContainer component={Paper}>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search username here....!"
              className="me-2"
              aria-label="Search"
              ref={inputRef}
              onChange={handleSubmit}
            />

          </Form>


          <Table sx={{ minWidth: 650 }} aria-label="simple table">

            {student ? (
              <>

              </>
            ) : (
              // You can display a loading indicator here if you want
              <p>Loading...</p>
            )}

            {student && student.length > 0 && (
              <>
                <TableHead>
                  <TableRow>

                    <TableCell>Index</TableCell>
                    <TableCell >User Name</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {(searchedData.length > 0 ? searchedData : student).map((data, e) => (
                    <TableRow
                      key={data._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {e + 1}
                      </TableCell>

                      <TableCell >{data.userName}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>

      </div>

    </div>
  )
}

export default ViewBatch