import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { requestAddTweet } from "../../store/actions/tweets";
import { useDispatch } from "react-redux";

import "./style.css";

function TweetingForm() {
  const dispatch = useDispatch();

  function stringNotEmpty(string) {
    return string.match(/^\s+$/) === null;
  }

  function handleTweetButton(event) {
    event.preventDefault();

    const tweetInput = document.querySelector("#tweetInput");
    const tweetMessage = tweetInput.value;

    if (stringNotEmpty(tweetMessage)) {
      tweetInput.value = "";
      dispatch(requestAddTweet(tweetMessage));
    }
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
