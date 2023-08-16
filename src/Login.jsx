import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


const Login = () => {
  const inputRef = useRef(null);
  // const userDetails = useSelector(state => state.user.users);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userName = inputRef.current.username.value;
    const passWord = inputRef.current.password.value;
    console.log(userName,passWord)

    try {
      const response = await axios.post('http://localhost:3000/admin/login', { username: userName, password: passWord });

      if (response.data.status === "success") {
        alert('Login success!!!!!!!!')
        navigate("/")
      } else {
        console.log("username passsword missmatch")
      }
    } catch (error) {
      alert("Username or password mismatch");
    }

  }

  return (
    <div>
      {/* <h6>ADMIN LOGIN</h6> */}
     
      <img src='https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg'/>

      <Box
        component="form"
        ref={inputRef}
        onSubmit={(e) => { e.preventDefault() }}
        noValidate
        autoComplete="on"
      >
        <TextField
          required
          id="outlined-required"
          label="Username"
          name='username'

        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name='password'
          autoComplete="current-password"
        />
        <Button variant="outlined" color="success" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <p>
          Create a new account <Link to="/signup">Signup</Link>
        </p>
      </Box>
    </div>
  );
}

export default Login;

