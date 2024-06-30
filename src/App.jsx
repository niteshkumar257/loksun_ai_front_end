import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
     <Route path='/login' element={<Login/>}/>
  
     <Route path='/register' element={<Register/>}/>
     <Route path='/home' element={ <Layout showHeader={true}><Home/></Layout>}/>
     <Route path='/profile' element={<Layout showHeader={true}><Profile/></Layout>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App