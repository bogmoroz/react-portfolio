import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav-container'>
      <p>Bogdan Moroz</p>
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/software'>
            Software
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/media'>
            Media
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/contacts'>
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
