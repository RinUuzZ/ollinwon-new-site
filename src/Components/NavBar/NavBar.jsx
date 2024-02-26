import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll'; 
import LogoImage from '../../Assetss/Oliwon Logo-01.png';

const NavBar = () => {

      const [menuOpen,setMenuOpen] = useState(false)

  return (
    <nav>
      <img src={LogoImage} alt="Logo" className='title' style={{width:'16%'}}/>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="home" smooth={true} duration={1000}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000}>About</Link>
        </li>
        <li>
          <Link to="service" smooth={true} duration={1000}>Service</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
