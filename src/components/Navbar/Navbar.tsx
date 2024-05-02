import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import pokeball from '../../assets/pokeball.png';
import './Navbar.css';



const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink
            className={`link ${activeLink === '/home' ? 'active' : ''}`}
            to='/home'
            onClick={() => setActiveLink('/home')}
          >
            <img className='logo' src={pokeball} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`link ${activeLink === '/search' ? 'active' : ''}`}
            to='/search'
            onClick={() => setActiveLink('/search')}
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`link ${activeLink === '/pokedex' ? 'active' : ''}`}
            to='/pokedex'
            onClick={() => setActiveLink('/pokedex')}
          >
            Pokedex
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`link ${activeLink === '/pokemon' ? 'active' : ''}`}
            to='/pokemon'
            onClick={() => setActiveLink('/pokemon')}
          >
            Pokemon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
