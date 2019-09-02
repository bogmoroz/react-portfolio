import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='section-container home'>
      <h1 className='lg-heading'>
        Bogdan <span className='text-secondary'>Moroz</span>
      </h1>
      <h2 className='sm-heading'>Software Developer</h2>
      <div className='icons'>
        <a href='https://github.com/bogmoroz' target='_blank'>
          <FaGithub size={48} />
        </a>
        <a
          href='https://www.linkedin.com/in/bogdan-moroz-20b892113?trk=nav_responsive_tab_profile_pic'
          target='_blank'
        >
          <FaLinkedin size={48} />
        </a>
        <a href='https://twitter.com/bogmoroz' target='_blank'>
          <FaTwitter size={48} />
        </a>
      </div>
    </div>
  );
}
