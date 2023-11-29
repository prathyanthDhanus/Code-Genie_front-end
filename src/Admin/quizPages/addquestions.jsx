import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';



const AddQuestions = () => {
  const inputRef = useRef();


  const CreateQuestions = async(e) => {
    
    e.preventDefault()
    const questionData = {
      domainName: inputRef.current.domainName.value,
      week: inputRef.current.week.value,
      category: inputRef.current.category.value,
      questions: inputRef.current.questions.value,
      optionA: inputRef.current.optionA.value,
      optionB: inputRef.current.optionB.value,
      optionC: inputRef.current.optionC.value,
      correctAnswer: inputRef.current.correctAnswer.value
    }

    try {
    const response =await axios.post("http://localhost:3000/admin/quiz/question",questionData)
      console.log(response)
      // if(response.status === 201){
      //  alert(response.data.message)
      // }else{
      //  alert(response.data.message)
      // }
      alert(response.data.message)

    } catch (error) {
      console.log("Error:", error)
      if (error.response && error.response.status === 400) {
        // Handle 400 status code
        alert('Question already exists');
     
      } else {
        // Handle other errors
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again later.');
      }
    }

  }



  return (
    <div style={{ marginLeft: "30rem" }}>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        ref={inputRef}
      >
        <div>

          <TextField id="standard-basic" label="Domain Name" variant="standard" name='domainName' />
          <TextField id="standard-basic" label="Category" variant="standard" name='category' />
          <TextField id="standard-basic" label="Week" variant="standard" name='week' />
          
          <TextField
            id="outlined-multiline-static"
            label="Add Questions"
            multiline
            rows={4}
            name='questions'
            
          />
         
          <TextField id="standard-basic" label="Option A" variant="standard" name='optionA' />
          <TextField id="standard-basic" label="Option B" variant="standard" name='optionB' />
          <TextField id="standard-basic" label="Option C" variant="standard" name='optionC' />
          <TextField id="standard-basic" label="Correct Answer" variant="standard" name='correctAnswer' />
          <Button type='submit' onClick={CreateQuestions} >Submit</Button>
        </div>
      </Box>

    </div>
  )
}

export default AddQuestions