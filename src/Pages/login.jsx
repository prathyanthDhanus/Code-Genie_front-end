import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';


const Login = () => {
  const inputRef = useRef(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // const userDetails = useSelector(state => state.user.users);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    // let userName;
    // let eMail;

    if (isAdmin) {
    var  userName = inputRef.current.username.value;
    } else {
     var eMail = inputRef.current.email.value;
    }
    const passWord = inputRef.current.password.value;
    // console.log(userName,passWord,eMail)

    try {
     
      const url = isAdmin ? "http://localhost:3000/admin/login" : "http://localhost:3000/student/login";
      const response = await axios.post(url, { userName: userName, eMail: eMail, passWord: passWord });

      if (response.data.status === "success") {
        // console.log(response.data.status)
        alert(response.data.message)
        if (isAdmin) {
          return navigate("/studentdetails")
        } else {
          navigate("/")
        }

      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.log("Error found:", error);
    }

  }

  return (
    <div className='login_signup'>
      {/* <h6>ADMIN LOGIN</h6> */}


      <Box
        className="profile-form"
        component="form"
        ref={inputRef}
        onSubmit={(e) => { e.preventDefault() }}
        noValidate
        autoComplete="on"
      >
        <img src='https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg' />
        {isAdmin ? (<TextField
          required
          id="outlined-required"
          label="Username"
          name='username'

        />) : (<TextField
          required
          id="outlined-required"
          label="Email"
          name='email'

        />)}

        <FormControl sx={{ m: 2, width: '20rem' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name='password'
          />
        </FormControl>
        <Button variant="outlined" color="success" style={{ marginLeft: "1rem" }} type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <FormGroup style={{ marginLeft: "1rem" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />}
            label="Are you an admin?"
          />
        </FormGroup>
        {/* <p>
          Create a new account <Link to="/signup">Signup</Link>
        </p> */}
      </Box>
    </div>
  );
}

export default Login;

