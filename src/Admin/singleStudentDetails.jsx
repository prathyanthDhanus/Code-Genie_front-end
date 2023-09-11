import * as React from 'react';
import Box from '@mui/material/Box';
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


const SingleStudentDetails = () => {
  const inputRef = useRef();
  const [studentData, setStudentData] = useState([])
  const [open, setOpen] = React.useState(false);

  const handleSearch = async () => {
    const id = inputRef.current.value;
    try {
      const response = await axios.get(`http://localhost:3000/admin/student/${id}`);
      const data = response.data.data;
      setStudentData(data)
      // console.log(data);
      console.log(studentData.userName)
    } catch (error) {
      console.log("Error", error)
    }
  }

  const handleClick = () => {
    setOpen(!open);
  };


  return (

    <div style={{ width: "80%" }} >
      <h3> Details of a Student </h3>

      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
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

        </div>

        <div >
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <span style={{ marginRight: '1rem' }}><b>Username</b></span>
            <ListItemText primary={studentData.userName} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <span style={{ marginRight: '1rem' }}><b>Batch_Number</b></span>
            <ListItemText primary={studentData.batch_Number} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <span style={{ marginRight: '1rem' }}><b>Email</b></span>
            <ListItemText primary={studentData.eMail} />
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

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <span style={{ marginRight: '1rem' }}><u>Full_Name</u></span>
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].fullName} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
            <span style={{ marginRight: '1rem' }}><u>Email</u></span>

                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].eMail} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <span style={{ marginRight: '1rem' }}><u>PhoneNumber</u></span>
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].phoneNumber} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <span style={{ marginRight: '1rem' }}><u>Full_Address</u></span>
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].fullAddress} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <span style={{ marginRight: '1rem' }}><u>Pincode</u></span>
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].pinCode} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <span style={{ marginRight: '1rem' }}><u>Blood_Group</u></span>
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].bloodGroup} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <span style={{ marginRight: '1rem' }}><u>Education Qualification</u></span>
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].educationQualification} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                  <span style={{ marginRight: '1rem' }}><u>GuardianName</u></span>
                </ListItemIcon>
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].guardianName} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                  <span style={{ marginRight: '1rem' }}><u>Relation with the Guardian</u></span>
                </ListItemIcon>
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].guardianRelation} />
                )}
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                  <span style={{ marginRight: '1rem' }}><u>GuardianPhoneNumber</u></span>
                </ListItemIcon>
               
                {studentData.profile && studentData.profile.length > 0 && (
                  <ListItemText primary={studentData.profile[0].guardianPhoneNumber} />
                )}
              </ListItemButton>

            </List>
          </Collapse>
        </div>

      </List>

    </div>
  )
}

export default SingleStudentDetails

