import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    students:[],
    loading: true,
  error: null,
}

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers:{
        setStudents: (state, action) => {
            state.students = action.payload;
            state.loading = false;
            state.error = null;
          },
          setLoading: (state, action) => {
            state.loading = action.payload;
          },
          setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
       

    }
})



export const {setStudents,setError,setLoading} = studentSlice.actions
export default studentSlice.reducer

