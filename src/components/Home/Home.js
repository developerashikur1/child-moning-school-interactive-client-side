import React from 'react';
import { ButtonGroup, Row, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {

    // fake hooks
    const [courses, setCourses] = useCourses([]);
    const sliceCourses = courses.slice(0, 4);

    // use of react history hooks
    const history = useHistory();

    const handleCourse = () => {
        history.push('/courses')   
    }


    return (

        // home section
        <div>

            {/* home first section */}
            <div className="home-container">
                <h1 className="heading">Child Morning School</h1>
            </div>

            {/* home second section */}
            <div className="container my-5">
                <Row xs={1} md={4} className="g-4">
                {
                    sliceCourses.map(course => <Course course={course}/>)
                }
                </Row>
            </div>

            {/* home third section for button */}
            <div className="more-btn">
                <Button onClick={()=>handleCourse()}>More Courses</Button>
            </div>
        </div>
    );
};

export default Home;