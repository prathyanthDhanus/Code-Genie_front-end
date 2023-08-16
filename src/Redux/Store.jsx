import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slices/Reduuser"

export const store = configureStore({
    reducer:{
        user:userSlice
        
    }
})