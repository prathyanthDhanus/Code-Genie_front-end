import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const viewcategorytopics = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
    const [data, setData] = useState([]);
    const { id } = useParams();
    const {category}=useParams();
    const navigate = useNavigate()
    // console.log(category);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/admin/domain/category/${id}`);
          const data = response.data.data;
          // console.log("datas",data);
          const filteredData = data.filter((item) => item.category === category);
        
          // Organize the filtered data into weeks
          const weeksData = {};
          filteredData.forEach((item) => {
            const week = item.week;
            if (!weeksData[week]) {
              weeksData[week] = [];
            }
            weeksData[week].push(item);
          });
  
          // Sort the weeks in the desired order 
          const sortedWeeks = Object.keys(weeksData).sort();
  
          // Create an array to store the data week-wise in the correct order
          const organizedData = sortedWeeks.map((week) => ({
            week: week,
            data: weeksData[week],
          }));
  
          setData(organizedData);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [id]);
    
  return (
    <div style={{marginLeft:"25rem"}}>

    

    <h1>React Categories:</h1>
 
    {data.map((weekData) => (
        <div key={weekData.week}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> <h2>{weekData.week}</h2></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <StyledTableRow key={weekData.week}>
            <StyledTableCell component="th" scope="row">
            Topic
            </StyledTableCell>
            
            </StyledTableRow>
            <ul>
            {weekData.data.map((item) => (  
              <li key={item._id}>
                
                <a onClick={() => navigate(`/admin/topic/edit/${item._id}`)}>{item.topicName}</a>
                </li>
            ))}
          </ul>
      </TableBody>
      </Table>
    </TableContainer>
        </div>
      ))}
  </div>
  )
}

export default viewcategorytopics