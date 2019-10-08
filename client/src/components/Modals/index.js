import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./style.css";

// Modal that shows when you: hit refresh, lose a round, win a round
function StatusModal(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header className="modal-bg" closeButton>
                <Modal.Title>{props.winStatus}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-bg">
                {/* <p>Isn't this fun?</p> */}
                <img className="mx-auto d-block" src={props.gif} alt="test"></img>
            </Modal.Body>

            <Modal.Footer className="modal-bg">
                <Button variant="dark" onClick={props.onClick} className="btn-block">{props.btnText}</Button>
            </Modal.Footer>
        </Modal>
    );
};

// Modal that shows up when you: win all levels of the game
function EndModal(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header className="modal-bg" closeButton>
                <Modal.Title>You've won the game!</Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-bg">
                {/* <p>You're a superstar!</p> */}
                <img className="mx-auto d-block" src={props.gif} alt="test"></img>
            </Modal.Body>

            <Modal.Footer className="modal-bg">
                <Button variant="dark" onClick={props.onClick} className="btn-block">Play Again!</Button>
            </Modal.Footer>
        </Modal>
    )
}

export {
     StatusModal,
     EndModal
};