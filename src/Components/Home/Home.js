import React from "react";
import "./home.css";
import { Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBookOpenReader,
  faDiagramProject,
  faEnvelope,
  faLaptopCode,
  faLightbulb,
  faLink,
  faLocationDot,
  faPhone,
  faPhoneVolume,
  faShieldHalved,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const img = require("../../image/myimg.jpg");
  return (
    <>
      <Flex className="main-flex" vertical justify="center" align="center">
        <div className="main">
          <div className="title-out">
            <div className="round-div">
              <img className="img" src={img} />
            </div>
            <Flex
              className="title-div"
              vertical
              justify="center"
              align="center"
            >
              <div className="title" style={{color:"rgb(247, 231, 206)"}}>PRAVEENKUMAR K</div>
              <div className="sub-title" style={{color:"rgb(247, 231, 206)"}}>FRONTEND DEVELOPER</div>
            </Flex>
          </div>
          <div className="object-out">
            <div style={{ lineHeight: "2" }}>
              <div className="names">
                <FontAwesomeIcon icon={faLightbulb} className="icon" />{" "}
                OBJECTIVES
              </div>
              <div className="line"></div>
            </div>
            <div className="object">
              Seeking a challenging role in a reputable organization to utilize
              my technical, database, and management skills for the growth of
              the organization as well as to enhance my knowledge about new and
              emerging trends in the IT sector.
            </div>
          </div>
          <div className="spical-out">
            <div style={{ lineHeight: "2" }}>
              <div className="names">
                <FontAwesomeIcon icon={faShieldHalved} className="icon" />{" "}
                SPECIALISATIONS
              </div>
              <div className="line"></div>
            </div>
            <div className="spical">
              <div className="spical-flex">
                <div className="program">
                  <div className="sub-name">PROGRAMMING LANGUAGE</div>
                  <div
                    style={{ textIndent: "50px", marginTop: "0.5vh" }}
                    className="sub-list"
                  >
                    <li>Java</li>
                  </div>
                </div>
                <div className="web">
                  <div className="sub-name">WEB LANGUAGE</div>
                  <div
                    style={{ textIndent: "50px", marginTop: "0.5vh" }}
                    className="sub-list"
                  >
                    <li>HTML & CSS</li>
                    <li>Java Script</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="spical">
              <div className="spical-flex">
                <div className="program">
                  <div className="sub-name">DATABASE SOFTWARE</div>
                  <div
                    style={{ textIndent: "50px", marginTop: "0.5vh" }}
                    className="sub-list"
                  >
                    <li>SQL & Mysql</li>
                  </div>
                </div>
                <div className="web">
                  <div className="sub-name">FRAMEWORKS</div>
                  <div
                    style={{ textIndent: "50px", marginTop: "0.5vh" }}
                    className="sub-list"
                  >
                    <li>React js</li>
                    <li>Flutter</li>
                    <li>Spring Boot</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="spicals">
              <div className="webs">
                <div className="sub-name">DEVELOPMENT PLATFORM</div>
                <div
                  style={{ textIndent: "50px", marginTop: "0.5vh" }}
                  className="sub-list"
                >
                  <li>GitHub</li>
                </div>
              </div>
            </div>
          </div>
          <div className="object-out">
            <div style={{ lineHeight: "2" }}>
              <div className="names">
                <FontAwesomeIcon icon={faUserGraduate} className="icon" />{" "}
                ACADEMIC
              </div>
              <div className="line"></div>
            </div>
            <div className="edu">
              <Flex>
                <div className="degree">
                  Pentagon Space Institute, Bangalore.
                </div>
                <div className="year">2022</div>
              </Flex>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                Course - Java Full Stack
              </div>
            </div>
            <div className="edu">
              <Flex>
                <div className="degree">
                  Anna University Regional Campus, Madurai
                  <span className="did"> - UG</span>
                </div>
                <div className="year">2018-2022</div>
              </Flex>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                B.E - Computer Science and Engineering
              </div>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                CGPA : 7.76
              </div>
            </div>
            <div className="edu">
              <Flex>
                <div className="degree">
                  Vaagai Vidhyalaya Matric Hr. Sec. School, H.Pudupatti
                  <span className="did"> - HSC</span>
                </div>
                <div className="year">2017-2018</div>
              </Flex>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                Higher Secondary Certificate.
              </div>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                SCORE: 81%
              </div>
            </div>
            <div className="edu">
              <Flex>
                <div className="degree">
                  Jayam Vidhyalaya Matric Hr. Sec. School, Harur
                  <span className="did"> - SSLC</span>
                </div>
                <div className="year">2015-2016</div>
              </Flex>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                Secondary School Leaving Certificate.
              </div>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                SCORE: 91%
              </div>
            </div>
          </div>
          <div className="object-out">
            <div style={{ lineHeight: "2" }}>
              <div className="names">
                <FontAwesomeIcon icon={faLaptopCode} className="icon" /> WORK
                EXPERIENCE
              </div>
              <div className="line"></div>
            </div>
            <div className="edu">
              <Flex>
                <div className="work-title">
                  National Informatic Center
                  <span className="work-sub"> (INTERNSHIP)</span>
                </div>
                <div className="work-year">AUG 2021 – OCT 2021</div>
              </Flex>
              <div className="roll">
                ROLL : <span className="roll-name">FRONTEND DEVELOPER</span>
              </div>
              <div className="work-contant">
                <li>Develop Web Application by using Codeigniter framework.</li>
                <li>
                  Collaborate with a team of developers to develop the
                  responsive web Application.
                </li>
                <li>
                  Here we can develop as part of the government web App to
                  create User interactive UI pages.
                </li>
              </div>
            </div>
          </div>
          <div className="object-out">
            <div style={{ lineHeight: "2" }}>
              <div className="names">
                <FontAwesomeIcon icon={faDiagramProject} className="icon" />{" "}
                PROJECTS
              </div>
              <div className="line"></div>
            </div>
            <div className="edu">
              <Flex>
                <div className="work-title">
                  DSC MANAGEMENT SYSTEM
                  <span className="work-sub"> (INTERNSHIP PROJECT)</span>
                </div>
              </Flex>
              <div className="work-contant">
                <li>
                  This project was built by using codeigniter framework and it
                  was provided by the National informatic center.
                </li>
                <li>
                  The main aim of this project is to handle the creation of
                  digital certificates by VAO or Tahsildar digital signature
                  verification. After the digital verification, those
                  certificates are forwarded to respected users or e-sevai
                  centers.
                </li>
              </div>
            </div>
            <div className="edu">
              <Flex>
                <div className="work-title">
                  SMART DASHBOARD SYSTEM
                  <span className="work-sub"> (FINAL YEAR PROJECT)</span>
                </div>
              </Flex>
              <div className="work-contant">
                <li>
                  And my final year project was done in web development by using
                  MEAN stack.
                </li>
                <li>
                  The main aim of this project is to handle these resources
                  efficiently in such a way that both the staff and Students get
                  satisfied with a hassle free experience.
                </li>
                <li>
                  The proposed project does this by generating college Preferred
                  Modules Like Departments and Corresponding Managements and
                  also deploying roles to handle them and maintain hierarchy and
                  reduce management conflicts. ( Kind of college management by
                  using Secure Authorization Token)
                </li>
              </div>
            </div>
            <div className="object-out">
              <div style={{ lineHeight: "2" }}>
                <div className="names">
                  <FontAwesomeIcon icon={faPhoneVolume} className="icon" />{" "}
                  CONTACT
                </div>
                <div className="line"></div>
              </div>
              <div className="contact">
                <div className="contact-flex">
                  <div className="cont1">
                    <a
                      className="cont-link"
                      href="mailto:praveenkrishh01@gmail.com"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="icons" />{" "}
                      praveenkrishh01@gmail.com
                    </a>
                  </div>
                  <div className="cont1">
                    <div className="cont-name">
                      <FontAwesomeIcon icon={faPhone} className="icons" /> +91
                      9486072204
                    </div>
                  </div>
                </div>
                <div className="contact-flex">
                  <div className="cont1">
                    <a
                      className="cont-link"
                      href="https://www.linkedin.com/in/praveenkumar-k-09b1b1219"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="icons" />{" "}
                      praveenkumar-k-09b1b1219
                    </a>
                  </div>
                  <div className="cont1">
                    <a
                      className="cont-link"
                      href="https://github.com/Praveenkumark17"
                    >
                      <FontAwesomeIcon icon={faGithub} className="icons" />{" "}
                      Praveenkumark17
                    </a>
                  </div>
                </div>
                <div className="contact-flex">
                  <div className="cont2">
                    <div className="cont-name">
                      <FontAwesomeIcon icon={faLocationDot} className="icons" />{" "}
                      Harur, Dharmapuri, Tamil Nadu - 636903
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
}

export default Home;
