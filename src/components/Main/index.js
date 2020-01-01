import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';

import Content from '../Content/';
import TopicsBar from '../TopicsBar/';

import { resetError } from '../../store/actions/tweets';

import './style.css';

function Main() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.tweets.error);

  return (
    <Col xl={9} lg={11} xs={10} id="main" className="align-items-start">
      <Row className='w-100' noGutters={true}>
        <Content />
        <TopicsBar />
      </Row>
      {error &&
        <Toast
          delay={10000}
          onClose={dispatch.bind(this, resetError())}
          show={error}
          autohide
          style={{
            position: 'absolute',
            bottom: 20,
            right: 0,
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">Parece que algo deu errado T-T</strong>
          </Toast.Header>
          <Toast.Body>Por favor, tente novamente mais tarde. </Toast.Body>
        </Toast>
      }
    </Col>
  )
}

export default Main;

