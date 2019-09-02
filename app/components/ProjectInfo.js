import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';
import { Parser } from 'html-to-react';

export default function ProjectInfo(props) {
  var htmlToReactParser = new Parser();
  var parsedDescription = htmlToReactParser.parse(props.description);
  if (props.imageUrl) {
    return (
      <div className='project-item'>
        <div className='item-description'>
          <h1>{props.title}</h1>
          <Linkify
            className='project-description'
            properties={{ target: '_blank' }}
          >
            {parsedDescription}
          </Linkify>
        </div>
        <div className='illustration-container'>
          <img className='project-img' src={props.imageUrl} />
        </div>
      </div>
    );
  } else if (props.videoUrl) {
    return (
      <div className='project-item'>
        <div className='item-description'>
          <h1>{props.title}</h1>
          <Linkify
            className='project-description'
            properties={{ target: '_blank' }}
          >
            {parsedDescription}
          </Linkify>
        </div>
        <div className='illustration-container'>
          <iframe
            width='560'
            height='315'
            src={props.videoUrl}
            frameBorder='0'
            allowFullScreen={true}
            webkitallowfullscreen='true'
            mozallowfullscreen='true'
          ></iframe>
        </div>
      </div>
    );
  } else {
    return (
      <div className='project-item'>
        <div className='item-description'>
          <h1>{props.title}</h1>
          <Linkify
            className='project-description'
            properties={{ target: '_blank' }}
          >
            {parsedDescription}
          </Linkify>
        </div>
      </div>
    );
  }
}

ProjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  videoUrl: PropTypes.string
};
