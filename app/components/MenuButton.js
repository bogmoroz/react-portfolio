import React from 'react';
import PropTypes from 'prop-types';

export default class MenuButton extends React.Component {
  render() {
    const { isMenuVisible, handleClick } = this.props;
    return (
      <div
        className={'menu-btn ' + (isMenuVisible ? 'close' : '')}
        onClick={handleClick}
      >
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>
    );
  }
}

MenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired
};
