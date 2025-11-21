import { Link } from "react-router-dom"

import "./Header.css"

function Header(){

    return(
        <header className="header-container">
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Merchandise">Merchandise</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
