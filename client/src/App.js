import React, { Component } from "react";
import { Button, Container, Row } from 'react-bootstrap';
import DataCard from "./components/DataCard";
import Jumbo from "./components/Jumbotron";
import StatusModal from "./components/Modals";
import data1 from "./data/data.json";
import data2 from "./data/data2.json";
import data3 from "./data/data3.json";
import data4 from "./data/data4.json";

class App extends Component {
    // Setting this.state.data to the data json array
    state = {
      data: data1,
      score: 0,
      wins: 0,
      losses: 0,
      winStatus: "",
      btnText: "",
      showModal: false,
      // Level state so that data arrays can be accessed in modalClose function via number of wins and set as the new data state
      // TODO: Need to figure out last level:
        // As of now, React throws an error after you win round 4 because the array ends and it has no data to display
      level: [data1, data2, data3, data4] 
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

    // Close modal function
    modalClose = () => {
        if (this.state.winStatus === "Ding ding we have a winner!") {
            this.setState({
                showModal: false,
                // Setting new images for new level, using wins as the index of the level array
                // TODO: (Continued from above):
                    // Option 1: Set a conditional so that if the number of wins exceeds the length of the levels array, display something else?
                    // Option 2: Change the effect of clicking/closing the modal 
                data: this.state.level[this.state.wins]
            });
        }
        else {
            this.setState({
                showModal: false
            });
        };
    };
    // Open modal function
    modalOpen = () => {
        this.setState({
            showModal: true
        });
    };

    checkScore = () => {
        if (this.state.score < 11) {
            this.setState({ wins: this.state.wins });
        } else {
            console.log("You win!");
            let data = [...this.state.data];
            data.forEach(waffles => {
                waffles.clicked = false;
            })
            this.setState({
                wins: this.state.wins + 1,
                score: 0,
                winStatus: "Ding ding we have a winner!",
                btnText: "Next level!"
            })
            console.log("Winner!");
            console.log(this.state.data);
            this.modalOpen();
        };
    };

    checkClicked = id => { 
        // For the data with the selected id, set "clicked" boolean to true
        if (this.state.score < 12) {
            console.log(id);
            let data = [...this.state.data];
            data.forEach(waffles => {
                if (waffles.id === id) {
                    if (!waffles.clicked) {
                        waffles.clicked = true;
                        console.log("Got one!");
                        this.setState({ score: this.state.score + 1 });
                        this.checkScore();
                    } else {
                        console.log("GAME OVER");
                        let data = [...this.state.data];
                        data.forEach(waffles => {
                            waffles.clicked = false
                        })
                        this.setState({ 
                            score: 0,
                            losses: this.state.losses + 1,
                            winStatus: "Whomp whomp you lost",
                            btnText: "Try again!"
                            // data
                        });
                        console.log(this.state.data);
                        this.modalOpen();
                    }
                } 
            })
            this.shuffleArray(data);
            // Set this.state.data equal to the new data array
            this.setState({ data });
            console.log(this.state.data);
        }
        if (this.state.score === 12) { 
            this.setState({ wins: this.state.wins + 1 });
        }
    };

    resetStats = () => {
        let data = [...this.state.data];
        data.forEach(waffles => {
            waffles.clicked = false
        })
        this.setState({
            wins: 0,
            score: 0,
            losses: 0,
            winStatus: "Clean slate for you!",
            data
        })
        this.modalOpen();
        console.log(this.state.data);
    }
    

  // Map over this.state.data and render a DataCard component for each data object
  render() {
    return (
      <Container fluid={false}>
        <Jumbo 
        score={this.state.score}
        wins={this.state.wins}
        losses={this.state.losses}
        />
        <Row>
        {this.state.data.map(data => (
            <DataCard
            checkClicked={this.checkClicked}
            id={data.id}
            key={data.id}
            image={data.image}
            />
        ))}
        </Row>
        <Button
        onClick={this.resetStats}
        >I quit!! Reset my stats.</Button>
        <StatusModal 
        show={this.state.showModal}
        onHide={this.modalClose}
        onClick={this.modalClose}
        winStatus={this.state.winStatus}
        btnText={this.state.btnText}
        />
      </Container>
    );
  }
};

export default App;