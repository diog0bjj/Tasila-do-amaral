import React, { Component } from "react";

import Header from "./Components/Hearder.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import styled from 'styled-components';

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
