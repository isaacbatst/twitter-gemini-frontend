import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { addTweet } from "../../../../../../../../store/actions/tweets";
import { useDispatch } from "react-redux";

import "./style.css";

function TweetingForm() {
  const dispatch = useDispatch();

  function handleTweetButton(event) {
    event.preventDefault();
    dispatch(
      addTweet({
        id: Math.random(),
        message: "Novo",
        favorite: false
      })
    );
  }

  return (
    <form>
      <input
        className="w-100"
        type="text"
        id="tweetInput"
        placeholder="O que está acontecendo?"
      />
      <Row className="w-100">
        <Col md={{ span: 3, offset: 10 }}>
          <Button
            type="input"
            size="lg"
            id="tweetSubmit"
            onClick={handleTweetButton}
          >
            Tweetar
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default TweetingForm;
