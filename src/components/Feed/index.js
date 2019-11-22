import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import AvatarBar from "../AvatarBar";
import Tweet from "../Tweet";
import TweetConfirmDelete from "../TweetConfirmDelete";
import LoadingSpinner from '../LoadingSpinner';

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
      <LoadingSpinner />
    );
  }
  return (
    <>
      <TweetConfirmDelete />
      {tweets.map(tweet => (
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
      ))}
    </>
  );
}

export default Feed;
