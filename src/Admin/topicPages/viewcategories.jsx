import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { fetchData } from './viewdomain';
import axios from 'axios';
import { useState } from 'react';

const Viewcategories = () => {
  // const[syllabus,setSyllabus]=useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const navigate = useNavigate()

const {id} = useParams()
// console.log(id);

useEffect(()=>{
  const fetchData = async ()=>{
    try{
     const response = await axios.get(`http://localhost:3000/admin/domain/category/${id}`)
     console.log(response);
     const data = response.data.data
    //  console.log(data);
    const categorySet = new Set();
    data.forEach((topic) => {
      categorySet.add(topic.category);
    });

    // Convert the Set back to an array
    const uniqueCategoryArray = [...categorySet];

    // setSyllabus(data);
    setUniqueCategories(uniqueCategoryArray);
    }catch(error){
      console.log(error)
    }
  }
  fetchData()
},[])

  return (
    <div style={{marginLeft:"25rem"}}>
<h1>Unique Categories:</h1>
      <ul>
        {uniqueCategories.map((category, index) => (
          <li key={index}  onClick={()=>navigate(`/admin/view/categories/week/${category}/${id}`)}>{category}</li>
        ))}
      </ul> 

    </div>
  )
}

export default Viewcategories