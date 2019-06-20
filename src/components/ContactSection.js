import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class ContactSection extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <h1>Contact Me</h1>

                        <p>call : 0954780378</p>
                        <p>e-mail : slidwong@hotmail.com</p>

                    </Col>
                    <Col md={6} xs={12}>

                    </Col>
                </Row>

            </Container>
        )
    }
}
export default ContactSection;