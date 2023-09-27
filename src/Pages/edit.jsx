import React from 'react'
import TextField from '@mui/material/TextField';
import "../Components/Style.css";
import Box from '@mui/material/Box';


const Edit = () => {
  return (
    <div className="profile-form">
    
    <h1>edit</h1>
    <Box
        component="form"
        // ref={inputRef}
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
    
    </div>
  )
}

export default Edit