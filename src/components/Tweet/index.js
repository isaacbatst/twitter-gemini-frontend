import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ExpandMore from "@material-ui/icons/ExpandMore";

import TweetAuthorDetails from "../TweetAuthorDetails";
import TweetActions from "../TweetActions";

import "./style.css";

function TweetContent(props) {
  return (
    <div className="tweetContentDiv">
      <Row className="tweetContentRow" noGutters>
        <Col md={11}>
          <TweetAuthorDetails />
        </Col>
        <Col xs={1} className="text-center">
          <Button variant="light">
            <ExpandMore className="tweetMore" />
          </Button>
        </Col>
      </Row>
      <Row className="tweetContentRow">{props.tweet.message}</Row>
      <TweetActions tweet={props.tweet} />
    </div>
  );
}

export default TweetContent;
