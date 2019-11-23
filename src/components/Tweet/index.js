import React from "react";
import { useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import ExpandMore from "@material-ui/icons/ExpandMore";

import TweetAuthorDetails from "../TweetAuthorDetails";
import TweetActions from "../TweetActions";

import { showTweetConfirmDelete } from "../../store/actions/tweets";

import "./style.css";

function TweetContent(props) {
  const dispatch = useDispatch();

  function handleDeleteTweet() {
    dispatch(showTweetConfirmDelete(props.tweet.id));
  }

  return (
    <div className="tweetContentDiv" idtweet={props.tweet.id}>
      <Row className="tweetContentRow" noGutters>
        <Col md={11}>
          <TweetAuthorDetails />
        </Col>
        <Col xs={1} className="text-center">
          <Dropdown>
            <Dropdown.Toggle as={ExpandMore} id="bg-vertical-dropdown-2" />
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleDeleteTweet}>
                Excluir tweet
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="tweetContentRow tweetMessageRow">{props.tweet.message}</Row>
      <TweetActions tweet={props.tweet} />
    </div>
  );
}

export default TweetContent;
