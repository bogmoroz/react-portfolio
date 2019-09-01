import React from 'react';
import PropTypes from 'prop-types';

export default class MenuButton extends React.Component {
  render() {
    return (
      <div className='menu-btn' onClick={this.props.handleClick}>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>
    );
  }
}

MenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};
