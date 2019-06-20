import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectSlideImage from './ProjectSlideImage';
import ImageTest from '../images/300x300.png';

class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgProject1 : [ImageTest, ImageTest, ImageTest]
        }
    }

    render() {
        return (
            <Container>
                <h3>Lastest Project</h3>
                <hr />
                {/* Project 1 */}
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <ProjectSlideImage listImage={this.state.imgProject1}/>
                        </Col>

                        <Col md={6} xs={12}>
                            <h4 className="pt-5">FNA</h4>
                            <hr/>
                            <div className="pt-2">
                                <p>
                                    Develop cross-platform applications for insurance sellers 
                                    of Thai companies using reactjs, CSS, Boostrap Framework
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                {/* End Project 1 */}

                {/* Project 2 */}
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <ProjectSlideImage listImage={this.state.imgProject1}/>
                        </Col>

                        <Col md={6} xs={12}>
                            <h4 className="pt-5">SCB siriraj connect</h4>
                            <hr/>
                            <div className="pt-2">
                                <p>
                                    Develop applications For Siriraj Hospital To facilitate 
                                    for users  using Android studio JAVA Firebase
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                {/* End Project 2 */}

                {/* Project 3 */}
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <ProjectSlideImage listImage={this.state.imgProject1}/>
                        </Col>

                        <Col md={6} xs={12}>
                            <h4 className="pt-5">KTC Websites</h4>
                            <hr/>
                            <div className="pt-2">
                                <p>
                                    Develop websites for KTC using oracle's WCS and include 
                                    HTML CSS Javascript Boostrap Jquery JSP.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                {/* End Project 3 */}

            </Container>
        )
    }
}
export default ProjectSection;