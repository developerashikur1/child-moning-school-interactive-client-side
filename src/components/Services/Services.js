import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useServices([])

    return (
        <div className="container my-5">
            <Row xs={1} md={4} className="g-4">
            {
                services.map(service => <Service service={service}/>)
            }
            </Row>
        </div>
    );
};

export default Services;