import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-10'>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
