import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumeBackground from './ResumeBackground';
import ResumePersonalSkill from './ResumePersonalSkill';
import ScrollAnimation from 'react-animate-on-scroll';

class ResumeSection extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={8} xs={12}>
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                            <h3>Resume</h3>
                        </ScrollAnimation>
                        <ResumeBackground />
                    </Col>
                    <Col md={4} xs={12}>
                        <ResumePersonalSkill />
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default ResumeSection;