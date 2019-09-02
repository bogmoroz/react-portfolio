import React from 'react';
import style from './styles/main.scss';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MenuButton from './MenuButton';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuVisible: false
    };
  }

  render() {
    const { isMenuVisible } = this.state;
    return (
      <Router>
        <header>
          <MenuButton
            handleClick={this.toggleMenu}
            isMenuVisible={isMenuVisible}
          />

          <Nav isVisible={isMenuVisible} />
        </header>

        <Route exact path='/' component={Home} />
      </Router>
    );
  }

  toggleMenu = () => {
    this.setState(({ isMenuVisible }) => ({
      isMenuVisible: !isMenuVisible
    }));
  };
}
