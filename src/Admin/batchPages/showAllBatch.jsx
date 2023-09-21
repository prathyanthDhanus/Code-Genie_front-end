import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../batchPages/batchStyle.css"

const ShowAllBatch = () => {

  const [batch, setBatch] = useState([]);
  // Initialize the index of the currently open batch
  const [openBatchIndex, setOpenBatchIndex] = useState(-1);
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

  // Function to toggle the visibility of a specific batch
  const toggleBatchDetails = (index) => {
    if (index === openBatchIndex) {
      // Clicking on an already open batch should close it
      setOpenBatchIndex(-1);
    } else {
      setOpenBatchIndex(index);
    }
  };

  return (
    <div style={{ marginLeft: '30rem' }}>
      <h2> All Batch Details </h2>
      <div className='batch-div'> 
        {batch.map((item, index) => (
          <div key={item.id}>
            <Button
              className={`batch-button ${index === openBatchIndex ? 'expanded' : ''}`}
              onClick={() => toggleBatchDetails(index)}
            >
              Batch {item} <span>{index === openBatchIndex ? '▼' : '▲'}</span>
            </Button>
            {index === openBatchIndex && (
              <div>
                {/* Your batch details content goes here */}
                <a onClick={() => navigate(`/admin/viewbatch/${item}`)}>View the {item} batch's student list.</a> <br/>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowAllBatch;
