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
                                Hi, my name is Salidwong Wansanoh you can call me Jay
                                i'm interested in the Front-end Develop by Reactjs,
                                i'm a person who likes to learn new things. To bring knowledge used in self-development,
                                i'm a productive team player, a good communicator, energetic and responsible, fast learning and hard working and
                                Able to work under pressure and flexible time
                        </p>
                        </ScrollAnimation>

                    </Col>

                </Row>

            </Container>

        )
    }
}

export default AboutSection;