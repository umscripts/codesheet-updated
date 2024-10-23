import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import About from './Pages/About';
import Hero from './Pages/Hero';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Error404 from './Pages/Error404';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
