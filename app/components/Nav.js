import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className={'menu ' + (this.props.isVisible ? 'show' : '')}>
        <ul className={'menu-nav ' + (this.props.isVisible ? 'show' : '')}>
          <li className={'nav-item ' + (this.props.isVisible ? 'show' : '')}>
            <NavLink exact activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li className={'nav-item ' + (this.props.isVisible ? 'show' : '')}>
            <NavLink activeClassName='active' to='/software'>
              Software
            </NavLink>
          </li>
          <li className={'nav-item ' + (this.props.isVisible ? 'show' : '')}>
            <NavLink activeClassName='active' to='/media'>
              Media
            </NavLink>
          </li>
          <li className={'nav-item ' + (this.props.isVisible ? 'show' : '')}>
            <NavLink activeClassName='active' to='/contacts'>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  isVisible: PropTypes.bool.isRequired
};
