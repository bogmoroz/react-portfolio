var React = require('react');
var Tabs = require('./Tabs');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Tabs />
      </div>
    )
  }
}

module.exports = App;
