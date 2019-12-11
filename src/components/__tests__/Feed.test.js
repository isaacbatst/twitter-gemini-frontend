import React from 'react'
import { shallow } from '../../enzyme';

import Feed from '../Feed';

describe("Tests feed component", () => {
  it("should render tweets list", () => {
    const tweets = [
      { id: 1, message: "Hello, testing", favorite: false },
      { id: 2, message: "Hello, world", favorite: true }
    ];

    const wrapper = shallow(<Feed tweets={tweets} loading={true} />)
    
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("div.tweetDiv")).toHaveLength(tweets.length);  
  });
  it("should render a 'no tweets' text", () => {
    const tweets = [];

    const wrapper = shallow(<Feed tweets={tweets} loading={false} />)
    
    expect(wrapper.exists()).toBeTruthy();

    const noTweetsDiv = wrapper.find('#no-tweets-paragraph');
    expect(noTweetsDiv.text()).toEqual('Você ainda não tem tweets');
    expect(noTweetsDiv).toHaveLength(1);
  })
});