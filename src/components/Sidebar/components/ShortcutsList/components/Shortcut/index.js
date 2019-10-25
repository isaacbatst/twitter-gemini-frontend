import React from "react";
import Image from "react-bootstrap/Image";

import "./style.css";

function Shortcut(props) {
  return (
    <li className="py-2">
      <Image width={26} src={props.shortcut.logo} />
      <span className="mx-4">{props.shortcut.label}</span>
    </li>
  );
}

export default Shortcut;
