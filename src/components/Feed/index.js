import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import ExpandMore from "@material-ui/icons/ExpandMore";

import AvatarBar from "../AvatarBar";
import Tweet from "../Tweet";
import { requestLoadTweets } from "../../store/actions/tweets";

import Avatar from "../../static/avatar.jpg";
import "./style.css";

function Feed() {
  const tweets = useSelector(state => state.tweets.tweets);
  const loading = useSelector(state => state.tweets.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestLoadTweets());
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return tweets.map(tweet => {
    return (
      <div className="tweetDiv contentBlock" key={tweet.id}>
        <Row noGutters={true} className="tweetRow">
          <Col xs={1} className="pt-2">
            <AvatarBar avatar={Avatar} />
          </Col>
          <Col xs={11}>
            <Tweet tweet={tweet} />
          </Col>
        </Row>
      </div>
    );
  });
}

export default Feed;
