//movie-saga.test.js
import { put, call } from "redux-saga/effects";
import { fetchTweets } from "../../services/tweets";
import { requestLoadTweets } from "./tweets";
import { successLoadTweets, failureLoadTweets } from "../actions/tweets";

describe("tweets fetching process", () => {
  it("Fetches the tweets successfully when server is online", () => {
    const generator = requestLoadTweets();
    expect(generator.next().value).toEqual(call(fetchTweets));
  });

  it("Handles exception as expected", () => {
    const generator = requestLoadTweets();
    expect(generator.next().value).toEqual(call(fetchTweets));
    expect(generator.throw("error").value).toEqual(
      put(failureLoadTweets())
    );
  });
});
