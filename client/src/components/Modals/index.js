import React from "react";
import { Modal, Button } from "react-bootstrap";

function StatusModal(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.winStatus}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Isn't this fun?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClick} className="btn-block">{props.btnText}</Button>
            </Modal.Footer>
        </Modal>
    );
};

function EndModal(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>You've won the game!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>You're a superstar!</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClick} className="btn-block">Start Over</Button>
            </Modal.Footer>
        </Modal>
    )
}

export {
     StatusModal,
     EndModal
};