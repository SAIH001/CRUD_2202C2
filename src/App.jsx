import React from 'react'

//---dependencies

import { BrowserRouter,Routes,Route } from 'react-router-dom'


//-- pages 
import AddUser from './Pages/AddUser';
import UserList from './Pages/UserList';


//-- components

import Navbar from './Components/Navbar';
import Practice from './Pages/Practice';




const App = () => {
  return (
    <BrowserRouter>
    

    <Navbar/>


    <Routes>


    <Route   path='/'   element={<AddUser/>}    />
    <Route   path='/userlist'   element={<UserList/>}    />
    <Route   path='/toast'   element={<Practice/>}    />

    </Routes>
    
    </BrowserRouter>
  )
}

export default App