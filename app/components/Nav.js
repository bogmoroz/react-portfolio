import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    const { isVisible } = this.props;
    return (
      <nav className={'menu ' + (isVisible ? 'show' : '')}>
        <div className={'menu-branding ' + (isVisible ? 'show' : '')}>
          <div className='portrait'></div>
        </div>
        <ul className={'menu-nav ' + (isVisible ? 'show' : '')}>
          <li className={'nav-item ' + (isVisible ? 'show' : '')}>
            <NavLink exact className='nav-link' activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li className={'nav-item ' + (isVisible ? 'show' : '')}>
            <NavLink
              exact
              className='nav-link'
              activeClassName='active'
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li className={'nav-item ' + (isVisible ? 'show' : '')}>
            <NavLink
              className='nav-link'
              activeClassName='active'
              to='/software'
            >
              Software
            </NavLink>
          </li>
          <li className={'nav-item ' + (isVisible ? 'show' : '')}>
            <NavLink className='nav-link' activeClassName='active' to='/media'>
              Media
            </NavLink>
          </li>
          <li className={'nav-item ' + (isVisible ? 'show' : '')}>
            <NavLink
              className='nav-link'
              activeClassName='active'
              to='/contacts'
            >
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
