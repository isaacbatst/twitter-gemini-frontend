import React from "react";
import { shallow, mount } from "../../enzyme";

import Tweet from "../Tweet";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe("Tests tweet component", () => {
   let store;
   const tweet = { id: 1, message: "Hello, gemini", favorite: true };

   beforeEach(() => {
      store = mockStore({
        tweets: {
          tweets: [tweet],
          isUpdating: false,
          updatingTweetID: null
        }
      })
   })
  it("should render tweet with right props", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tweet tweet={tweet} />
      </Provider>
    );
    
    console.log(wrapper.debug())
    
    expect(wrapper.exists()).toBeTruthy();
    expect(
      wrapper
        .find("div.tweetMessageRow")
        .text()
    ).toEqual("Hello, gemini");
    
    expect(
      wrapper
        .find('.favorite-button ForwardRef')
        .prop('color')
    ).toEqual('error')
  });
});
