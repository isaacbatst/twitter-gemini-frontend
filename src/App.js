import React from "react";
import "./App.css";

import Row from "react-bootstrap/Row";

import Main from "./components/Main/";
import Sidebar from "./components/Sidebar/";

import { Provider } from "react-redux";
import store from "./store/";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Row noGutters={true} className="container" id="app-container-row">
          <Sidebar />
          <Main />
        </Row>
      </div>
    </Provider>
  );
}

export default App;
