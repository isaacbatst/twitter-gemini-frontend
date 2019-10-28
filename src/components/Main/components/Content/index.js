import React from "react";
import Col from "react-bootstrap/Col";

import ContentHeader from "./components/ContentHeader/index";
import TweetingArea from "./components/TweetingArea/index";
import GrayArea from './components/GrayArea/index';
import Feed from './components/Feed/index';

function Content() {
  return (
    <Col xs={12} lg={8}>
      <ContentHeader />
      <TweetingArea />
      <GrayArea />
      <Feed />
    </Col>
  );
}

export default Content;
