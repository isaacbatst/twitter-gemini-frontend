import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { requestAddTweet } from "../../store/actions/tweets";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";

function TweetingForm() {
  const dispatch = useDispatch();
  const isAddingTweet = useSelector(state => state.tweets.isAddingTweet);

  const [inputValue, setInputValue] = useState("");
  const [submitShouldBeDisabled, setSubmitShouldBeDisabled] = useState(true);
  

  useEffect(() => {
    if(stringNotEmpty(inputValue)){
      setSubmitShouldBeDisabled(false);
    } else {
      setSubmitShouldBeDisabled(true);
    }
  }, [inputValue])

  useEffect(() => {
    if(isAddingTweet === true){
      setSubmitShouldBeDisabled(true);
    } else {
      const tweetInput = document.querySelector("#tweetInput");
      tweetInput.value = "";
      setSubmitShouldBeDisabled(false);
    }
  }, [isAddingTweet])

  function stringNotEmpty(string) {
    return string.match(/^\s+$/) === null;
  }

  function handleTweetButton(event) {
    event.preventDefault();

    const tweetInput = document.querySelector("#tweetInput");
    const tweetMessage = tweetInput.value;

    if (stringNotEmpty(tweetMessage)) {
      dispatch(requestAddTweet(tweetMessage));
    }
  }

  function handleInputChange(event){
    setInputValue(event.target.value);
  }

  return (
    <form>
      <input
        className="w-100"
        type="text"
        id="tweetInput"
        placeholder="O que está acontecendo?"
        onChange={handleInputChange}
      />
      <Row className="w-100">
        <Col md={{ span: 3, offset: 10 }}>
          <Button
            type="input"
            size="lg"
            id="tweetSubmit"
            disabled={submitShouldBeDisabled}
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
