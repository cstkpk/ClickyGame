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

    shuffleArray = arr => {
        let i = arr.length - 1;
        while (i > 0) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i--;
        }
    }

    checkClicked = id => { // How to refer to the "clicked" property through id?
        // For the data with the selected id, set "clicked" boolean to true
        // console.log(this.state.data);
        console.log(id);
        var data = [...this.state.data];
        data.forEach(waffles => {
            // console.log(waffles);
            if (waffles.id === id) {
                if (!waffles.clicked) {
                    waffles.clicked = true;
                    console.log("HELLO");
                } else {
                    console.log("GAME OVER");
                }
            } 
        })
        this.shuffleArray(data);
        // Set this.state.data equal to the new data array
        this.setState({ data });
        console.log(this.state.data);
    };

  // Map over this.state.data and render a DataCard component for each data object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        {this.state.data.map(data => (
        //   console.log(data),
          <DataCard
            checkClicked={this.checkClicked}
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

// When user clicks an image, we want to trigger checkClicked(id);
// checkClicked will check the clicked image:
    // If the clicked image currently has a "clicked" boolean of false, it will change it to true and re-shuffle the images
    // If the clicked image currently has a "clicked" boolean of true, it will end/restart the game