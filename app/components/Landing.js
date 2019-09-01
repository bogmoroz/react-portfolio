import React from 'react';
import style from './styles/main.scss';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MenuButton from './MenuButton';

export default class Landing extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <MenuButton />
        </header>

        <Nav />

        <Route exact path='/' component={Home} />
      </Router>
    );
  }
}
