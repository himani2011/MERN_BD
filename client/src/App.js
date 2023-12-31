import React, {useState,useEffect} from 'react';
import Home from './components/Home';
//import Admin from './components/Admin';
import FAQ from './components/FAQ';
import Login from './components/Login';
import DonorSignup from './components/DonarSignup';
import OrgSignup from './components/OrgSignup';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';
import { Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';


const App = () => {

  const [auth,setAuth] = useState();

  useEffect(()=>{
    setAuth(localStorage.getItem("TOKEN"));
  },[]);


  return (
    <div>
      <NoteState>
      <Navbar auth={auth}/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth}/>} />
        <Route path="/dsignup" element={<DonorSignup setAuth={setAuth}/>} />
        <Route path="/osignup" element={<OrgSignup setAuth={setAuth}/>} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path='/profile' element={<Profile/>} />
        <Route path='/logout' element={<Logout setAuth={setAuth}/>} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/forgotPassword' element={<Forgotpassword/>} />
        <Route path='/resetPassword/:id' element={<Resetpassword/>} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>
      </NoteState>
    </div>
  )
}

export default App


