import React from "react";
import insta from "../../images/001-instagram.png";
import basaa from "../../images/BSAA.png";
import mail from "../../images/envelop.png";
import facebook from "../../images/fb.png";
import mark from "../../images/location.png";
import phone from "../../images/phone.png";
import twt from "../../images/twitter.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-6">
                <img className="footer-img" src={basaa} alt="" />
                <div className="social-link">
                  <img src={facebook} alt="" />
                  <img src={insta} alt="" />
                  <img src={twt} alt="" />
                </div>

                <div className="footer-info">
                  <a href="/">About Us</a>
                  <a href="/">Our Members</a>
                  <a href="/">Berthing Report</a>
                  <a href="/">Careers</a>
                  <a href="/">Links</a>
                  <a href="/">Contact Us</a>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="address-section mb-5">
                  <h4>Chattogram</h4>
                  <p>
                    <div>
                      <img src={mark} alt="" />
                    </div>
                    <div>
                    Chamber House (2nd floor), 38 Agrabad C/A, Chattogram-4100, Bangladesh
                    </div>
                  </p>
                  <p>
                    <div>
                      <img src={phone} alt="" />
                    </div>{" "}
                    <div>031-723393</div>
                  </p>
                  <p>
                    <div>
                      <img src={mail} alt="" />
                    </div>{" "}
                    <div>bsaa@bbts.net</div>
                  </p>
                </div>
                <div className="address-section">
                  <h4>Khulna</h4>
                  <p>
                    <div>
                      <img src={mark} alt="" />
                    </div>
                    <div>
                      Ansari Complex (2nd Floor) 160, Sher-e-Bangla Road,
                      Khulna, Bangladesh
                    </div>
                  </p>
                  <p>
                    <div>
                      <img src={phone} alt="" />
                    </div>{" "}
                    <div>041-720886</div>
                  </p>
                  <p>
                    <div>
                      <img src={mail} alt="" />
                    </div>{" "}
                    <div>bsaa.khulna@gmail.com</div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
              <h3 className="ibm-font form-title">Get In Touch</h3>
              <form action="">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email"/>
                  <input type="text" placeholder="Subject" />
                  <textarea name="" id="" placeholder="Your Message" cols="" rows="6"></textarea>
                  <div className="d-flex justify-content-end ">
                      <button className="send-btn ibm-font">SEND MESSAGE</button>
                  </div>
              </form>
          </div>
        </div>
        <div className="footer-bottom">
            <p className="text-center"><i className="far fa-copyright"></i> Copyright 2020-2021 .</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
