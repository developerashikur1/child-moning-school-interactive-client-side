import React from 'react';
import { Row } from 'react-bootstrap';
import useTeachers from '../../hooks/useTeachers';
import Teachers from '../Teachers/Teachers';

const About = () => {

    // created hooks
    const [teachers, setTeachers] = useTeachers([]);
    return (
        <div className="container my-5">
            <div className="services-name">
                <h1>Our Teachers</h1>
            </div>


            {/* teachers cards */}
            <Row xs={1} md={4} className="g-4">
            {
                teachers.map(teacher => <Teachers key={teacher.name} teacher={teacher}/>)
            }
            </Row>
        </div>
    );
};

export default About;