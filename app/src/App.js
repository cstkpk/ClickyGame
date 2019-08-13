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

    shuffleData = id => { // How to refer to the "clicked" property through id?
        // For the data with the selected id, set "clicked" boolean to true
        let data = this.state.data.clicked = true;
        console.log("Shuffling!");
        // Set this.state.friends equal to the new friends array
        this.setState({ data });
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
            shuffleData={this.shuffleData}
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;

// When user clicks an image, we want to trigger shuffleData(id);
// shuffleData will check the clicked image:
    // If the clicked image currently has a "clicked" boolean of false, it will change it to true and re-shuffle the images
    // If the clicked image currently has a "clicked" boolean of true, it will end/restart the game