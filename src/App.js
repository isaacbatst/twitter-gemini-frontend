import React from "react";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Main from "./components/Main/";
import Sidebar from "./components/Sidebar/";

import { Provider } from "react-redux";
import store from "./store/";

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
