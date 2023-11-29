// import React, { useState, useEffect } from "react";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import "react-date-range/dist/styles.css";
// // import "react-date-range/dist/theme/default.css";


// export default function MyDatePicker({ onDateSelect }) {
//   const handleDateChange = (date) => {
//     // Pass the selected date to the parent component
//     onDateSelect(date);
//   };
//   return (
    
//       <div>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DemoContainer components={['DatePicker']}>
//             <DatePicker label="Choose Date" onChange={handleDateChange} />
//           </DemoContainer>
//         </LocalizationProvider>
//       </div>
//     );
  
// }

import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function MyDatePicker({ selectedDate, handleDateChange }) {
  return(
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
      <DemoItem label="Choose Date">
      <DatePicker value={dayjs(selectedDate)}
      onChange={(date) => handleDateChange(date)}/>
    </DemoItem>
      </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}