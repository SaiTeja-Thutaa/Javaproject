import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import EmpList from './components/EmpList';

import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';


function App() {
  return (
    <div className='bgColor'>

        <HeaderComponent/>

        <BrowserRouter>

        <div className='container mt-3'>
          <Routes>
              <Route exact path='/' element={<EmpList/>}></Route>
              <Route path='/employees' element={<EmpList/>}></Route>
              <Route path='/add-employee' element={<CreateEmployeeComponent/>}></Route>
              <Route path='/update-employee/:id' element={<UpdateEmployeeComponent/>}></Route>
          </Routes>
        </div>

        </BrowserRouter>

        <FooterComponent/>
        
    </div>
  )
}

export default App

