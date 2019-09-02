import React from 'react';
import style from './styles/main.scss';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Software from './Software';
import Media from './Media';
import Contacts from './Contacts';
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/software' component={Software} />
          <Route exact path='/media' component={Media} />
          <Route exact path='/contacts' component={Contacts} />
          <Route render={() => <p>Page Not Found</p>} />
        </Switch>
      </Router>
    );
  }

  toggleMenu = () => {
    this.setState(({ isMenuVisible }) => ({
      isMenuVisible: !isMenuVisible
    }));
  };
}
