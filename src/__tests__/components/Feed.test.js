import React from "react";
import { mount } from "../../enzyme";

import Feed from "../../components/Feed";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Tests feed component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      tweets: {
        tweets: [
          { id: 1, message: "Hello, testing", favorite: true },
          { id: 2, message: "Hello, world", favorite: true }
        ]
      }
    });
  });

  it("should render tweets list", () => {
    const { tweets: { tweets } } = store.getState();
    
    const wrapper = mount(
      <Provider store={store}>
        <Feed tweets={tweets} loading={false} />
      </Provider>
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("div.tweetDiv")).toHaveLength(tweets.length);
  });
  it("should render a 'no tweets' text", () => {
    const tweets = [];

    const wrapper = mount(
      <Provider store={store}>
        <Feed tweets={tweets} loading={false} />
      </Provider>
    );

    expect(wrapper.exists()).toBeTruthy();

    const noTweetsDiv = wrapper.find("#no-tweets-paragraph");
    expect(noTweetsDiv.text()).toEqual("Você ainda não tem tweets");
    expect(noTweetsDiv).toHaveLength(1);
  });
});
