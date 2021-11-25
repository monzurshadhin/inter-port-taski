import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';
const Courses = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('/courses.json')
        .then(res =>res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                    <div >
                    <h1 className="courses-title inter-font">Get the Professional <br /> Qualifications you are <br /> looking for</h1>
                </div>
                <p className="courses-details ibm-font">Interport Corporate Academy is also accredited by the Chartered Institute of Logistics and Transport (CILT), International (UK) to provide the globally recognized CILT International Diploma and Certificate courses in Logistics and Transport in Bangladesh.</p>
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-md-end align-items-md-end">
                        <div >
                        <button className="ibm-font enroll-button qualification-btn">VIEW ALL QUALIFICATIONS</button>
                        </div>
                    </div>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4 row-section">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Courses;