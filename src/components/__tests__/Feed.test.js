import React from 'react'
import { shallow } from '../../enzyme';

import Feed from '../Feed';

describe("Tests feed component", () => {
  it("should render tweets list", () => {
    const tweets = [
      { id: 1, message: "Hello, testing", favorite: false },
      { id: 2, message: "Hello, world", favorite: true }
    ];

    const wrapper = shallow(<Feed tweets={tweets} loading={false} />)
    console.log(wrapper.debug());

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("div.tweetDiv")).toHaveLength(tweets.length);  
  })
});