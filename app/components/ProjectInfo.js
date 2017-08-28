var React = require('react');
var PropTypes = require('prop-types');
var HtmlToReactParser = require('html-to-react').Parser;
import Linkify from 'react-linkify';

function ProjectInfo(props) {
  var htmlToReactParser = new HtmlToReactParser();
  var parsedDescription = htmlToReactParser.parse(props.description);
  if (props.imageUrl) {
    return(
      <div>
        <div className='project-item'>
          <div className='item-description'>
            <h1>{props.title}</h1>
            <Linkify properties={{target: '_blank'}}>
              {parsedDescription}
            </Linkify>
          </div>
          <div className='illustration-container'>
            <img
              src={props.imageUrl}
            />
          </div>
        </div>
      </div>
    )
  } else if (props.videoUrl) {
    return(
      <div>
        <div className='project-item'>
          <div className='item-description'>
            <h1>{props.title}</h1>
            <Linkify properties={{target: '_blank'}}>
              {parsedDescription}
            </Linkify>
          </div>
          <div className='illustration-container'>
            <iframe width="560"
               height="315" src={props.videoUrl}
               frameborder="0" allowFullScreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div>
        <div className='project-item'>
          <div className='item-description'>
            <h1>{props.title}</h1>
            <Linkify properties={{target: '_blank'}}>
              {parsedDescription}
            </Linkify>
          </div>
        </div>
      </div>
    )
  }
}

ProjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  videoUrl: PropTypes.string
}

module.exports = ProjectInfo;
