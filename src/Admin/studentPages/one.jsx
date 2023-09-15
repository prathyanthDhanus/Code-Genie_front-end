import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const One = () => {
    
    const [studentData, setStudentData] = useState([])
    const {id}=useParams()
//    let data = null;
  
  
    //    console.log(id);
    useEffect(()=>{
       
        const fetchData = async ()=>{
            
            try {
                const response = await axios.get(`http://localhost:3000/admin/student/${id}`);
               
                const data = response.data.data;
                // let dataArray = Array.isArray(data) ? data : [data];
                // console.log(dataArray);
                 setStudentData(data)
                // console.log(data);
                 console.log(studentData)
              } catch (error) {
                console.log("Error", error)
              }
        };
        fetchData()
    },[id])

  return (
    <div>
<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
{/* {studentData.map((item)=>( */}
{studentData ? (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={studentData.userName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {studentData.userName}
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      ) : (
      // You can display a loading indicator here if you want
      <p>Loading...</p>
    )}
    
{/* ))} */}
     
      <Divider variant="inset" component="li" />
    
    </List>



    </div>
  )
}

export default One