import React from 'react'

//---dependencies

import { BrowserRouter,Routes,Route } from 'react-router-dom'


//-- pages 
import AddUser from './Pages/AddUser';
import UserList from './Pages/UserList';


//-- components

import Navbar from './Components/Navbar';




const App = () => {
  return (
    <BrowserRouter>
    

    <Navbar/>


    <Routes>


    <Route   path='/'   element={<AddUser/>}    />
    <Route   path='/userlist'   element={<UserList/>}    />

    </Routes>
    
    </BrowserRouter>
  )
}

export default App