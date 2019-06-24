import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import BrainStorm from '../images/brainstorm.png';
import Language from '../images/language.png';
import HardSkillsImage from '../images/education.png';
import SoftSkillsImage from '../images/skills.png';
import '../styles/resume-personal-skill.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ResumePersonalSkill extends React.Component {
    render() {
        return (
            <Container className="mt-3 pl-5">
                <Row>
                    <Col md={12} xs={12} className="mb-3">
                        <ScrollAnimation animateIn="bounceInRight" animateOnce="true" delay="500">
                            <Image src={HardSkillsImage} className="img-personal-skill mb-4" />
                            <div>
                                <h5>Hard Skills</h5>
                                <hr />
                                {/* <p>
                                    <FontAwesomeIcon icon={['fab', 'react']} />&nbsp;
                                    Reactjs <br />
                                    <FontAwesomeIcon icon={['fab', 'html5']} size="lg" />&nbsp;
                                    HTML <br />
                                    <FontAwesomeIcon icon={['fab', 'css3-alt']} size="lg" />&nbsp;
                                    CSS <br />
                                    <FontAwesomeIcon icon={['fab', 'bootstrap']} size="lg" />&nbsp;
                                    Boostrap Framework <br />
                                    <FontAwesomeIcon icon={['fab', 'js-square']} size="lg" />&nbsp;
                                    Javascript <br />
                                    <FontAwesomeIcon icon={['fas', 'code']} />&nbsp;
                                    Jquery<br />
                                    <FontAwesomeIcon icon={['fab', 'java']} size="lg" />&nbsp;
                                    JAVA <br />
                                </p> */}
                                <ul className="pl-3">
                                    <li>
                                        Reactjs
                                    </li>
                                    <li>
                                        HTML, CSS
                                    </li>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        Jquery
                                    </li>
                                    <li>
                                        Boostrap Framework
                                    </li>
                                    <li>
                                        JAVA, Firebase
                                    </li>
                                    <li>
                                        C/C++
                                    </li>
                                    <li>
                                        Basic linux command
                                    </li>
                                    <li>
                                        Git Command
                                    </li>

                                </ul>
                            </div>
                        </ScrollAnimation>
                    </Col>

                    <Col md={12} xs={12}>
                        <ScrollAnimation animateIn="bounceInRight" animateOnce="true" delay="500">
                            <Image src={SoftSkillsImage} className="img-personal-skill mb-4" />
                            <div>
                                <h5 >Soft Skills</h5>
                                <hr />
                                <ul className="pl-3">
                                    <li>
                                        Communication
                                    </li>
                                    <li>
                                        Teamwork
                                    </li>
                                    <li>
                                        Patience
                                    </li>
                                    <li>
                                        Problem solving
                                    </li>
                                    <li>
                                        Accountability
                                    </li>
                                    <li>
                                        Approachability and Helpfulness
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>

                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ResumePersonalSkill;