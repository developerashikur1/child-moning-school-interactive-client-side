import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Blog.css';

class Blogs extends Component {
    render() {
        return (
            <div className="blog-container container">

                {/* blog */}
                <h2>Blogs</h2>
                <p>BGAB was set up in Comilla in 1995 under the control and management of the Ministry of Education. The construction of the main academic building was completed in 1995. Due to an acute shortage of infrastructure, another development project for construction of a new building was taken up in 1995 which was completed in two phases. The school commenced with only one shift (morning).</p>

                {/* blog image */}
                <Image src="https://thumbs.dreamstime.com/b/middle-school-building-20723831.jpg" alt="" fluid/>
            </div>
        );
    }
}

export default Blogs;