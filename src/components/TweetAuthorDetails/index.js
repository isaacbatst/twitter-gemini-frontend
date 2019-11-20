import React from "react";

import "./style.css";

function TweetAuthorDetails(props) {
  return (
    <div className="tweetAuthorDetailsDiv">
      <span className="spanUsername">anon</span>
      <span className="spanNickname">@anon</span>
      <span className="spanHifen">-</span>
      <span className="spanTimeAgo">a few moments ago</span>
    </div>
  );
}

export default TweetAuthorDetails;
