import React, { Component } from "react";
import { Button, Container, Row } from 'react-bootstrap';
import DataCard from "./components/DataCard";
import Jumbo from "./components/Jumbotron";
import { StatusModal, EndModal } from "./components/Modals";
import data1 from "./data/data.json";
import data2 from "./data/data2.json";
import data3 from "./data/data3.json";
import data4 from "./data/data4.json";
import modalDefault1 from "./assets/images/carrot.gif";
import modalDefault2 from "./assets/images/win.gif";
import API from "./utils/API";

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
      showModalW: false,
      // Level state so that data arrays can be accessed in modalClose function via number of wins and set as the new data state
      level: [data1, data2, data3, data4],
      // GIPHY API results
      giphy: {}
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

    // Close status modal function
    modalClose = () => {
        if (this.state.winStatus === "Ding ding we have a winner!") {
            this.setState({
                showModal: false,
                // Setting new images for new level, using wins as the index of the level array
                data: this.state.level[this.state.wins]
            });
        }
        else {
            this.setState({
                showModal: false
            });
        };
    };
    // Close win modal function
    modalCloseW = () => {
        this.setState({
            showModalW: false,
            data: data1
        });
    };

    // Open status modal function
    modalOpen = () => {
        this.setState({
            showModal: true
        });
    };
    // Open win modal function
    modalOpenW = () => {
        this.setState({
            showModalW: true
        });
    };

    checkScore = () => {
        // If score is less than 11, basically do nothing
        if (this.state.score < 11) {
            this.setState({ wins: this.state.wins });
        // WINNER:
        // If score is 11 (meaning 12), the round has been won: reset stats and open modal
        } else {
            let data = [...this.state.data];
            data.forEach(waffles => {
                waffles.clicked = false;
            })
            // If number of wins is less than 3, continue to next round
            if (this.state.wins < 3) {
                this.setState({
                    wins: this.state.wins + 1,
                    score: 0,
                    winStatus: "Ding ding we have a winner!",
                    btnText: "Next level!"
                })
                this.findGIF("celebrate");
                this.modalOpen();
            }
            // If number of wins is 3 (meaning 4), the entire game has been won
            else {
                this.setState({
                    wins: 0,
                    losses: 0,
                    score: 0,
                })
                this.findGIF("win");
                this.modalOpenW();
            }
        };
    };

    checkClicked = id => { 
        // For the data with the selected id, set "clicked" boolean to true
        if (this.state.score < 12) {
            console.log(id);
            let data = [...this.state.data];
            data.forEach(waffles => {
                if (waffles.id === id) {
                    // If the image hasn't yet been clicked, add one to score and check for a winning score
                    if (!waffles.clicked) {
                        waffles.clicked = true;
                        this.setState({ score: this.state.score + 1 });
                        this.checkScore();
                    // GAME OVER:
                    // If image has already been clicked, game over: reset stats and open modal
                    } else {
                        let data = [...this.state.data];
                        data.forEach(waffles => {
                            waffles.clicked = false
                        })
                        this.setState({ 
                            score: 0,
                            losses: this.state.losses + 1,
                            winStatus: "Whomp whomp you lost",
                            btnText: "Try again!"
                        });
                        this.findGIF("sad");
                        this.modalOpen();
                    }
                } 
            })
            this.shuffleArray(data);
            // Set this.state.data equal to the new data array
            this.setState({ data });
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
            btnText: "Start over!",
            data: data1
        })
        const topicArr = ["carrots", "broccoli", "cucumber"]
        this.findGIF(topicArr[Math.floor(Math.random() * topicArr.length)]);
        this.modalOpen();
        // console.log(this.state.giphy);
        // console.log("*************");
        // console.log(this.state.giphy.url);
    };

    // N.B. The console logs above show an empty state until the second time the rest button is clicked
    // Have tried putting the console logs in a .then, but the same thing is happening there too, so maybe it's not an issue of asynchronicity?
    // *** HOWEVER *** the image url as state still passes properly to the modal as a prop and shows up on first click
    // ^^ I think this is just a weird React thing that happens with console.logs
    findGIF = (topic) => {
        API.search(topic)
            // N.B. I'm setting the state as the specific url because for some reason, I'm having trouble accessing any more than one layer into the giphy state I've set
            // ^^ No idea why. Need to look into this.
            // .then(res => this.setState({ giphy: res.data.data[0].images.fixed_height }))
            .then(res => this.setState({ giphy: res.data.data[Math.floor(Math.random() * 10)].images.fixed_height }))
            // .then(
            //     console.log(this.state.giphy),
            //     console.log("*************"),
            //     console.log(this.state.giphy.url)
            // )
            .catch(err => console.log(err));
    };

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
            className="btn-block mb-4"
            variant="dark"
            onClick={this.resetStats}
        >I quit!! Let's start the whole game over.</Button>
        <StatusModal 
            show={this.state.showModal}
            onHide={this.modalClose}
            onClick={this.modalClose}
            winStatus={this.state.winStatus}
            btnText={this.state.btnText}
            gif={this.state.giphy.url || modalDefault1}
        />
        <EndModal
            show={this.state.showModalW}
            onHide={this.modalCloseW}
            onClick={this.modalCloseW}
            gif={this.state.giphy.url || modalDefault2}
        />
      </Container>
    );
  }
};

export default App;