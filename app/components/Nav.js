import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='menu'>
      <ul className='menu-nav'>
        <li className='nav-item'>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='active' to='/software'>
            Software
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='active' to='/media'>
            Media
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='active' to='/contacts'>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
