import React from 'react';
import { Parser } from 'html-to-react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  var htmlToReactParser = new Parser();
  return (
    <>
      <h1 class='lg-heading'>
        Bogdan <span class='text-secondary'>Moroz</span>
      </h1>
      <h2 class='sm-heading'>
        Frontend Developer, Programmer, Designer & Creative
      </h2>
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
    </>
  );
}
