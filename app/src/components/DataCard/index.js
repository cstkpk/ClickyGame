import React from "react";
import { Col, Card } from 'react-bootstrap';
import "./style.css";

function DataCard(props) {
  return (
    <Col sm={6} md={3}>
        <Card>
        <Card.Img alt={props.id} src={props.image} className="card-img" 
            onClick={() => props.checkClicked(props.id)}>
        </Card.Img>
        </Card>
    </Col>
  );
}

export default DataCard;