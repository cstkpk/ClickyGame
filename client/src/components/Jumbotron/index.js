import React from "react";
import { Jumbotron } from 'react-bootstrap';

function Jumbo(props) {
    return(
        <Jumbotron className="bg-dark">
            <h1 className="text-center text-light">Welcome to the Clicky Game!</h1>
            <p className="text-center text-light">Score: {props.score} | Wins: {props.wins} | Losses: {props.losses}</p>
        </Jumbotron>
    );
}

export default Jumbo;