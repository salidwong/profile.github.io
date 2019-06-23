import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../images/profile.png';
import Image from 'react-bootstrap/Image';
import ScrollAnimation from 'react-animate-on-scroll';




class AboutSection extends React.Component {
    render() {
        return (
            <Container >
                <Row>
                    <Col md={6} xs={12}>
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                            <Container >
                                <Image src={profile} roundedCircle className="mx-auto d-block mb-4" />
                            </Container>
                        </ScrollAnimation>

                    </Col>
                    <Col md={6} xs={12}>
                        <ScrollAnimation animateIn="bounceInRight" delay="500" animateOnce="true">
                            <h3>About Me</h3>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce="true">
                            <p className="text-about">
                            It’s nice to meet you, my name is Jay. I am interested in coding or programming. 
                            Programming makes me astonished many times. 
                            For me, programming like magic, it can create things with just touch of 
                            a keyboard, it can create many things. 
                        </p>
                        </ScrollAnimation>

                    </Col>

                </Row>

            </Container>

        )
    }
}

export default AboutSection;