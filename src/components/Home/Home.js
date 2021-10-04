import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const [services, setServices] = useServices([]);
    const sliceServices = services.slice(0, 4);
    return (
        <div>
            <div className="home-container">
                <h1 className="heading">Child Morning School</h1>
            </div>
            <div className="container my-5">
                <Row xs={1} md={4} className="g-4">
                {
                    sliceServices.map(service => <Service service={service}/>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Home;