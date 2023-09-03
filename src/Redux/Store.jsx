import {configureStore} from "@reduxjs/toolkit";
import studentSlice from "./Slices/Reduuser"

export const store = configureStore({
    reducer:{
      student:studentSlice
        
    }
})