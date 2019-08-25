import React from 'react';
import ProjectInfo from './ProjectInfo';

export default function Software() {
  return (
    <div className='software-container'>
      <ProjectInfo
        title='Resonance'
        description="<p>During my internship at <a href='http://medialabamsterdam.com'
        target='_blank'>MediaLAB Amsterdam</a> I have worked on a project
        for the <a href='https://ehri-project.eu/' target='_blank'>European Holocaust Research Infrastructure</a>
        devoted to ways of engaging young adults with the study of history
        of the Holocaust. After creating a number of prototypes involving
        React Native, native Android, Processing, Unity and more, I have built 
        the end product - a website that allows musicians to share their
        renditions of songs written by Jewish composers in ghettos and concentration
        camps. The website is currently available at http://resonanceproject.eu/</p>"
        imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/617667LKX1JCvp.png'
      ></ProjectInfo>

      <ProjectInfo
        title='Smart Floor Sport'
        description="<p>As part of my studies at Amsterdam University of Applied Sciences,
      I have worked on a project for a company called <a href='http://trifork.com/' target='_blank'>Trifork</a>. We were building an Android
      application for a product named Smart Floor Sport - a floor that tracks athlete positions
      and allows gathering data on their speed, movements, tactics and much more. For me, this was 
      a great learning experience as an Android developer, as well as an insight into how modern
      tech companies operate. More information about the project is available at https://www.smartfloor.com/.</p>"
        imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/617667hU5KYRVP.jpg'
      ></ProjectInfo>

      <ProjectInfo
        title='Industrial Hackathon at Mikkelin Betoni'
        description='<p>Our team won a 24-hour hackathon at a local concrete factory
      "Mikkelin Betoni". We managed to develop a program that allows taking measurements
      of 3D-models. The company intended to use this software as a quick means of quality
      testing their products. Final presentation is available
      <a href="https://drive.google.com/file/d/0B-4FPtZdd1dFOVhxbElLa2pqeUU/view" target="_blank">here</a>.</p>'
        imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/617667Wub5r48k.jpg'
      ></ProjectInfo>

      <ProjectInfo
        title='Tardigrade!'
        description='<p>During my studies at South-Eastern Finland University of Applied Sciences I have
      taken part in development of a Unity-based time-killer game called "Tardigrade!".
      The game is about a little animal called Tardigrade that gets stranded in space and
      needs to return back to Earth. It does that by jumping from one rotating moving
      asteroid to another, avoiding obstacles on the way. Entire game is controlled with 
      one button that is used to jump and to control the force of a jump. The game is
      currently available at http://www.playtardi.com/.<br/><br/>
      I plan to continue working on the game in the future.</p>'
        imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/617667HCkz8oNc.jpg'
      ></ProjectInfo>
    </div>
  );
}
