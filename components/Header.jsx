import Image from 'next/image'
import logo from "../public/images/logo.png";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  
    return (
      
        <header className="header" data-header>
  <div className="container">
    <div href="#" className="logo">
    <Image src={logo} width={100} height={50} alt="Grilli - Home" />
    </div>
    <h1 className='logo-header'>EPHIE<span>CUISINE</span></h1>

    
    <nav className={`navbar ${isOpen ? '' : 'open'}`} data-navbar>
      <button className="close-btn" aria-label="close menu" data-nav-toggler 
      onClick={() => setIsOpen(!isOpen)}>
        <ion-icon name="close-outline" aria-hidden="true" />
      </button>
      <a href="#" className="logo">
        <Image src={logo} width={160} height={50} alt="Grilli - Home" />
        
        
      </a>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className="navbar-link hover-underline active">
            <div className="separator" />
            <span className="span">Home</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#menu" className="navbar-link hover-underline">
            <div className="separator" />
            <span className="span">Menus</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link hover-underline">
            <div className="separator" />
            <span className="span">About Us</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link hover-underline">
            <div className="separator" />
            <span className="span">Our Chefs</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link hover-underline">
            <div className="separator" />
            <span className="span">Contact</span>
          </a>
        </li>
      </ul>
      <div className="text-center">
        <p className="headline-1 navbar-title">Visit Us</p>
        <address className="body-4">
        488 Mowry Ave  <br />
        Fremont, CA 94536
        </address>
        <p className="body-4 navbar-text">Open: 10.00 am - 8.30pm</p>
        <a href="mailto:ephesonbeyene@gmail.com" className="body-4 sidebar-link">
        ephesonbeyene@gmail.com
        </a>
        <div className="separator" />
        <p className="contact-label">Booking Request</p>
        <a
          href="tel:+1 510-894-1894"
          className="body-1 contact-number hover-underline"
        >
          +1 510-894-1894
        </a>
      </div>

    </nav>
    <a href="#" className="btn btn-secondary">
      <span className="text text-1">Find A Table</span>
      <span className="text text-2" aria-hidden="true">
        Find A Table
      </span>
    </a>
    <button className="nav-open-btn" aria-label="open menu" data-nav-toggler
      onClick={() => setIsOpen(!isOpen)}>
      <span className="line line-1" />
      <span className="line line-2" />
      <span className="line line-3" />
    </button>
    <div className="overlay"  data-nav-toggler data-overlay 
    style={{ display: isOpen ? 'none' : 'block' }}
    onClick={() => setIsOpen(true)}/>
  </div>
</header>
    )
}