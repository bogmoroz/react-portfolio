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
              Mikkeli, Finland. Having recently graduated from the South-Eastern
              Finland University of Applied Sciences, I am currently working at
              Observis on situational awareness software. My technology stack
              includes but is not limited to React, Redux, TypeScript, ES6 and
              Java.
              <br />
              <br />
              {htmlToReactParser.parse(
                "For my bachelor's thesis I developed <a href='https://www.theseus.fi/handle/10024/184586' target='_blank'> a testing strategy for the frontend using Jest and Enzyme</a>, gaining knowledge of test automation and test-driven development in the process. I am well familiar with the scrum workflow, and have configured CI/CD pipelines using Jenkins and GitLab CI."
              )}
              <br />
              <br />
              As the work presented in this portfolio hopefully reflects, I have
              valuable experience in multiple areas of technology and
              innovation. In my work I combine my technical skills and
              creativity to work on relevant projects that I can be proud of.
            </p>
          </div>

          <div className='job job-1'>
            <h3>Observis Oy</h3>
            <h4>Software Developer</h4>
            <p>January 2019 - Present</p>
            <p>
              Currently working on the next major version of the ObSAS client
              (see software projects). Set up a GitLab CI pipeline for the
              client. Implemented a solar panel grant application system in a
              small team (see software projects). Responsibilities include code
              review and providing guidance to new trainees and developers.
            </p>
          </div>

          <div className='job job-2'>
            <h3>Observis Oy</h3>
            <h4>SW Dev Intern, Thesis Worker</h4>
            <p>September 2017 - December 2018</p>
            <p>
              Multiple teams and projects including ObSAS (see projects) and a
              dashboard web app for managing music festival programmes.
              Established and documented a testing strategy for React-Redux
              apps.
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
              After creating a number of prototypes, I built the website of the
              Resonance project (see software projects).
            </p>
          </div>
        </div>
      </div>
      <footer className='about-footer'>Bogdan Moroz &copy; 2019</footer>
    </>
  );
}
