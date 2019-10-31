import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AvatarBar from "../AvatarBar/index";
import Tweet from "./components/Tweet/index";

import Avatar from "../../../../../../static/avatar.jpg";

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
      <div className="tweetDiv contentBlock" key={tweet.id}> 
        <Row noGutters={true} className="tweetRow" >
          <Col xs={1} className="pt-2">
            <AvatarBar avatar={Avatar} />
          </Col>
          <Col xs={10}>
            <Tweet tweet={tweet} />
          </Col>
        </Row>
      </div>
    );
  });
}

export default Feed;
