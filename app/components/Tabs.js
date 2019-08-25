import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home'
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState(function() {
      return {
        selectedTab: tab
      };
    });
  }

  render() {
    var tabNames = ['Home', 'Software', 'Media', 'Contacts'];
    return (
      <ul className='tab-menu'>
        {tabNames.map(function(tab) {
          return (
            <li
              style={
                tab === this.state.selectedTab ? { color: '#f79c13' } : null
              }
              onClick={this.changeTab.bind(null, tab)}
              key={tab}
            >
              {tab}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}
