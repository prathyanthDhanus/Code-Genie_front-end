import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


const viewcategorytopics = () => {
    const [syllabus, setSyllabus] = useState([]);
    const [uniqueWeeks, setUniqueWeeks] = useState([]);
    const { id } = useParams();
    const {category}=useParams()
    console.log(category);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/admin/domain/category/${id}`);
          const data = response.data.data;
          console.log(data);
  
          // Extract unique weeks
          const weeks = [...new Set(data.map(topic => topic.week))];
  
          setSyllabus(data);
          setUniqueWeeks(weeks);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [id]);
    
  return (
    <div style={{marginLeft:"25rem"}}>
    {/* <h1>Unique Weeks:</h1>
    <ul>
      {uniqueWeeks.map((week, index) => (
        <li key={index}>{week}</li>
      ))}
    </ul> */}

    <h1>React Categories:</h1>
    {uniqueWeeks.map((week, index) => (
      <div key={index}>
        <h2> {week}</h2>
        <ul>
          {syllabus
            .filter(topic => topic.category === category && topic.week === week)
            .map((topic, topicIndex) => (
              <li key={topicIndex}>{topic.topicName}:{topic.resource}</li>
            ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default viewcategorytopics