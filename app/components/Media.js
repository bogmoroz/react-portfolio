var React = require('react');
var ProjectInfo = require('./ProjectInfo');

function Media() {
  return(
    <div>
      <ProjectInfo
        title='Forget Me Not'
        description='A short film I made while taking a course on visual media
        production in Aarhus University in Denmark in the summer 2016. My primary
        roles during production were camera work and editing, but I have also participated
        in all stages including scripting, storyboarding, location scouting, casting and
        so on. The production was carried out under guidance of Dr. Richard Raskin, an
        established short film director and theorist. The film was well received and has
        entered the program of Flensburg Film Festival set for November 2016.'
        videoUrl='https://www.youtube.com/embed/Qx4uN7dyJB4'
        >
      </ProjectInfo>

      <ProjectInfo
        title='The Last Sleepover'
        description='A short film made during Basics of Media Production course
        in Mikkeli University of Applied Sciences in the Spring 2015. This was my
        first production where I participated in every aspect of the process. I
        wrote, storyboarded, did camera work and some acting, as well as edited the film.'
        videoUrl='https://www.youtube.com/embed/-COuwI5-VBM'
        >
      </ProjectInfo>

      <ProjectInfo
        title='"Jukurit" Media Productions'
        description="For a year in 2014-2015 I recorded games of Mikkeli ice-hockey
        team 'Mikkelin Jukurit' for live broadcast and highlights reel. There I got
        a lot of hands-on experience of working with a camera and setting up a large
        multi-camera production. The highlights are available on Jukurit's YouTube channel
        (www.youtube.com/watch?v=q-k5nuuIQ6I)."
        imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/617667xtLLGTS9.png'
        >
      </ProjectInfo>
      <ProjectInfo
        title='A magazine about Wes Craven'
        description='As part of a graphical publishing course in 2015, I made a
        magazine dedicated to one of the great horror movie directors, Wes Craven.
        The work was carried out using Adobe Photoshop, Illustrator and InDesign.
        Full magazine is available here: drive.google.com/file/d/0B-4FPtZdd1dFOGxBT1RpSnRQTWc/view?usp=sharing.'
        imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/6176671cqKDi4Z.png'
        >
      </ProjectInfo>
      <ProjectInfo
        title='Minun Mikkelini'
        description='In spring 2016 I made a magazine about my favorite places
        in the town of Mikkeli for a Finnish language course. Full magazine can
        be found here: drive.google.com/file/d/0B-4FPtZdd1dFZ2Y2SU1FUWdsejA/view?usp=sharing'
        imageUrl='https://dvqlxo2m2q99q.cloudfront.net/000_clients/617667/file/6176672RUGHz8s.png'
        >
      </ProjectInfo>
    </div>
  )
}

module.exports = Media;
