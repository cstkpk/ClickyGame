import React, { Component } from "react";
import DataCard from "./components/DataCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import data from "./data.json";

class App extends Component {
    // Setting this.state.data to the data json array
    state = {
      data
    };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        {this.state.data.map(data => (
          <DataCard
            // removeFriend={this.removeFriend}
            id={data.id}
            key={data.id}
            image={data.image}
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;