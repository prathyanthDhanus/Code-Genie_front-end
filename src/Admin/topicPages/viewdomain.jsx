import React from 'react'
import CustomCard from '../../Components/card'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom'





export const fetchData = async (setViewBatch, setLoading) => {
  try {
    const response = await axios.get("http://localhost:3000/admin/domain");
    const data = response.data.data;
    // console.log(data);
    setViewBatch(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};


const ViewDomain = () => {

  const [viewBatch, setViewBatch] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/admin/domain")
  //       console.log(response);
  //       const data = response.data.data;
  //       setViewBatch(data)
  //       setLoading(false)

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   };
  //   fetchData()
  // }, [setViewBatch])
 
  useEffect(() => {
    fetchData(setViewBatch, setLoading);
  }, [setViewBatch]);

  return (
    <div style={{ marginLeft: "25rem" }}>
      <div className='viewDomain'>
        {loading ? (
          <div className='batch-skelton'>
            <Skeleton width={"60rem"} height={30} />
            <Skeleton animation="wave" width={"60rem"} />
            <Skeleton animation={false} width={"60rem"} />
          </div>
        ) : (
          <>

            {viewBatch.map((data) => (

              <CustomCard
               key={data.ids} 
                imageurl="https://nitsantech.com/fileadmin/ns_theme_ns2019/blog/_live/What_is_the_MERN_stack_and_how_do_I_use_it_/What_is_the_MERN_stack_and_how_do_I_use_it.jpg"
                title={data.name}
                cardtext="This is an example card."
                buttontext="View Syllabus"
                onClick={() => navigate(`/admin/view/categories/${data.ids}`)}
              />
            ))}
          </>
        )}

      </div>



    </div>
  )
}

export default ViewDomain