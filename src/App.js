import React from "react";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Main from "./components/Main/index";
import Sidebar from "./components/Sidebar/index";

import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Row noGutters={true}>
            <Sidebar />
            <Main />
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
