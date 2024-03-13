import React from "react";
import "./home.css";
import { Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faLaptopCode,
  faLightbulb,
  faShieldHalved,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const img = require('../../image/myimg.jpg')
  return (
    <>
      <Flex className="main-flex" vertical justify="center" align="center">
        <div className="main">
          <div className="title-out">
            <div className="round-div"><img className="img" src={img}/></div>
            <Flex
              className="title-div"
              vertical
              justify="center"
              align="center"
            >
              <div className="title">PRAVEENKUMAR K</div>
              <div className="sub-title">FRONTEND DEVELOPER</div>
            </Flex>
          </div>
          {/* <Flex className="mob-title" justify="center">
          <div className="mob-photo"></div>
        </Flex> */}
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
                  Anna University Regional Campus, Madurai
                  <span className="did">- B.E</span>
                </div>
                <div className="year">2018-2022</div>
              </Flex>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                computer science and engineering
              </div>
              <div className="d-name" style={{ marginTop: ".5vh" }}>
                CGPA : 7.76
              </div>
            </div>
            <div className="edu">
              <Flex>
                <div className="degree">
                  Vaagai Vidhyalaya Matric Hr. Sec. School, H.Pudupatti
                  <span className="did">- HSC</span>
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
                  <span className="did">- SSLC</span>
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
                <FontAwesomeIcon icon={faLaptopCode} className="icon" />{" "}
                WORK EXPERIENCE
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
        </div>
      </Flex>
    </>
  );
}

export default Home;
