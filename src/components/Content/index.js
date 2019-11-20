import React from "react";
import Col from "react-bootstrap/Col";

import ContentHeader from "../ContentHeader";
import TweetingArea from "../TweetingArea";
import GrayArea from '../GrayArea';
import Feed from '../Feed';

import './style.css';

function Content() {
  return (
    <Col xs={12} lg={8}>
      <ContentHeader />
      <TweetingArea />
      <GrayArea  />
      <Feed />
    </Col>
  );
}

export default Content;
