import React from 'react';
import '../styles/resume-background.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ResumeBackground extends React.Component {
    render() {
        return (
            <Container>
                <hr />
                <Container>
                    <Row>
                        <Col md={4} xs={12} className="mb-4">
                            <div className="title-background">
                                <p>Personal ​info​​</p>
                            </div>

                        </Col>
                        <Col md={8} xs={12}>
                            <div className="text-background mt-2">
                                <p>
                                    Height : 169 cm<br/>
                                    Weight : 61 kg<br/>
                                    Sex : male<br/>
                                    Age : 23<br/>
                                    Nationality : Thai<br/>
                                    Military status : Exempted from military service because of 3 years of Reserved Officer Training Course<br/>
                                </p>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>

                <hr />
                <Container>
                    <Row>
                        <Col md={4} xs={12} className="mb-4">
                            <div className="title-background">
                                <p>Work​ experience​​</p>
                            </div>

                        </Col>
                        <Col md={8} xs={12}>
                            <div className="text-background mt-5">
                                <p>Aug 2018 - Present</p>
                                <p>
                                    Software Developer At MFEC Public Company Limited 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <hr />
                <Container>
                    <Row>
                        <Col md={4} xs={12} className="mb-4">
                            <div className="title-background">
                                <p>Education​​</p>
                            </div>

                        </Col>
                        <Col md={8} xs={12}>
                            <div className="text-background mt-4">
                                <p>2014 - 2018</p>
                                <p>
                                    Bachelor of computer and information engineering
                                    Kasetsart University Sriracha Campus
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </Container>
        )
    }
}
export default ResumeBackground;