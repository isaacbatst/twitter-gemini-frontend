import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";

import ContentHeader from "../ContentHeader";
import TweetingArea from "../TweetingArea";
import GrayArea from "../GrayArea";
import Feed from "../Feed";

import { requestLoadTweets } from "../../store/actions/tweets";

import "./style.css";

function Content() {
  const tweets = useSelector(state => state.tweets.tweets);
  const loading = useSelector(state => state.tweets.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestLoadTweets());
  }, []);

  return (
    <Col xs={12} lg={8}>
      <ContentHeader />
      <TweetingArea />
      <GrayArea />
      <Feed tweets={tweets} loading={loading} />
    </Col>
  );
}

export default Content;
