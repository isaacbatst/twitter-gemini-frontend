import React from "react";
import "./App.css";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Main from "./components/Main/index";
import Sidebar from "./components/Sidebar/index";

function App() {
  return (
    <div className="App">
      <Container>
        <Row noGutters={true}>
          <Sidebar />
          <Main />
        </Row>
      </Container>
    </div>
  );
}

export default App;
