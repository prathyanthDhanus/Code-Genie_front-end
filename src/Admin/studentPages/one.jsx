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
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




const One = () => {

  const [studentData, setStudentData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  //    let data = null;


  //    console.log(id);
  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await axios.get(`http://localhost:3000/admin/student/${id}`);

        const data = response.data.data;
        // let dataArray = Array.isArray(data) ? data : [data];
        // console.log(dataArray);
        setStudentData(data)
        // console.log(data);
        // console.log(studentData)
      } catch (error) {
        console.log("Error", error)
      }
    };
    fetchData()
  }, [id])

  return (
    <div>
      <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: "35rem" }}>
      
        {/* {studentData.map((item)=>( */}
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
                    <ListItemText primary={<b>{studentData.profile[0].fullName}</b>} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'red' }}/>

                <ListItemText primary="Email " style={{opacity:0.4}} />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.eMail} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="Batch-Number" style={{opacity:0.4}}  />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.batch_Number} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="Phone-Number" style={{opacity:0.4}}  />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.profile[0].phoneNumber} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="FullAddress" style={{opacity:0.4}}  />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.profile[0].fullAddress} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="Pincode"  style={{opacity:0.4}} />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.profile[0].pinCode} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="Blood-Group" style={{opacity:0.4}} />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.profile[0].bloodGroup} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="Education Qualification" style={{opacity:0.4}} />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.profile[0].educationQualification} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="Guardian Name" style={{opacity:0.4}}  />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.profile[0].guardianName} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="Relation" style={{opacity:0.4}}  />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.profile[0].guardianRelation} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'blue' }}/>

                <ListItemText primary="Guardian Phone-Number"style={{opacity:0.4}}  />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={studentData.profile[0].guardianPhoneNumber} />
                  </ListItemButton>
                </ListItem>
                <Divider style={{ background: 'red' }}/>
                
               <a onClick={()=>navigate(`/studentedit/${id}`)}><EditIcon  style={{color:"orange"}} /></a> 
               <a> <DeleteIcon style={{color:"red"}}/></a>

              </List>
              
            )}
          </nav>
        </Box>

      </List>



    </div>
  )
}

export default One