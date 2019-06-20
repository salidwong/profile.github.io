import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
class ProjectSlideImage extends React.Component {
    render() {
        const { listImage } = this.props;
        const slideImage =
            listImage.map((imgItem) => {
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgItem}
                        />
                    </Carousel.Item>
                );

            });

        return (

            <Container className="w-75">
                <Carousel>
                    {slideImage}
                </Carousel>

            </Container>
        )
    }
}
export default ProjectSlideImage;