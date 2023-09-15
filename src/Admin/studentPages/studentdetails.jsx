
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setError, setLoading, setStudents } from '../../Redux/Slices/studentSlice';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





const Studentdetails = () => {

  const student = useSelector((state) => state.student.students);
  // console.log("student details",student);
  const loading = useSelector((state) => state.student.loading);
  const error = useSelector((state) => state.student.error);

  //-----------------------------hooks------------------------------

  const dispatch = useDispatch();
  const inputRef = useRef();
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate()

  //----------------------------------------------------------------

  //----------------------handleSubmit for search--------------------

  const handleSubmit = () => {
    const search = inputRef.current.value.trim().toLowerCase()
    const searchedData = student.filter((item) => item.userName.toLowerCase().includes(search))
    setSearchedData(searchedData)
  }

  //-----------------------------------------------------------------

  //---------------fetching data from the server--------------------

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get('http://localhost:3000/admin/student')
        dispatch(setStudents(response.data.data));
        dispatch(setLoading(false));

      } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(false))
      }
    };
    fetchData()

  }, [dispatch])

  //------------------------------------------------------------------

  return (
    <div style={{ width: "80%" }} >
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (

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

            <TableHead>
              <TableRow>

                <TableCell>Index</TableCell>
                {/* <TableCell>User ID</TableCell> */}
                <TableCell >User Name</TableCell>
                <TableCell >Batch_Number</TableCell>
                <TableCell >E-mail</TableCell>

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
                  <TableCell onClick={()=> navigate(`/one/${data._id}`)} >{data.userName}</TableCell>
                  <TableCell >{data.batch_Number}</TableCell>
                  <TableCell >{data.eMail}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

    </div>
  )
}

export default Studentdetails

