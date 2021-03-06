import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestUpdateTweet } from "../../store/actions/tweets";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import Cached from "@material-ui/icons/Cached";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";

import "./style.css";

function TweetActions(props) {
  const dispatch = useDispatch();

  const isUpdating = useSelector(state => state.tweets.isUpdating);
  const updatingTweetID = useSelector(state => state.tweets.updatingTweetID);

  const [thisTweetIsUpdating, setThisTweetIsUpdating] = useState(false);

  useEffect(() => {
    if (props.tweet.id === updatingTweetID) {
      setThisTweetIsUpdating(true);
    } else {
      setThisTweetIsUpdating(false);
    }
  }, [isUpdating]);


  function handleFavoriteClick() {
    dispatch(
      requestUpdateTweet({
        ...props.tweet,
        favorite: !props.tweet.favorite
      })
    );
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
        <Button variant="light" className="favorite-button" onClick={handleFavoriteClick}>
          {thisTweetIsUpdating ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : props.tweet.favorite ? (
            <Favorite color="error" />
          ) : (
            <FavoriteBorder />
          )}
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
