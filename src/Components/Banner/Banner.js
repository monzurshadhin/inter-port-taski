import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="container banner-section">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="ibm-font banner-small-title">Professional Qualification Course</p>
                        <h1 className="inter-font banner-title">CILT International Certificate in Logistics and Transport</h1>
                        <p className="ibm-fonts date"><b>Registration Deadline:</b> 10 October, 2021</p>
                        <p className="ibm-fonts fee"><b>Course Fee:</b> Tk. 20,000</p>

                        <div className="btn-section">
                            <button className="enroll-btn  ibm-font">ENROLL NOW</button>
                            <button className="learn-btn  ibm-font">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6"></div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;