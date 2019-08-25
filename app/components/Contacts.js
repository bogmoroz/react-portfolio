import React from 'react';

export default function Contacts() {
  return (
    <div className='contacts-container'>
      <p>mr.bogdan.moroz@gmail.com</p>
      <a
        href='https://www.linkedin.com/in/bogdan-moroz-20b892113?trk=nav_responsive_tab_profile_pic'
        target='_blank'
      >
        <p>LinkedIn</p>
      </a>
      <a href='https://github.com/bogmoroz' target='_blank'>
        <p>Github</p>
      </a>
    </div>
  );
}
