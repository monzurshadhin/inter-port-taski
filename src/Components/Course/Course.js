import React from "react";
import { Card, Col } from "react-bootstrap";
import img3 from "../../images/date.png";
import img2 from "../../images/student.png";
import img1 from "../../images/time.png";
import './Course.css';

const Course = ({ course }) => {
  const { title, smallTitle, duration, students, date, price, deadline, img } =
    course;
  console.log(smallTitle);
  return (
    <Col>
      <Card className="course-card">
        <Card.Img className="course-image" variant="top" src={img} />
        <Card.Body>
            
            <p className="deadline ibm-font">
              <b>Deadline:</b> <br />
              {deadline}
            </p>
            <button className="registration-btn ibm-font">OPEN FOR REGISTRATION</button>
             
           
          <h6 className="small-title ibm-font">{smallTitle}</h6>
          <Card.Title className="title ibm-font">{title}</Card.Title>
          <div className="d-flex justify-content-between info">
            <div>
              <img src={img1} alt="" />
              <p className="ibm-font">{duration} Months</p>
            </div>
            <div>
              <img src={img2} alt="" />
              <p className="ibm-font">{students} Seats</p>
            </div>
            <div>
              <img src={img3} alt="" />
              <p className="ibm-font">{date}</p>
            </div>
          </div>
        </Card.Body>
        <div className="bottom-info">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="ibm-font course-fee">
              <b>Course Fee</b> <br />
              Tk. {price}
            </h6>

            <button className="ibm-font enroll-button">ENROLL NOW</button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Course;
