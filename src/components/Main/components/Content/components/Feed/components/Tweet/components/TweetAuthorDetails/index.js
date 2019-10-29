import React from "react";

import "./style.css";

function TweetAuthorDetails(props) {
  return (
    <div>
      <span className="spanUsername">Username</span>
      <span className="spanNickname">@nickname</span>
      <span className="spanHifen">-</span>
      <span className="spanTimeAgo">a few moments ago</span>
    </div>
  );
}

export default TweetAuthorDetails;
