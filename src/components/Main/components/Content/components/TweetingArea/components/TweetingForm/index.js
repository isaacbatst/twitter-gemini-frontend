import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TweetingArea from "../..";

import "./style.css";

function TweetingForm() {
  return (
    <form>
      <input
        className="w-100"
        type="text"
        id="tweetInput"
        placeholder="O que está acontecendo?"
      />
      <Row className="w-100">
        <Col md={{ span: 3, offset: 10 }}>
          <Button type="input" size="lg" id="tweetSubmit">
            Tweetar
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default TweetingForm;
