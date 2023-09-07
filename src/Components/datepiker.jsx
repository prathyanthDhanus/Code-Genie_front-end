import React, { useState, useEffect } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";


export default function MyDatePicker() {
  
  return (
    <>
      {/* <h6>Date of birth:</h6> */}

  
    <LocalizationProvider
     dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date  of Birth" />
      </DemoContainer>
    </LocalizationProvider>


    </>
  );
}
