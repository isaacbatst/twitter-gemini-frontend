import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Star from "@material-ui/icons/Star";

import "./style.css";

function ContentHeader() {
  return (
    <Navbar bg="dark" className="contentBlock contentHeader" >
      <Navbar.Brand className="mr-auto contentHeaderText">Página inicial</Navbar.Brand>
      <Star />
    </Navbar>
  );
}

export default ContentHeader;
