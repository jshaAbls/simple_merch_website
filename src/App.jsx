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
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Merchandise" element={<Merchandise />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}

        <Route index element={<Navigate to="/Home" replace />} /> 

    </Routes>
    <Footer/>
  </>
  );
}

export default App
