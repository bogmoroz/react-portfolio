import React from 'react';
import { Parser } from 'html-to-react';
import { useLocation } from 'react-router-dom';
import { usePrevious } from '../utils';

export default function About() {
  var htmlToReactParser = new Parser();

  const location = useLocation();
  const prevLocation = usePrevious(location);

  if (location !== prevLocation) {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className='section-container about'>
        <h1 className='lg-heading'>
          About <span className='text-secondary'>me</span>
        </h1>
        <div className='about-info'>
          <img
            className='bio-image'
            src='https://github.com/bogmoroz.png?size=300'
            alt={'Github avatar'}
          />
          <div className='bio'>
            <p>
              Hello! My name is Bogdan Moroz. I am a software developer based in
              Mikkeli, Finland. Having recently graduated from the{' '}
              <a
                target='_blank'
                href='https://www.xamk.fi/en/degree-blog/hands-experience-hardware-building-computer-networks/'
              >
                South-Eastern Finland University of Applied Sciences
              </a>
              , I am currently working at{' '}
              <a target='_blank' href='https://www.observis.fi/'>
                Observis
              </a>{' '}
              on situational awareness software. My technology stack includes
              but is not limited to React, React Native, TypeScript, ES6 and
              Java.
              <br />
              <br />
              {htmlToReactParser.parse(
                "For my bachelor's thesis I developed <a href='https://www.theseus.fi/handle/10024/184586' target='_blank'> a testing strategy for React applications using Jest and Enzyme</a>, gaining knowledge of test automation and test-driven development in the process. I am well familiar with the scrum workflow, and have configured CI/CD pipelines using Jenkins and GitLab CI."
              )}
            </p>
          </div>

          <div className='job job-1'>
            <h3>Observis Oy</h3>
            <h4>Software Developer</h4>
            <p>September 2017 - Present</p>
            <p>
              Working on web, desktop and mobile applications (see software
              projects). Responsibilities include code review and providing
              guidance to new trainees and developers.
            </p>
          </div>

          <div className='job job-2'>
            <h3>Observis Oy</h3>
            <h4>SW Dev Intern, Thesis Worker</h4>
            <p>September 2017 - December 2018</p>
            <p>
              Multiple teams and projects including ObSAS (see software
              projects) and a dashboard web app for managing music festival
              programmes. Determined and documented a testing strategy for
              React-Redux apps.
            </p>
          </div>

          <div className='job job-3'>
            <h3>MediaLAB Amsterdam</h3>
            <h4>Software Developer Intern</h4>
            <p>Winter - Summer 2017</p>
            <p>
              As the programmer in a multidisciplinary team, I worked for
              MediaLAB and European Holocaust Research Infrastructure on ways of
              engaging young adults with studying history of the Holocaust.
              After creating a number of prototypes, I built the website of the{' '}
              <a target='_blank' href={'https://resonance.ehri-project.eu/'}>
                Resonance project
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <footer className='about-footer'>Bogdan Moroz &copy; 2020</footer>
    </>
  );
}
