import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import AvatarBar from "../AvatarBar";
import Tweet from "../Tweet";
import TweetConfirmDelete from "../TweetConfirmDelete";
import LoadingSpinner from "../LoadingSpinner";

import Avatar from "../../static/avatar.jpg";

import "./style.css";

function Feed(props) {
  if (props.loading) {
    return <LoadingSpinner />;
  }
  return (
      props.tweets.length > 0 ? (
        <>
          <TweetConfirmDelete />
          {props.tweets.map(tweet => (
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
      ) : (
        <Container className="mt-3">
          <p className="text-center" id="no-tweets-paragraph">
            Você ainda não tem tweets
          </p>
        </Container>
      )
  );
}

export default Feed;
