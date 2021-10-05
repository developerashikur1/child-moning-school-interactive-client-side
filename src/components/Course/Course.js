import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    // course destructuring
    const {className, img, startingDate, fee, describe} = props.course;

    return (
        <div>
            <Col>

            {/* cards */}
                <Card className="card">

                    {/* card image */}
                    <div className="course-image">
                    <Card.Img variant="top" src={img} />
                    </div>

                    {/* card body */}
                    <Card.Body>
                    <Card.Title>{className}</Card.Title>
                    <Card.Text>
                        {describe.slice(0, 50)}
                    </Card.Text>
                    <Card.Subtitle className="mb-3">
                        Starting Date: {startingDate}
                    </Card.Subtitle>
                    <Card.Title className="price">
                        $ {fee} / <small className="course">course</small>
                    </Card.Title>
                    </Card.Body>

                    {/* card button */}
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

export default Course;