import Home from './Home'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Header from './Bootstrap/Header'
import Footer from './Bootstrap/Footer'
import Profiledetails from './Profiledetails'
import Studentdetails from './Admin/Studentdetails'


function App() {

  

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profiledetails' element={<Profiledetails/>}/>
          <Route path='/studentdetails' element={<Studentdetails/>}/>
          


        </Routes>
      </BrowserRouter>
      <Footer/>

    </>
  )
}

export default App
