import Box from '@mui/material/Box';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';






const SingleStudentDetails = () => {

  const inputRef = useRef();
  const [studentData, setStudentData] = useState([])
  const [searchedId, setSearchedId] = useState()
  const [open, setOpen] = React.useState(false);
  const [isEdit, setIsEdit] = useState(false)
  
  //--------------------------------Searching for a student by ID-----------------------

  const handleSearch = async () => {
    const id = inputRef.current.value;
    setSearchedId(id)
    try {
      const response = await axios.get(`http://localhost:3000/admin/student/${id}`);
      const data = response.data.data;
      setStudentData(data)
      // console.log(data);
      // console.log(studentData)
    } catch (error) {
      console.log("Error", error)
    }
  }

  //------------------------------------------------------------------------------------

  const handleClick = () => {
    setOpen(!open);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }
  //-------------------------------handle submit in edit section--------------------------

  const handleSubmit = async () => {
    const userName = inputRef.current.newUserName.value;
    const eMail = inputRef.current.newEmail.value;
    const batch_Number = inputRef.current.newBatchNumber.value;
    const id = searchedId;

    try {
      const response = await axios.put(`http://localhost:3000/admin/student/${id}`, {
        userName: userName,
        eMail: eMail,
        batch_Number: batch_Number
      })

      if (response.status === 200) {
        alert(response.data.message)
        window.location.reload();
      } else {
        alert(response.data.message)
      }

    } catch (error) {
      console.log("Error", error)
    }
  }

  //--------------------------------------delete section----------------------------------------

  const handleDelete = async () => {
    const id = searchedId;
    const confirmDelete = window.confirm("Are you sure you want to delete?")
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:3000/admin/student/${id}`)
        if (response.status === 200) {
          alert(response.data.message)
          window.location.reload();
        } else {
          alert("something went wrong")
        }
      } catch (error) {
        console.log("Error:", error)
      }
    }

  }

//-----------------------------------------------------------------------------------------------------
  return (

    <div style={{ width: "80%", marginLeft: '5rem', marginRight: "5rem" }} >
      <h3> Details of a Student </h3>

      <List
        sx={{ width: '100%', bgcolor: 'background.paper', border: '.5rem solid yellow', borderRadius: '2rem', }}
        component="nav"
        aria-labelledby="nested-list-subheader"

      >
        <div className='d-flex' style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for a student by ID"
              className="me-2"
              aria-label="Search"
              ref={inputRef}
            />
          </Form>
          {/* <button onClick={handleSearch}>search</button> */}
          <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          <a onClick={handleEdit}> <EditIcon /></a>
          <a onClick={handleDelete}> <DeleteIcon /></a>
        </div>

        <div style={{ marginTop: "2rem" }}>

          {!isEdit && (
            <>

              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <span style={{ marginRight: '3rem' }}><b>Username</b></span>
                {/* <ListItemText primary={studentData.userName} /> */}
                <TextField
                  required
                  id="outlined-required"
                  name="fullname"
                  value={studentData.userName}
                />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <span style={{ marginRight: '1rem' }}><b>Batch_Number</b></span>
                {/* <ListItemText primary={studentData.batch_Number} /> */}
                <TextField
                  required
                  id="outlined-required"
                  name="batchNumber"
                  value={studentData.batch_Number}
                />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <span style={{ marginRight: '5.7rem' }}><b>Email</b></span>
                {/* <ListItemText primary={studentData.eMail} /> */}
                <TextField
                  required
                  id="outlined-required"
                  name="email"
                  value={studentData.eMail}
                />
              </ListItemButton>



              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>


              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>


                  {/* <div style={{marginTop:"3rem"}}> */}
                  <Box style={{ marginTop: "3rem" }}>

                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: "10rem", gap: '2rem', marginBottom: "3rem" }}>

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          required
                          id="outlined-required"
                          label="Full Name"
                          name="fullname"
                          defaultValue={studentData.profile[0].fullName}
                        />
                      )}

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          required
                          id="outlined-required"
                          label="E-mail"
                          name="email"
                          defaultValue={studentData.profile[0].eMail}
                        />
                      )}

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          required
                          id="outlined-required"
                          label="Phone Number"
                          name="phonenumber"
                          defaultValue={studentData.profile[0].phoneNumber}
                        />
                      )}

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: "10rem", gap: '2rem', marginBottom: "3rem" }}>

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          required
                          id="outlined-required"
                          label="Pincode"
                          name="pincode"
                          defaultValue={studentData.profile[0].pinCode}
                        />
                      )}

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          id="outlined-multiline-static"
                          label="Full Address"
                          name="fulladdress"
                          defaultValue={studentData.profile[0].fullAddress}
                          multiline
                          rows={4}
                          style={{ marginLeft: '.4rem' }}
                        />
                      )}

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          required
                          id="outlined-required"
                          label="Education Qualification"
                          name="educationqualification"
                          defaultValue={studentData.profile[0].educationQualification}
                        />
                      )}

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: "10rem", gap: '2rem', marginBottom: "3rem" }}>

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          required
                          id="outlined-required"
                          label="Guardian Name"
                          name="guardianname"
                          defaultValue={studentData.profile[0].guardianName}
                        />
                      )}

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          required
                          id="outlined-required"
                          label="Relation with the guardian"
                          name="relation"
                          defaultValue={studentData.profile[0].guardianRelation}
                        />
                      )}

                      {studentData.profile && studentData.profile.length > 0 && (
                        <TextField
                          required
                          id="outlined-required"
                          label="Guardian Phone Number"
                          name="guardianphoneNumber"
                          defaultValue={studentData.profile[0].guardianPhoneNumber}
                        />
                      )}

                    </div>
                  </Box>
                  {/* </div> */}

                </List>

              </Collapse>
            </>
          )}

          {/*-----------------------------------edit section start---------------------------------*/}

          {isEdit && (

            <>
              <Box
                component="form"
                ref={inputRef}
                noValidate
                autoComplete="off"
              >

                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <span style={{ marginRight: '3rem' }}><b>Username</b></span>
                  {/* <ListItemText primary={studentData.userName} /> */}
                  <TextField
                    required
                    id="outlined-required"
                    name="fullname"
                    value={studentData.userName}
                  />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <span style={{ marginRight: '1rem' }}><b>Batch_Number</b></span>
                  {/* <ListItemText primary={studentData.batch_Number} /> */}
                  <TextField
                    required
                    id="outlined-required"
                    name="batchNumber"
                    value={studentData.batch_Number}
                  />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <span style={{ marginRight: '5.7rem' }}><b>Email</b></span>
                  {/* <ListItemText primary={studentData.eMail} /> */}
                  <TextField
                    required
                    id="outlined-required"
                    name="email"
                    value={studentData.eMail}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <span style={{ marginRight: '3rem' }}><b>New Username</b></span>
                  {/* <ListItemText primary={studentData.userName} /> */}
                  <TextField
                    required
                    id="outlined-required"
                    name="newUserName"

                  />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <span style={{ marginRight: '1rem' }}><b>New Batch_Number</b></span>
                  {/* <ListItemText primary={studentData.batch_Number} /> */}
                  <TextField
                    required
                    id="outlined-required"
                    name="newBatchNumber"

                  />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <span style={{ marginRight: '5.7rem' }}><b>New Email</b></span>
                  {/* <ListItemText primary={studentData.eMail} /> */}
                  <TextField
                    required
                    id="outlined-required"
                    name="newEmail"

                  />
                </ListItemButton>


                <Button variant="outline-success" onClick={handleSubmit}>Submit</Button>
              </Box>
            </>
          )}

          {/*---------------------------------------------- edit end -------------------------------------- */}

        </div>

      </List>

    </div>
  )
}

export default SingleStudentDetails