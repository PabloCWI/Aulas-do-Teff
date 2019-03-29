import React, { Component } from "react";
// import styled from "styled-components";
// import TicTacToeComponent from "./components/tic-tac-toe/tic-tac-toe.component";
// import Counter from "./components/counter/counter.component";
import VoiceCard from "./components/voice-cards.component";

class App extends Component {
  render() {
    return (
      <div>
        <VoiceCard/>
      </div>
    );
  }
}

// const StyledContainer = styled.span`
//   color: greenyellow;
//   background-color: black;
//   .colorful {
//     color: royalblue;
//   }
// `;

export default App;
