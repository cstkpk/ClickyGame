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
                <Button variant="secondary" onClick={props.onClick}>Play again!</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default StatusModal;