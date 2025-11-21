import {Routes, Route} from "react-router"

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
        <Route path="/Home" element={<Home />} />

    </Routes>
    <Footer/>
  </>
  );
}

export default App
