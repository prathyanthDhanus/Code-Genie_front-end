import Home from './Pages/home'
import Login from './Pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/signup'
import Header from './Components/header'
import Footer from './Components/footer'
import Profiledetails from './Pages/profiledetails'
import Studentdetails from './Admin/studentPages/studentdetails'
import Sidebar from './Admin/sidebar'
import Edit from './Pages/edit'
import ShowAllBatch from './Admin/batchPages/showAllBatch'
import One from './Admin/studentPages/one'
import StudentEdit from './Admin/studentPages/studentEdit'
import ViewBatch from './Admin/batchPages/viewBatch'
import BatchStatus from './Admin/batchPages/batchStatus'


function App() {


 
  return (
  
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profiledetails' element={<Profiledetails />} />

          <Route path='/sidebar' element={<Sidebar />} />

          <Route element={<Sidebar />}>
          <Route path='/signup' element={<Signup />} />
            <Route path='/studentdetails' element={<Studentdetails />} />
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/one/:id' element={<One/>}/>
            <Route path='/studentedit/:id' element={<StudentEdit/>}/>
            <Route path='/showallbatches' element={<ShowAllBatch/>}/>
            <Route path='/admin/viewbatch/:id' element={<ViewBatch />} />
            <Route path='/admin/batch/status' element={<BatchStatus />} />


          </Route>


        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  )
}

export default App
