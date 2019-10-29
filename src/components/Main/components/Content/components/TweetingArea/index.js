import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

import AvatarBar from '../AvatarBar/index';

import Avatar from '../../../../../../static/avatar.png';

function TweetingArea(){
  return (
    <Row noGutters={true} className="contentBlock tweetingArea">
      <Col xs={1}><AvatarBar avatar={Avatar} /></Col>
      <Col xs={10}>Tweet form<br/>form form</Col>
    </Row>
  )
}

export default TweetingArea;