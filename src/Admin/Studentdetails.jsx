
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setError, setLoading, setStudents } from '../Redux/Slices/Reduuser';
import { useDispatch } from 'react-redux';











// function createData(name) {
//   return {
//     name,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
  <Typography variant="body1">Index</Typography>
</TableCell>

        <TableCell >{row._id}</TableCell>
        <TableCell >{row.userName}</TableCell>
        <TableCell >{row.batch_Number}</TableCell>
        <TableCell >{row.eMail}</TableCell>
       
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 5, paddingTop: 5 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
              Profile  History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };


// const rows = [
//   createData('Frozen yoghurt', 159, 6.0 ),
//   // createData('Ice cream sandwich', 237, 9.0 ),
//   // createData('Eclair', 262, 16.0),
//   // createData('Cupcake', 305, 3.7),
//   // createData('Gingerbread', 356, 16.0),
// ];



const Studentdetails = () => {
 
  const student = useSelector((state)=>state.student.students)
  console.log(student)
  const loading = useSelector((state) => state.student.loading);
  const error = useSelector((state) => state.student.error);
  const dispatch = useDispatch();

  useEffect(()=>{
    axios.get('http://localhost:3000/admin/student')

    .then((response)=>{
      dispatch(setStudents(response.data.data));
      dispatch(setLoading(false));

    })
    .catch((error)=>{
      dispatch(setError(error));
      dispatch(setLoading(false))
    })
  },[dispatch])

  

  return (
    <div >
    {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            
            <TableCell>Index</TableCell>
            <TableCell>USER ID</TableCell>
            <TableCell>USER NAME</TableCell>
            <TableCell>BATCH-NUMBER</TableCell>
            <TableCell>E-MAIL</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
          {student.map((student) => (
              <Row key={student.name} row={student} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
      )}
    </div>
  )
}

export default Studentdetails

