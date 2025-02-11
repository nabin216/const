import React, { useState } from 'react';
import '../Styles/Navbar.css';
import logo from "../assets/logoIcon.png"
import hamburgericon from "../assets/icons8-hamburger-50.png"
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg text-white mx-auto px-4">
      <div className="container-fluid" style={{ maxWidth: '1540px' }}>
        <a className="navbar-brand text-white x1" href="/">
          <div className="logo-flex">
          <div><img
            src={logo}
            width={40}
            height={50}
            className="d-inline-block align-top "
            alt=""
          /></div>
          <div className='logo-name'>UTTARA CONSTRUCTION <br /><span>Build Your Future</span></div>
          </div>
          
        </a>

        <button
          className="navbar-toggler hamburger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={hamburgericon} alt="Hamburger Menu" className="navbar-toggler-icon hamburger-icon" /> {/* Use your icon here */}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-4">
            <li className="nav-item me-5 item-name">
              <Link className="nav-link active text-white" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-5 item-name">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown me-5 item-name">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu bg-dark">
                <li className="dropdown-item hover-red">
                  <Link className="text-white no-underline" to="/developer-projects">As developer</Link>
                </li>
                <hr className="dropdown-divider" />
                <li className="dropdown-item hover-red">
                  <Link className="text-white no-underline" to="/contractor-projects">As Contractor</Link>
                </li>
                {/* ... */}
              </ul>
            </li>
            <li className="nav-item item-name">
            <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
