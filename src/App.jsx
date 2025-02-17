import './App.css';
import Home from './assets/pages/Home';
import Services from './assets/pages/Services';
import Signup from './assets/pages/Singup';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Signin from './assets/pages/Singin';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      
    </>
  );
}

export default App;