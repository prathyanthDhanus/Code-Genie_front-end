import { useRef } from 'react'
// import Button from 'react-bootstrap/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Bootstrap/Style.css";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';



const Signup = () => {

    const inputRef = useRef(null)
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = async () => {

        const userName = inputRef.current.username.value;
        const passWord = inputRef.current.password.value;
        const eMail = inputRef.current.email.value;
        const batch_Number = inputRef.current.batch_number.value;

        console.log(userName, passWord, batch_Number, eMail)
        try {
            const response = await axios.post('http://localhost:3000/admin/student/register', {
                userName: userName,
                batch_Number: batch_Number,
                eMail: eMail,
                passWord: passWord
            })
            //  console.log(response.status)
            if (response.status === 201) {
                alert("Registered successfully")
                inputRef.current.username.value = "";
                inputRef.current.password.value = "";
                inputRef.current.email.value = "";
                inputRef.current.batch_number.value = "";


            } else {
                alert("Student is already exist");
            }
        } catch (error) {
            console.log("Error found:", error)
        }
        // dispatch(addUser({ username: userName, password: passWord }))
        // navigate("/login")
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div style={{marginLeft:"18rem"}}>


            <Box
                className="profile-form"
                component="form"
                ref={inputRef}
                onSubmit={(e) => { e.preventDefault() }}
                noValidate
                autoComplete="on"
            >
                <img src='https://media.istockphoto.com/id/1241710244/vector/working-at-home-vector-flat-style-illustration-online-career-coworking-space-illustration.jpg?s=612x612&w=0&k=20&c=U34U9zhLBWDEbfPmgmlnFJiP-EuWu7MEUCxUls_BnKU=' />
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    name='username'

                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    name='email'

                />
                <TextField
                    required
                    id="outlined-required"
                    label="Batch_number"
                    name='batch_number'

                />
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
                    Signup
                </Button>
                {/* <p>
                        Already have an account? <Link to="/login" >Login</Link>
                    </p> */}
            </Box>
        </div>
    )
}

export default Signup