import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from "./Header"
import Footer from "./Footer";
import Merchandise from "./Merchandise"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"

import './index.css'

function App() {

  return(
  <>
    <Header />
    <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}

        <Route index element={<Navigate to="/home" replace />} /> 

    </Routes>
    <Footer/>
  </>
  );
}

export default App
