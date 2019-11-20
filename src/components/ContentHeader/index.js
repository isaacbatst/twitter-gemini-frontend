import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Star from "@material-ui/icons/Star";

import "./style.css";

function ContentHeader() {
  return (
    <Navbar bg="light" className="contentBlock contentHeader" >
      <Navbar.Brand className="mr-auto contentHeaderText">Página inicial</Navbar.Brand>
      <Star htmlColor	='#1da1f2'/>
    </Navbar>
  );
}

export default ContentHeader;
