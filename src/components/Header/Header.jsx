import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

const Header = () => (
  <header>
    <div className="container h-flex">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="links">
        <ul>
          <li>
            <Link to="/" className="menu__links">Лента</Link>
          </li>
          <li>
            <Link to="/profile/" className="menu__links">Профиль</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

);

export default Header;
