import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

import AvatarBar from '../AvatarBar/index';

function TweetingArea(){
  return (
    <Row noGutters={true} className="px-2">
      <Col xs={1}><AvatarBar /></Col>
      <Col xs={10}>Tweet form</Col>
    </Row>
  )
}

export default TweetingArea;