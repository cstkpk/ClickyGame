import React from "react";
import { Jumbotron } from 'react-bootstrap';

function Jumbo(props) {
    return(
        <Jumbotron>
            <h1 className="text-center">Welcome to the Clicky Game!</h1>
            <p className="text-right">Your score is: {props.score}</p>
            <p className="text-center">Your number of wins is: {props.wins}</p>
            <p className="text-left">Your number of losses is: {props.losses}</p>
        </Jumbotron>
    );
}

export default Jumbo;