import React from 'react';
import '../styles/background-section.css'
import ScrollAnimation from 'react-animate-on-scroll';
class BackgroundSection extends React.Component {

    render() {

        return (
            <div>
                <div className="bg-section"></div>

                <div className="bg-text">
                    <ScrollAnimation animateIn="fadeIn" duration="1" animateOnce="true">
                        <h2>Hello</h2>
                        <h1>I am Salidwong Wansanoh</h1>
                        <p>And I'm a Fron-end Developer</p>
                    </ScrollAnimation>
                </div>
                
            </div>
            

        )
    }
}

export default BackgroundSection;