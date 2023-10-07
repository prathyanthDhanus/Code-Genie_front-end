import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../batchPages/batchStyle.css"

const ShowAllBatch = () => {

  const [batch, setBatch] = useState([]);
  // Initialize the index of the currently open batch
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/batch');
        const data = response.data.data;
        setBatch(data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchData();
  }, []);

  

  return (
    <div style={{ marginLeft: '30rem' }}>
      <h2> All Batch Details </h2>
      <div className='batch-div'> 
        {batch.map((item, index) => (
          <div key={item.id}>
            <Button
             onClick={() => navigate(`/admin/viewbatch/${item}`)}
            >
           {item}
            </Button>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowAllBatch;
