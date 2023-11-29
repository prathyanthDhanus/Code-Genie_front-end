import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import BatchStatus from './batchstatus';
// import Alert from '@mui/material/Alert';

// import CardGroup from 'react-bootstrap/CardGroup';
// import Button from 'react-bootstrap/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MyDatePicker from '../../Components/datepiker';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';






const ViewBatch = () => {

  const status = [
    {
      value: 'Present',
      label: 'Present',
    },
    {
      value: 'Absent',
      label: 'Absent',
    },
    {
      value: 'Late',
      label: 'Late',
    },
  ];
  

  const inputRef = useRef();
  const { id } = useParams();
  const [searchedData, setSearchedData] = useState([]);
  const [student, setStudent] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedStatus, setSelectedStatus] = useState('Present');

  //--------------------------------attendance----------------------------------

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleAttendanceSubmit = async () => {
    console.log(selectedDate,selectedStatus);
    try {
      const response = await axios.post(`http://localhost:3000/admin/student/attendance/${id}`, {
        date: selectedDate,
        status: selectedStatus,
      
      });

      if (response.data.status === "success") {
        console.log("Attendance submitted successfully");
      } else {
        console.log("Failed to submit attendance");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
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

  //-----------------------------activate and deactivating batch-------------------

  const inActivateBatch = async () => {


    try {
      const updateBatchStatus = !isOn

      const response = await axios.patch(`http://localhost:3000/admin/batch/${id}`, { isBatchStatus: updateBatchStatus })

      if (response.data.status === "success") {
        setIsOn(updateBatchStatus);
        if (updateBatchStatus) {

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



  //----------------------------------------------------------------------

  return (

    <div style={{ width: "70%", marginLeft: "25rem" }} >

      <div style={{ width: "100%" }}>
        {/* <Alert severity="success">{message}</Alert> */}
        <p>Batch Status:</p>
        <Switch onClick={inActivateBatch} checked={isOn} />

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


        <div>

            {student && student.length > 0 && (
              <>
              
              {(searchedData.length > 0 ? searchedData : student).map((data) => (
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                src='https://m.media-amazon.com/images/I/31o-VWlOtKL._AC_UF1000,1000_QL80_.jpg'
                title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {data.userName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <MyDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
                </Typography>
                <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue={selectedStatus}
                onChange={handleStatusChange}
                helperText="Please select the status"
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                </CardContent>
                <CardActions>
                <Button size="small" onClick={()=>navigate(`/admin/student/attendance/${data._id}`)}>View Full Attendance</Button>
                <Button size="small" onClick={() => handleAttendanceSubmit(data._id)}>
                Submit Attendance
              </Button>
                </CardActions>
                </Card>
                ))}
                
                </>
                )}
                
                
                
                
                
                </div>
                
                </div>

    </div>
  )
}

export default ViewBatch