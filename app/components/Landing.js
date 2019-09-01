import React from 'react';
import style from './styles/main.scss';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

export default class Landing extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <div className='menu-btn'>
            <div className='btn-line'></div>
            <div className='btn-line'></div>
            <div className='btn-line'></div>
          </div>
        </header>

        <Nav />

        <Route exact path='/' component={Home} />
      </Router>
    );
  }
}
