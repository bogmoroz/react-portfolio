import React from 'react';
import ProjectInfo from './ProjectInfo';
import { useLocation } from 'react-router-dom';
import { usePrevious } from '../utils';

export default function Media() {
  const location = useLocation();
  const prevLocation = usePrevious(location);

  if (location !== prevLocation) {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className='section-container media'>
        <h1 className='lg-heading'>
          Media <span className='text-secondary'>projects</span>
        </h1>
        <ProjectInfo
          title='Forget Me Not (2016)'
          description='<p>A short film I made while taking a course on visual media
        production at Aarhus University in Denmark in the summer of 2016. My primary
        role during production was sound and video editing, but I participated
        in every stage including scripting, storyboarding, location scouting and 
        camera work. The production was carried out under the guidance of Dr. Richard Raskin, an
        established short film director and theorist.</p>'
          videoUrl='https://www.youtube.com/embed/Qx4uN7dyJB4'
        ></ProjectInfo>

        <ProjectInfo
          title='The Last Sleepover (2015)'
          description='<p>A short film made during the Basics of Media Production course
        at South-Eastern Finland University of Applied Sciences in the spring of 2015. This was my
        first production where I participated in every aspect of the process. I
        wrote, storyboarded, did camera work and some acting, as well as edited the film.</p>'
          videoUrl='https://www.youtube.com/embed/-COuwI5-VBM'
        ></ProjectInfo>

        <ProjectInfo
          title='"Jukurit" Media Productions (2014 - 2015)'
          description="<p>For a year in 2014-2015 I recorded games of a Mikkeli ice-hockey
        team 'Mikkelin Jukurit' for live broadcasts and highlights reels. There I got
        a lot of hands-on experience of working with a camera and setting up a large
        multi-camera production. The highlights are available on
        <a href='https://www.youtube.com/watch?v=q-k5nuuIQ6I' target='_blank'>Jukurit's YouTube channel</a>
        .</p>"
          imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/617667xtLLGTS9.png'
        ></ProjectInfo>
        {/*  <ProjectInfo
          title='A magazine about Wes Craven (2015)'
          description='<p>As part of a graphical publishing course in 2015, I made a
        magazine dedicated to one of the great horror movie directors, Wes Craven.
        The work was carried out using Adobe Photoshop, Illustrator and InDesign.
        Full magazine is available
        <a href="https://drive.google.com/file/d/0B-4FPtZdd1dFOGxBT1RpSnRQTWc/view?usp=sharing"
        target="_blank">here</a>.</p>'
          imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/6176671cqKDi4Z.png'
        ></ProjectInfo>
        <ProjectInfo
          title='Minun Mikkelini (2015)'
          description='<p>In spring 2016 I made a magazine about my favorite places
        in the town of Mikkeli for a Finnish language course. Full magazine can
        be found <a href="https://drive.google.com/file/d/0B-4FPtZdd1dFZ2Y2SU1FUWdsejA/view?usp=sharing"
        target="_blank">here</a>.</p>'
          imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/6176672RUGHz8s.png'
        ></ProjectInfo> */}
      </div>
      <footer className='about-footer'>Bogdan Moroz &copy; 2020</footer>
    </>
  );
}
