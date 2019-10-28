import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AvatarBar from "../AvatarBar/index";
import TweetContent from "./components/TweetContent/index";

import "./style.css";

function Feed() {
  const tweets = [
    {
      id: 1,
      message: "Tweet tal",
      favorite: true,
      created_at: "",
      updated_at: ""
    },
    {
      id: 2,
      message: "Tweet tal2",
      favorite: true,
      created_at: "",
      updated_at: ""
    },
    {
      id: 3,
      message: "Tweet tal3",
      favorite: true,
      created_at: "",
      updated_at: ""
    }
  ];

  return tweets.map(tweet => {
    return (
      <Row noGutters={true} className="px-2" key={tweet.id}>
        <Col xs={1}>
          <AvatarBar />
        </Col>
        <Col xs={10}>
          <TweetContent tweet={tweet} />
        </Col>
      </Row>
    );
  });
}

export default Feed;
