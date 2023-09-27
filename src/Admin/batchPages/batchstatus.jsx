import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';




const BatchStatus = () => {

  
   const [batchList , setBatchList] = useState([])
const [message,setMessage] = useState('')


    const activeBatchList = async () => {
    
        const response = await axios.get("http://localhost:3000/admin/batch/activate/status")
        const data =  response.data.data
        // console.log(response);
        setBatchList(data)

        const responseMessage = response.data.message;
        setMessage(responseMessage)
       
    }

    
    const deActiveBatchList = async () => {
       
        const response = await axios.get("http://localhost:3000/admin/batch/deactivate/status")
        const data = response.data.data;
         setBatchList(data)

         const responseMessage = response.data.message;
         setMessage(responseMessage)
    }

  
    return (
        <div style={{ marginLeft: '40rem' }}>
            <div className='batch-div'>
                <Button variant="contained" color="success" onClick={activeBatchList}>
                    Activate Batches Lists
                </Button>
                <Button variant="contained" color="error" onClick={deActiveBatchList}>
                    "Deactivate Batches Lists 
                </Button>
            </div>

            <h2>{message}</h2>

{batchList.map((item,index)=>(
    <div >

    <Button key={index}  color="secondary">{item}</Button>
    </div>
))}

        </div>
    )
}

export default BatchStatus