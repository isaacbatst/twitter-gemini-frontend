import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./style.css";

import AvatarBar from "../AvatarBar/index";
import TweetingForm from "./components/TweetingForm/index";
import Avatar from "../../../../../../static/avatar.jpg";

function TweetingArea() {
  return (
    <Row noGutters={true} className="contentBlock tweetingArea">
      <Col xs={1}>
        <AvatarBar avatar={Avatar} />
      </Col>
      <Col xs={10} className='ml-2'>
        <TweetingForm />
      </Col>
    </Row>
  );
}

export default TweetingArea;
