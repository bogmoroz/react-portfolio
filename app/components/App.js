var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Software = require('./Software');
var Tabs = require('./Tabs');
var Contacts = require('./Contacts');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/software' component={Software} />
            <Route exact path='/media' component={Contacts} />
            <Route exact path='/contacts' component={Contacts} />
            <Route render={function() {
                return <p>Page Not Found</p>
              }} />
          </Switch>
        </div>
      </Router>


    )
  }
}

module.exports = App;
