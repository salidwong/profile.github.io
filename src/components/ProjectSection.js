import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectSlideImage from './ProjectSlideImage';
import ImageTest from '../images/300x300.png';
import ScrollAnimation from 'react-animate-on-scroll';

class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgProject1: [ImageTest, ImageTest, ImageTest]
        }
    }

    render() {
        return (
            <Container>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                    <h3>Lastest Project</h3>
                </ScrollAnimation>
                <hr />
                {/* Project 1 */}
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                                <ProjectSlideImage listImage={this.state.imgProject1} />
                            </ScrollAnimation>
                        </Col>

                        <Col md={6} xs={12}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="500">
                                <h4 className="pt-5">FNA</h4>
                                <hr />
                                <div className="pt-2">
                                    <p>
                                        Develop cross-platform applications for insurance sellers
                                        of Thai companies using reactjs, CSS, Boostrap Framework
                                </p>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
                <hr />
                {/* End Project 1 */}

                {/* Project 2 */}
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                                <ProjectSlideImage listImage={this.state.imgProject1} />
                            </ScrollAnimation>
                        </Col>

                        <Col md={6} xs={12}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="500">
                                <h4 className="pt-5">SCB siriraj connect</h4>
                                <hr />
                                <div className="pt-2">
                                    <p>
                                        Develop applications For Siriraj Hospital To facilitate
                                        for users  using Android studio JAVA Firebase
                                </p>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
                <hr />
                {/* End Project 2 */}

                {/* Project 3 */}
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                                <ProjectSlideImage listImage={this.state.imgProject1} />
                            </ScrollAnimation>
                        </Col>

                        <Col md={6} xs={12}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="500">
                                <h4 className="pt-5">KTC Websites</h4>
                                <hr />
                                <div className="pt-2">
                                    <p>
                                        Develop websites for KTC using oracle's WCS and include
                                        HTML CSS Javascript Boostrap Jquery JSP.
                                </p>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
                <hr />
                {/* End Project 3 */}

            </Container>
        )
    }
}
export default ProjectSection;