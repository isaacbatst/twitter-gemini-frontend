import React from "react";
import { Provider } from "react-redux";

import { mount } from "../../enzyme";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';

import Feed from "../../components/Feed";

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
    const { tweets: { tweets, isLoading } } = store.getState();
    
    const wrapper = renderer.create(
      <Provider store={store}>
        <Feed tweets={tweets} loading={false} />
      </Provider>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it("should render a 'no tweets' text", () => {
    const tweets = [];

    const wrapper = renderer.create(
      <Provider store={store}>
        <Feed tweets={tweets} loading={false} />
      </Provider>
    );
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("should render a loading feed", () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <Feed tweets={[]} loading={true} />
      </Provider>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  })
});
