import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {

    // fake hooks
    const [courses, setCourses] = useCourses([])

    return (
        <div className="container my-5">
            <div className="services-name">
                <h1>All Courses</h1>
            </div>


            {/* cards of courses */}
            <Row xs={1} md={4} className="g-4">
            {
                courses.map(course => <Course key={course.className} course={course}/>)
            }
            </Row>
        </div>
    );
};

export default Courses;