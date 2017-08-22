var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
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
  )
}

module.exports = Nav;
