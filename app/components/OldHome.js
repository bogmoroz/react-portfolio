import React from 'react';
import { Parser } from 'html-to-react';

export default function OldHome() {
  var htmlToReactParser = new Parser();
  return (
    <div className='home-container'>
      <img
        className='avatar'
        src='https://github.com/bogmoroz.png?size=300'
        alt={'Github avatar'}
      />
      <p className='home-about-me'>
        Hello! My name is Bogdan Moroz. I am a software developer based in
        Mikkeli, Finland. Having recently graduated from the South-Eastern
        Finland University of Applied Sciences, I am currently working at
        Observis on situational awareness software. My technology stack includes
        but is not limited to React, Redux, TypeScript and Java.
        <br />
        <br />
        {htmlToReactParser.parse(
          "For my bachelor's thesis I developed <a href='https://www.theseus.fi/handle/10024/184586' target='_blank'> a testing strategy for the frontend using Jest and Enzyme</a>, gaining knowledge of test automation and test-driven development in the process. I am well familiar with the scrum workflow, and have configured CI/CD pipelines using Jenkins and GitLab CI."
        )}
        <br />
        <br />
        As the work presented in this portfolio hopefully reflects, I have
        valuable experience in multiple areas of technology and innovation. I am
        looking for a place where I can combine my technical skills and
        creativity to work on relevant projects that I can be proud of.
      </p>
    </div>
  );
}
