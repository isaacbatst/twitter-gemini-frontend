import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import Cached from "@material-ui/icons/Cached";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";

import "./style.css";

function TweetActions(props) {
  return (
    <Row noGutters id="tweetActionsRow">
      <Col>
        <Button variant="light">
          <ChatBubbleOutline />
        </Button>
      </Col>
      <Col>
        <Button variant="light">
          <Cached />
        </Button>
      </Col>
      <Col>
        <Button variant="light">
          {props.favorite ? <Favorite color='error'/> : <FavoriteBorder />}
        </Button>
      </Col>
      <Col>
        <Button variant="light">
          <Share />
        </Button>
      </Col>
    </Row>
  );
}

export default TweetActions;
