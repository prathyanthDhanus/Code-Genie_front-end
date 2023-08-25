import Home from './Home'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Header from './Bootstrap/Header'
import Footer from './Bootstrap/Footer'
import Profiledetails from './Profiledetails'
import Studentdetails from './Admin/Studentdetails'
import Sidebar from './Admin/Sidebar'

function App() {



  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profiledetails' element={<Profiledetails />} />

          <Route element={<Sidebar />}>
            {/* <Route path='/sidebar' element={<Sidebar />} /> */}
            <Route path='/studentdetails' element={<Studentdetails />} />
          </Route>


        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App
