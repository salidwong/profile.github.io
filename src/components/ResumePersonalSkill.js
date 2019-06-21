import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import BrainStorm from '../images/brainstorm.png';
import Language from '../images/language.png';
import '../styles/resume-personal-skill.css';
import ScrollAnimation from 'react-animate-on-scroll';

class ResumePersonalSkill extends React.Component {
    render() {
        return (
            <Container className="pt-5 mt-3 pl-5">
                <Row>
                    <Col md={12} xs={6}>
                        <ScrollAnimation animateIn="bounceInRight" animateOnce="true" >
                            <Image src={BrainStorm} className="img-personal-skill mx-auto mb-4" />
                            <div className="mb-5">
                                <h5>Skill</h5>
                                <hr />
                                <p>
                                    Reactjs <br />
                                    HTML <br />
                                    CSS <br />
                                    Boostrap Framework <br />
                                    Javascript <br />
                                    Jquery<br />
                                    JAVA <br />
                                </p>
                            </div>
                        </ScrollAnimation>
                    </Col>

                    <Col md={12} xs={6}>
                        <ScrollAnimation animateIn="bounceInRight" animateOnce="true" delay="500">
                            <Image src={Language} className="img-personal-skill mx-auto mb-4" />
                            <div>
                                <h5>Language</h5>
                                <hr />
                                <p>
                                    Thai <br />
                                    English <br />
                                </p>
                            </div>
                        </ScrollAnimation>

                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ResumePersonalSkill;