var React = require('react');

function Contacts() {
  return(
    <div className='contacts-container'>
      <p>mr.bogdan.moroz@gmail.com</p>
      <a href='https://www.linkedin.com/in/bogdan-moroz-20b892113?trk=nav_responsive_tab_profile_pic'>
        <p>LinkedIn</p>
      </a>
      <a href='https://github.com/bogmoroz'>
        <p>Github</p>
      </a>
    </div>
  )
}

module.exports = Contacts;
