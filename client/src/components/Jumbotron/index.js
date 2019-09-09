import React from "react";
import { Jumbotron } from 'react-bootstrap';

function Jumbo(props) {
    return(
        <Jumbotron>
            <h1 className="text-center">Welcome to the Clicky Game!</h1>
            <p className="text-center">Score: {props.score} | Wins: {props.wins} | Losses: {props.losses}</p>
        </Jumbotron>
    );
}

export default Jumbo;