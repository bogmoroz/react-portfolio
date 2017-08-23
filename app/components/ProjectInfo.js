var React = require('react');
var PropTypes = require('prop-types');
import Linkify from 'react-linkify';

function ProjectInfo(props) {

  return(
    <div>
      <div className='project-item'>
        <div className='item-description'>
          <h1>{props.title}</h1>

          <Linkify>
            <p>{props.description}</p>
          </Linkify>

        </div>
        <img
          src={props.imageUrl}
          />
      </div>
    </div>
  )
}

ProjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  videoUrl: PropTypes.string
}

module.exports = ProjectInfo;


// During my internship at MediaLAB Amsterdam I have worked on a project
//   for the European Holocaust Research Infrastructure ('https://ehri-project.eu/')
//   devoted to ways of engaging young adults with the study of history
//   of the Holocaust. After creating a number of prototypes involving
//   React Native, native Android, Processing, Unity and more, I have built 
//   the end product - a website that allows musicians to share their
//   renditions of songs written by Jewish composers in ghettos and concentration
//   camps. The website is currently available at 'http://resonanceproject.eu/'
