import React from 'react'
import { setError, setLoading } from '../../Redux/Slices/studentSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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





const ViewBatch = () => {


  const dispatch = useDispatch();
  const inputRef = useRef();
  const [searchedData, setSearchedData] = useState([]);
  const [student, setStudent] = useState();
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get(`http://localhost:3000/admin/batch/${id}`)
        const data = response.data.data;
        // console.log(data);
        setStudent(data)
      } catch (error) {
        console.log("Error", error)
      }

    }
    fetchData()
  }, [id])


  const handleSubmit = () => {
    const search = inputRef.current.value.trim().toLowerCase()
    const searchedData = student.filter((item) => item.userName.toLowerCase().includes(search))
    setSearchedData(searchedData)
  }

  return (
    <div style={{ width: "70%", marginLeft: "25rem" }} >

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
                    {/* <TableCell> {data._id}</TableCell> */}
                    <TableCell onClick={() => navigate(`/one/${data._id}`)} >{data.userName}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>


    </div>
  )
}

export default ViewBatch