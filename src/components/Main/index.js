import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Content from './components/Content/';
import TopicsBar from './components/TopicsBar/';

import './style.css';

function Main(){
  return (
  <Col xl={9} lg={11} xs={10} id="main" className="align-items-start">
    <Row className='w-100' noGutters={true}>
      <Content />
      <TopicsBar />
    </Row>
  </Col>
  )
}

export default Main;

