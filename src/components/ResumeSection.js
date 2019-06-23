import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumeBackground from './ResumeBackground';
import ResumePersonalSkill from './ResumePersonalSkill';
import ScrollAnimation from 'react-animate-on-scroll';
import resume from '../pdf/Resume_Jay.pdf';
import Button from 'react-bootstrap/Button';

class ResumeSection extends React.Component {
    render() {
        return (
            <Container>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                    <h3>Resume</h3>
                </ScrollAnimation>
                <hr />
                <Row>
                    <Col md={8} xs={12}>
                        <ResumeBackground />
                    </Col>
                    <Col md={4} xs={12}>
                        <ResumePersonalSkill />
                    </Col>

                </Row>
                <Container className="d-flex justify-content-center mt-3 mb-3">
                    <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                        <Button href={resume} variant="outline-primary" >Click here for pdf</Button>

                    </ScrollAnimation>
                </Container>
            </Container>

        )
    }
}

export default ResumeSection;