import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import axios from 'axios';




const Attendance = () => {
    const { id } = useParams();
console.log(id);
    
    // console.log(id);
    const handleAttendance = async () => {

        try {
            
            const response = await axios.post(`http://localhost:3000/admin/student/attendance/${id}`)
            console.log(response)

        } catch (error) {
            console.log("Error:", error)
        }
    }

    return (
        <div style={{marginLeft:"25rem"}}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
 
        sx={{ height: 140 }}
    
        // title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
        </div>
    )
}

export default Attendance