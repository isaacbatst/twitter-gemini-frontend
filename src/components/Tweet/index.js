import React from "react";
import { useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import ExpandMore from "@material-ui/icons/ExpandMore";

import TweetAuthorDetails from "../TweetAuthorDetails";
import TweetActions from "../TweetActions";

import "./style.css";
import TweetConfirmDelete from "../TweetConfirmDelete";
import { showTweetConfirmDelete } from "../../store/actions/modals";

function TweetContent(props) {
  const dispatch = useDispatch();

  function handleDeleteTweet(event) {
    dispatch(showTweetConfirmDelete());
  }

  return (
    <div className="tweetContentDiv">
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
      <Row className="tweetContentRow">{props.tweet.message}</Row>
      <TweetActions tweet={props.tweet} />
      <TweetConfirmDelete idTweet={props.tweet.id} />
    </div>
  );
}

export default TweetContent;
