import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class MenuButton extends React.Component {
  componentDidUpdate(prevProps) {
    this.props.location.pathname !== prevProps.location.pathname &&
      this.props.handleClick();
  }

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

export default withRouter(MenuButton);
