import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
