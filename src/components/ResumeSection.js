import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumeBackground from './ResumeBackground';
import ResumePersonalSkill from './ResumePersonalSkill';


class ResumeSection extends React.Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col md={8} xs={12}>
                        <h3>Resume</h3>
                        <ResumeBackground/>
                    </Col>
                    <Col md={4} xs={12}>
                        <ResumePersonalSkill/>
                    </Col>

                </Row>
            </Container>
            
        )
    }
}

export default ResumeSection ;