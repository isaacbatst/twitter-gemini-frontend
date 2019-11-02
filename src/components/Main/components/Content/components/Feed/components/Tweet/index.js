import React from 'react';
import Row from 'react-bootstrap/Row';

import TweetAuthorDetails from './components/TweetAuthorDetails/index';
import TweetActions from './components/TweetActions/index';

import './style.css';

function TweetContent(props){
  return (
    <div className="tweetContentDiv">
      <Row className="tweetContentRow">
        <TweetAuthorDetails />
      </Row>
      <Row className="tweetContentRow">message</Row>
      <TweetActions favorite={props.favorite} />
    </div>
  )
}

export default TweetContent;