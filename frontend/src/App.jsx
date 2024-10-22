import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import About from './Pages/About';
import Hero from './Pages/Hero';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
