import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CallIcon from '../images/call.png';
import EmailIcon from '../images/email.png';
import FacebookIcon from '../images/facebook.png';
import CopyrightIcon from '../images/copyright.png';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/contact-section.css';

class ContactSection extends React.Component {
    render() {
        return (
            <footer  className="container-fluid footer">
                <Row>
                    <Col md={3} xs={12} >
                        <Row>
                            <FontAwesomeIcon icon={['fas', 'mobile-alt']} size="lg" />
                            <p>+66 954780378</p>
                        </Row>

                    </Col>
                    <Col md={3} xs={12}>
                        <Row>
                            <FontAwesomeIcon icon={['far', 'envelope']} size="lg" /> 
                            <p>slidwong@hotmail.com</p>
                        </Row>
                    </Col>
                    <Col md={3} xs={12} >
                        <Row>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" /> 
                            <p>Salidwong Wansanoh</p>
                        </Row>
                    </Col>
                    <Col md={3} xs={12} >
                        <Row>
                            <FontAwesomeIcon icon={['far', 'copyright']} size="lg" /> 
                            <p>2019 by Jay Salidwong</p>
                        </Row>
                    </Col>
                </Row>

            </footer>
        )
    }
}
export default ContactSection;