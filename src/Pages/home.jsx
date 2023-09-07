import CustomCard from "../Components/card"
import Carousels from "../Components/carousels"
import "../Components/Style.css"


const Home = () => {
  return (
   
    <>
   <Carousels/><br/>
     
      <h2>Our Courses</h2>
      <div className="home-course">
      <CustomCard
        imageurl="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Example Card"
        cardtext="This is an example card."
        buttontext="Click me"
      />
       <CustomCard
        imageurl="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Example Card"
        cardtext="This is an example card."
        buttontext="Click me"
      />
       <CustomCard
        imageurl="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Example Card"
        cardtext="This is an example card."
        buttontext="Click me"
      />
       <CustomCard
        imageurl="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Example Card"
        cardtext="This is an example card."
        buttontext="Click me"
      /> <CustomCard
        imageurl="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Example Card"
        cardtext="This is an example card."
        buttontext="Click me"
      />
      </div>
  
  
    </>
    
    
   
  )
}

export default Home