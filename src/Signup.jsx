import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from './Redux/Slices/Reduuser';


const Signup = () => {

    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = ()=>{

        const userName = inputRef.current.username.value;
        const passWord = inputRef.current.password.value;
        dispatch(addUser({username:userName,password:passWord}))
        navigate("/login")
    }

    return (
        <div>
            <Form onSubmit={(e) => { e.preventDefault() }} ref={inputRef} >
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter username" name='username'/>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password"  placeholder="Enter password" name='password'/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}> Signup </Button>
                <p>
                    Already have an account? <Link to="/login" >Login</Link>
                </p>
            </Form>
        </div>
    )
}

export default Signup