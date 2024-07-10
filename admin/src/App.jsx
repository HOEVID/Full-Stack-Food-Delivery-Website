import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import List from './pages/Add/List/List'
import Orders from './pages/Add/Orders/Orders'
import Add from './pages/Add/Add'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-contents">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App