import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 900) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center' }}>
            <span>YUMMY</span>
            <i className="fa-solid fa-lemon" style={{ marginLeft: '8px' }}></i>
          </Link>
          <div className="menu-icon" onClick={handeClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorite" className="nav-links" onClick={closeMobileMenu}>
                My Favorite
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/iconic" className="nav-links" onClick={closeMobileMenu}>
                Iconic
              </Link>
            </li>
          </ul>
          {/* {button && <Button to="/popular" buttonStyle='btn--outline'>Popular</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;