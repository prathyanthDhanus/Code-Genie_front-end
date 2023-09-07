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

// export const fetchData = async (dispatch)=>{
  
//    try{
    
//     const response = await axios.get('http://localhost:3000/admin/student');
//     dispatch(setStudents(response.data.data));
//     dispatch(setLoading(false));

//    }catch(error){
//     dispatch(setError(error));
//     dispatch(setLoading(false))
//    }
// }