import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout_Page from './pages/Layout_Page'
import Service_Page from './pages/Service_Page'
import Repair_Page from './pages/Repair_Page'
import Paint_Page from './pages/Paint_Page'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout_Page/>} index></Route>
          <Route path='/services/vehicleservicing' element={<Service_Page/>} ></Route>
          <Route path='/services/mechanicalrepairs' element={<Repair_Page/>} ></Route>
          <Route path='/services/repairandpaint' element={<Paint_Page/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
