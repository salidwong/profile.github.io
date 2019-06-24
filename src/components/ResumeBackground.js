import React from 'react';
import '../styles/resume-background.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

class ResumeBackground extends React.Component {
    render() {
        return (
            <Container>
                <Container>
                    <Row>
                        <Col md={4} xs={12} className="mb-4">
                            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                                <div className="title-background">
                                    <p>Interests</p>
                                </div>
                            </ScrollAnimation>


                        </Col>
                        <Col md={8} xs={12}>
                            <div className="text-background mt-4">
                                <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="500">
                                    {/* <p>
                                        Age : 23<br />
                                        Sex : male<br />
                                        Weight : 61 kg<br />
                                        Height : 169 cm<br />
                                        Nationality : Thai<br />
                                        Military status : Exempted from military service because of 3 years of Reserved Officer Training Course<br />
                                    </p> */}
                                    <Row>
                                        <Col md={4} xs={6}>
                                            <ul className="pl-3">
                                                <li>
                                                    Exploring
                                                </li>
                                                <li>
                                                    Music
                                                </li>
                                                <li>
                                                    Men's fashion
                                                </li>
                                                <li>
                                                    Health
                                                </li>
                                            </ul>

                                        </Col>
                                        <Col md={4} xs={6}>
                                            <ul className="pl-3">
                                                <li>
                                                    Technology
                                                </li>
                                                <li>
                                                    Beautiful thing
                                                </li>
                                                <li>
                                                    Programming
                                                </li>
                                                <li>
                                                    Gadgets
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col md={4} xs={6}>
                                            <ul className="pl-3">
                                                <li>
                                                    Art work
                                                </li>
                                                <li>
                                                    Quotes
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>

                                </ScrollAnimation>


                            </div>
                        </Col>
                    </Row>
                </Container>

                <hr />
                <Container>
                    <Row>
                        <Col md={4} xs={12} className="mb-4">
                            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true" >
                                <div className="title-background">
                                    <p>Education​​</p>
                                </div>
                            </ScrollAnimation>
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="text-background mt-4">
                                <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="500">
                                    <p className="resume-education-times">Aug 2014 - May 2018</p>
                                    <p>
                                        Bachelor of Computer and Information Engineering
                                        Kasetsart University Sriracha Campus
                                    </p>
                                </ScrollAnimation>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <hr />
                <Container>
                    <Row>
                        <Col md={4} xs={12} className="mb-4">
                            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true" delay="600">
                                <div className="title-background">
                                    <p>Work​ experience​​</p>
                                </div>
                            </ScrollAnimation>
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="text-background mt-5">
                                <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="1100">
                                    <p className="resume-work-times">Aug 2018 - Jun 2019</p>
                                    <p>
                                        Software Developer At MFEC Public Company Limited
                                </p>
                                </ScrollAnimation>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </Container>
        )
    }
}
export default ResumeBackground;