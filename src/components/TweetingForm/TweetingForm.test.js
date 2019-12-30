import React from "react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from "enzyme";
import TweetingForm from ".";
import { createTweet } from '../../services/tweets';
import { INITIAL_STATE } from '../../store/reducers/tweets';
const mockStore = configureStore([]);

jest.mock('../../services/tweets', () => ({
  createTweet: jest.fn().mockResolvedValue({}),
}));

describe("Tests tweeting form", () => {
  let store;
  const tweet = {
    message: "Hello, gemini",
    favorite: false
  };

  beforeEach(() => {
    store = mockStore({
      tweets: INITIAL_STATE
    })
  })

  it("should call add tweet with message", () => {
    const wrapper = mount(
      <Provider store={store}>
        <TweetingForm />
      </Provider>
    );

    wrapper.find('#tweetInput').simulate('change', {
      target: {
        value: tweet.message,
      },
    });

    wrapper.find('form').simulate('submit');

    expect(createTweet).toBeCalledWith(tweet)
  });
});
