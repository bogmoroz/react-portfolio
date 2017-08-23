var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Tabs = require('./Tabs');
var Contacts = require('./Contacts');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/software' component={Tabs} />
          <Route exact path='/media' component={Home} />
          <Route exact path='/contacts' component={Contacts} />
        </div>
      </Router>


    )
  }
}

module.exports = App;
