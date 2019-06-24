import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../images/img-profile.jpg';
import Image from 'react-bootstrap/Image';
import ScrollAnimation from 'react-animate-on-scroll';
import '../styles/about-section.css';


class AboutSection extends React.Component {
    render() {
        return (
            <Container >
                <Row>
                    <Col md={6} xs={12}>
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                            <Container >
                                <Image src={profile} rounded  thumbnail  className="mx-auto d-block mb-4 shadow-lg" />
                            </Container>
                        </ScrollAnimation>

                    </Col>
                    <Col md={6} xs={12}>
                        <ScrollAnimation animateIn="bounceInRight" delay="" animateOnce="true">
                            <h1 className="mb-4">About Me</h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" delay="500" animateOnce="true">
                            <p className="text-about">
                            It’s nice to meet you, my name is Salidwong Wansanoh you can call me  Jay. <br/> I am interested in coding or programming. 
                            Programming makes me astonished many times. 
                            For me, programming like magic, it can create many things with just touch of 
                            a keyboard
                            </p>
                            <p className="text-center about-quote">- It’s never too late to start again -</p>
                        </ScrollAnimation>

                    </Col>

                </Row>

            </Container>

        )
    }
}

export default AboutSection;