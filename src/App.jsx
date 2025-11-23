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
        <Route path="/simple_merch_website/contact" element={<Contact />} />
        <Route path="/simple_merch_website/about" element={<About />} />
        <Route path="/simple_merch_website/merchandise" element={<Merchandise />} />
        <Route path="/simple_merch_website/home" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}

        <Route index element={<Navigate to="/simple_merch_website/home" replace />} /> 

    </Routes>
    <Footer/>
  </>
  );
}

export default App
