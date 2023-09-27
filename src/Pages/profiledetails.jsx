import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import "../Components/Style.css";
import axios from 'axios';
import Box from '@mui/material/Box';




const Profiledetails = () => {
  

  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = {
      fullName: inputRef.current.fullname.value,
      eMail: inputRef.current.email.value,
      phoneNumber: inputRef.current.phonenumber.value,
      fullAddress: inputRef.current.fulladdress.value,
      pinCode: inputRef.current.pincode.value,
      bloodGroup: inputRef.current.bloodgroup.value,
      educationQualification: inputRef.current.educationqualification.value,
      guardianName: inputRef.current.guardianname.value,
      guardianRelation: inputRef.current.relation.value,
      guardianPhoneNumber: inputRef.current.guardianphoneNumber.value
    }
    // console.log(profileData)
    try {
      const response = await axios.post('http://localhost:3000/student/profile', profileData)
      console.log(response)
      if (response.status === 200) {
        alert(response.data.message)
        inputRef.current.fullname.value = '';
        inputRef.current.email.value = '';
        inputRef.current.phonenumber.value = '';
        inputRef.current.fulladdress.value = '';
        inputRef.current.pincode.value = '';
        inputRef.current.bloodgroup.value = '';
        inputRef.current.educationqualification.value = '';
        inputRef.current.guardianname.value = '';
        inputRef.current.relation.value = '';
        inputRef.current.guardianphoneNumber.value = '';
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error found :", error)
    }
  }

  const BloodGroups = [
    { value: 'A+', label: 'A+', }, { value: 'A-', label: 'A-', }, { value: 'B+', label: 'B+', },
    { value: 'B-', label: 'B-', }, { value: 'AB+', label: 'AB+', }, { value: 'AB-', label: 'AB-', },
    { value: 'O+', label: 'O+', }, { value: 'O-', label: 'O-', },
  ];

  return (

    <div className="profile-form" >

      <Box
        component="form"
        ref={inputRef}
        //  onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <h2>Profile Details</h2><br />

        <TextField
          required
          id="outlined-required"
          label="Full Name"
          name='fullname'
        />
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          name='email'
        />
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          name='phonenumber'
        />
        <TextField
          id="outlined-multiline-static"
          label="Full Address"
          name='fulladdress'
          multiline
          rows={4}
        />
        <TextField
          required
          id="outlined-required"
          label="Pincode"
          name='pincode'
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Blood_group"
          name='bloodgroup'
          // defaultValue="EUR"
          helperText="Please select your blood_group"
        >
          {BloodGroups.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="Education Qualification"
          name='educationqualification'
        />
        <TextField
          required
          id="outlined-required"
          label="Guardian Name"
          name='guardianname'
        />
        <TextField
          required
          id="outlined-required"
          label="Relation with the guardian"
          name='relation'
        />

        <TextField
          required
          id="outlined-required"
          label="Guardian Phone Number"
          name='guardianphoneNumber'
        />

      </Box>
      <Button style={{ marginLeft: "1rem" }} variant="contained" color="success" onClick={handleSubmit}>
        submit
      </Button>

    </div>
  )
}
export default Profiledetails