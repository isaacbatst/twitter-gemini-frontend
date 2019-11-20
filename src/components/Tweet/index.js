import React from 'react';
import Row from 'react-bootstrap/Row';

import TweetAuthorDetails from '../TweetAuthorDetails';
import TweetActions from '../TweetActions';

import './style.css';

function TweetContent(props){
  return (
    <div className="tweetContentDiv">
      <Row className="tweetContentRow">
        <TweetAuthorDetails />
      </Row>
      <Row className="tweetContentRow">{props.tweet.message}</Row>
      <TweetActions tweet={props.tweet} />
    </div>
  )
}

export default TweetContent;