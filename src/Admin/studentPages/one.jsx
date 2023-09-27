import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import Box from '@mui/material/Box';


const One = () => {

  const [studentData, setStudentData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const inputRef = useRef();
  const navigate = useNavigate();

//------------------------------------data fetching from the backend-----------------------

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await axios.get(`http://localhost:3000/admin/student/${id}`);

        const data = response.data.data;
        setStudentData(data)
       
      } catch (error) {
        console.log("Error", error)
      }
    };

    fetchData()

  }, [id])

  //-----------------------------conditional rendering when edit icon clicks-----------------

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  //------------------------------------ edit submit section----------------------------------

  const handleSubmit = async () => {
    const userName = inputRef.current.newUserName.value;
    const eMail = inputRef.current.newEmail.value;
    const batch_Number = inputRef.current.newBatchNumber.value;
    console.log(userName, eMail, batch_Number);


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

  //--------------------------------------delete section ---------------------------------------

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete?")
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:3000/admin/student/${id}`)
        if (response.status === 200) {
          alert(response.data.message)
          navigate("/studentDetails")
        } else {
          alert("something went wrong")
        }
      } catch (error) {
        console.log("Error:", error)
      }
    }

  }

  //------------------------------------------------------------------------------------------

  return (
    <div>


      <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: "35rem" }}>
        {!isEdit && (
          <>

            {studentData ? (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://www.webxcreation.com/event-recruitment/images/profile-1.jpg"
                    sx={{ width: "12rem", height: "12rem" }}
                  />

                </ListItemAvatar>

              </ListItem>
            ) : (
              // You can display a loading indicator here if you want
              <p>Loading...</p>
            )}

            {/* ))} */}

            {/* <Divider variant="inset" component="li" /> */}
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <nav aria-label="main mailbox folders">
                {studentData.profile && studentData.profile.length > 0 && (
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={<b>{studentData.userName}</b>} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'red' }} />


                    <ListItemText primary="Full Name" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].fullName} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Email " style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.eMail} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Batch-Number" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.batch_Number} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Phone-Number" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].phoneNumber} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="FullAddress" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].fullAddress} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Pincode" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].pinCode} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Blood-Group" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].bloodGroup} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Education Qualification" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].educationQualification} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Guardian Name" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].guardianName} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Relation" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].guardianRelation} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'blue' }} />

                    <ListItemText primary="Guardian Phone-Number" style={{ opacity: 0.4 }} />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={studentData.profile[0].guardianPhoneNumber} />
                      </ListItemButton>
                    </ListItem>
                    <Divider style={{ background: 'red' }} />

                    <a onClick={handleEdit}><EditIcon style={{ color: "orange" }} /></a>

                  </List>

                )}


              </nav>
                    <a onClick={handleDelete}> <DeleteIcon style={{ color: "red" }} /></a>

            </Box>
          </>
        )}
        {/*-------------------------------edit section--------------------------------*/}


        {isEdit && (

          <Box

            component="form"
            ref={inputRef}
            noValidate
            autoComplete="off"

          >
            <Box m={3}>
              {studentData.eMail !== undefined && (
                <TextField id="outlined-basic-1" label="Username" variant="outlined"
                  name="newUserName"
                  defaultValue={studentData.userName}
                />
              )}
            </Box>

            <Box m={3}>

              {studentData.eMail !== undefined && (
                <TextField id="outlined-basic-1" label="Email" variant="outlined"
                  name="newEmail"
                  defaultValue={studentData.eMail}
                />
              )}

            </Box>

            <Box m={3}>
              {studentData.eMail !== undefined && (
                <TextField id="outlined-basic-3" label="Batch_Number" variant="outlined"
                  name="newBatchNumber"
                  defaultValue={studentData.batch_Number}

                />
              )}
            </Box>

            <Button variant="outline-success" onClick={handleSubmit}>Submit</Button>

          </Box>
        )}

      </List>



    </div>
  )
}

export default One