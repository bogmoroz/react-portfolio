import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePrevious } from '../utils';

export default function Contacts() {
  const location = useLocation();
  const prevLocation = usePrevious(location);

  if (location !== prevLocation) {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className='section-container contacts'>
        <h1 className='lg-heading'>
          Contact <span className='text-secondary'>me</span>
        </h1>
        <div className='boxes'>
          <div>
            <span className='text-secondary email-address'>
              mr.bogdan.moroz@gmail.com
            </span>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/bogdan-moroz-20b892113?trk=nav_responsive_tab_profile_pic'
              target='_blank'
            >
              <span className='text-secondary'>LinkedIn</span>
            </a>
          </div>
          <div>
            <a href='https://github.com/bogmoroz' target='_blank'>
              <span className='text-secondary'>GitHub</span>
            </a>
          </div>
          <div>
            <a href='https://twitter.com/bogmoroz' target='_blank'>
              <span className='text-secondary'>Twitter</span>
            </a>
          </div>
        </div>
      </div>
      <footer className='about-footer'>Bogdan Moroz &copy; 2020</footer>
    </>
  );
}
