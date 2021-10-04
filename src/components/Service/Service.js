import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {className, img, startingDate, fee, describe} = props.service;
    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{className}</Card.Title>
                    <Card.Text>
                        {describe.slice(0, 50)}
                    </Card.Text>
                    <Card.Title className="price">
                        $ {fee} / <small className="course">course</small>
                    </Card.Title>
                    </Card.Body>
                    <div className="d-grid mt-5">
                        <Button size="lg">
                            Enroll Now
                        </Button>
                    </div>
                </Card>
                </Col>
        </div>
    );
};

export default Service;