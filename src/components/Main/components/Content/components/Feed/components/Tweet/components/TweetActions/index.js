import React from "react";
import { useDispatch } from "react-redux";

import { requestUpdateTweet } from '../../../../../../../../../../store/actions/tweets';

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

  const dispatch = useDispatch();

  function handleFavoriteClick(){
    dispatch(requestUpdateTweet({
      ...props.tweet,
      favorite: !props.tweet.favorite
    }))
  }

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
        <Button variant="light" onClick={handleFavoriteClick}>
          {props.tweet.favorite ? <Favorite color='error'/> : <FavoriteBorder />}
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
