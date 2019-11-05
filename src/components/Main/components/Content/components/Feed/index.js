import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AvatarBar from "../AvatarBar/index";
import Tweet from "./components/Tweet/index";

import { requestLoadTweets } from "../../../../../../store/actions/tweets";

import Avatar from "../../../../../../static/avatar.jpg";
import "./style.css";

function Feed() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(requestLoadTweets())
  }, []);
  
  const tweets = useSelector(state => state.tweets.tweets);

  return tweets.map(tweet => {
    return (
      <div className="tweetDiv contentBlock" key={tweet.id}> 
        <Row noGutters={true} className="tweetRow" >
          <Col xs={1} className="pt-2">
            <AvatarBar avatar={Avatar} />
          </Col>
          <Col xs={10}>
            <Tweet tweet={tweet}/>
          </Col>
        </Row>
      </div>
    );
  });
}

export default Feed;
