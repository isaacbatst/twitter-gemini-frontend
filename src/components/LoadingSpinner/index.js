import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default () => (
  <Spinner animation="border" role="status">
    <span className="sr-only">Carregando...</span>
  </Spinner>
);
