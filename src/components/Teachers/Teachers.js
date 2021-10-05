import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Teachers.css';

const Teachers = (props) => {
    const {name, img, position} = props.teacher;
    console.log(name)
    return (

        // teachers cars section
        <div>
            <Col>
                <Card>
                    <div className="teacher-card">

                    {/* card image section */}
                    <Card.Img className="teacher-img" variant="top" src={img} />
                    </div>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-3">
                        {position}
                    </Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Teachers;