import React from 'react';
import Row from 'react-bootstrap/Row';

import TweetAuthorDetails from './components/TweetAuthorDetails/index'

import './style.css';

function TweetContent(props){
  return (
    <div className="tweetContentDiv">
      <Row className="tweetContentRow">
        <TweetAuthorDetails />
      </Row>
      <Row className="tweetContentRow">message</Row>
      <Row className="tweetContentRow">actions</Row>
    </div>
  )
}

export default TweetContent;