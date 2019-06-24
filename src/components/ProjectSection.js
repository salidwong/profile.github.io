import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectSlideImage from './ProjectSlideImage';
import ImageTest from '../images/300x300.png';
import ScrollAnimation from 'react-animate-on-scroll';
import FNAImage1 from '../images/img-fna-1.PNG';
import FNAImage2 from '../images/img-fna-2.PNG';
import FNAImage3 from '../images/img-fna-3.PNG';
import FNAImage4 from '../images/img-fna-4.PNG';
import FNAImage5 from '../images/img-fna-5.PNG';
import FNAImage6 from '../images/img-fna-6.PNG';
import FNAImage7 from '../images/img-fna-7.PNG';
import KTCImage1 from '../images/img-ktc-1.png';
import KTCImage2 from '../images/img-ktc-2.png';
import KTCImage3 from '../images/img-ktc-3.png';
import KTCImage4 from '../images/img-ktc-4.png';
import KTCImage5 from '../images/img-ktc-5.png';
import KTCImage6 from '../images/img-ktc-6.png';
import KTCImage7 from '../images/img-ktc-7.png';
import KTCImage8 from '../images/img-ktc-8.png';
import KTCImage9 from '../images/img-ktc-9.png';
import KTCImage10 from '../images/img-ktc-10.png';
import KTCImage11 from '../images/img-ktc-11.png';
import HosappImage1 from '../images/img-hosapp-1.png';
import HosappImage2 from '../images/img-hosapp-2.png';
import HosappImage3 from '../images/img-hosapp-3.png';
import HosappImage4 from '../images/img-hosapp-4.png';
import HosappImage5 from '../images/img-hosapp-5.png';
import HosappImage6 from '../images/img-hosapp-6.png';

class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgTest : [ImageTest, ImageTest, ImageTest],
            imgProject1: [FNAImage1, FNAImage2, FNAImage3, FNAImage4, FNAImage5, FNAImage6, FNAImage7],
            imgProject2 : [HosappImage1, HosappImage2, HosappImage3, HosappImage4, HosappImage5, HosappImage6],
            imgProject3: [KTCImage1, KTCImage2, KTCImage3, KTCImage4, KTCImage5, KTCImage6, KTCImage7, KTCImage8,KTCImage9, KTCImage10, KTCImage11]
            
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
                                <h4 className="pt-5">FNA Application / Apr 2019 - Jun 2019 </h4>
                                <hr />
                                <div className="pt-2">
                                    <p>
                                        Developed cross-platform applications for insurance sellers
                                        of Thai companies using reactjs, CSS, Boostrap Framework
                                    </p>
                                    <ul>
                                        <li>
                                            UI/UX Design Evaluation short form page
                                        </li>
                                        <li>
                                            Developed Evaluation short form page
                                        </li>
                                    </ul>
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
                                <ProjectSlideImage listImage={this.state.imgProject2} />
                            </ScrollAnimation>
                        </Col>

                        <Col md={6} xs={12}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="500">
                                <h4 className="pt-5">SCB Application / Jan 2019 - Mar 2019</h4>
                                <hr />
                                <div className="pt-2">
                                    <p>
                                        Developed applications For Siriraj Hospital To facilitate
                                        for users  using Android studio JAVA Firebase
                                    </p>
                                    <ul>
                                        <li>
                                            Developed function checkin for Out Patient Department
                                        </li>
                                        <li>
                                            Improved UI/UX AppointmentList Page
                                        </li>
                                        <li>
                                            Design and Develop Requiement popup
                                        </li>
                                    </ul>
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
                                <ProjectSlideImage listImage={this.state.imgProject3} />
                            </ScrollAnimation>
                        </Col>

                        <Col md={6} xs={12}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="500">
                                <h4 className="pt-5">KTC Website / Aug 2018 - Jan 2019</h4>
                                <hr />
                                <div className="pt-2">
                                    <p>
                                        Developed websites for KTC using oracle's WCS and include
                                        HTML CSS Javascript Boostrap Jquery JSP.
                                    </p>
                                    <ul>
                                        <li>
                                            Improved UI/UX  for KTC Website
                                        </li>
                                        <li>
                                            Improve webservice to be effective
                                        </li>
                                        <li>
                                            Developed KTC World Website
                                        </li>
                                    </ul>
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