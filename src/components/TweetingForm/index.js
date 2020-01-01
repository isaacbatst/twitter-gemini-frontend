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
    if(stringNotEmpty(inputValue) && isAddingTweet===false){
      setSubmitShouldBeDisabled(false)
    } else {
      setSubmitShouldBeDisabled(true);
    }
  }, [isAddingTweet, inputValue]);

  useEffect(() => {
    if(isAddingTweet===false){
      setInputValue("");
    }
  }, [isAddingTweet])

  function stringNotEmpty(string) {
    return string.length > 0;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(requestAddTweet(inputValue));
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="w-100"
        type="text"
        id="tweetInput"
        placeholder="O que está acontecendo?"
        value={inputValue}
        onChange={handleInputChange}
        required
      />
      <Row className="w-100">
        <Col md={{ span: 3, offset: 10 }}>
          <Button
            type="submit"
            size="lg"
            id="tweetSubmit"
            disabled={submitShouldBeDisabled}
          >
            Tweetar
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default TweetingForm;
