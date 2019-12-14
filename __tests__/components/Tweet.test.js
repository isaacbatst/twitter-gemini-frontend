import React from "react";
import { shallow, mount } from "../../src/enzyme";

import Tweet from "../../src/components/Tweet";
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
        }
      })
   })
   
  it("should render tweet with right props", () => {
    const wrapper = mount(
      <Provider store={1}>
        <Tweet tweet={tweet} />
      </Provider>
    );
    
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
