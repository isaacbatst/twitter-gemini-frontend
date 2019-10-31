import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

import AvatarBar from '../AvatarBar/index';

import Avatar from '../../../../../../static/avatar.jpg';

function TweetingArea(){
  return (
    <Row noGutters={true} className="contentBlock tweetingArea">
      <Col xs={1}><AvatarBar avatar={Avatar} /></Col>
      <Col xs={10}>O que está acontecendo?<br/>Tweetar</Col>
    </Row>
  )
}

export default TweetingArea;