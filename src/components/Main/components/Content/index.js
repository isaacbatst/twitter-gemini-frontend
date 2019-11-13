import React from "react";
import Col from "react-bootstrap/Col";

import ContentHeader from "./components/ContentHeader/";
import TweetingArea from "./components/TweetingArea/";
import GrayArea from './components/GrayArea/';
import Feed from './components/Feed/';

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
