import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import "./About.css";


class About extends Component {

    render() {
        return (
                <Container className="AboutMe" >
                    <Row>
                        <Col>
                            <center>
                                <h1>About Me</h1>
                            </center>

                            <p className="AboutMe">
                                I received my bachelor’s from Brigham Young University-Idaho in Business Management with an emphasis in Marketing and am now a front-end web developer.</p>
                            <p className="AboutMe">
                                I recently dove into the world of coding and front-end web development through Dev-Mountain. I have experience coding with a full-stack of tech and love working with a team to solve problems using React, Redux, Node.js, Javascript, HTML5, CSS3, Bootstrap, jQuery, Postgress, and any other tech I can get my hands on.</p>
                            <p className="AboutMe">
                                My previous 7 years were spent working as a social media marketer (SMM), content curator, search engine optimizer (SEO),  and event marketer.</p>
                            <p className="AboutMe">
                                I am a seeker of fresh powder, avid gamer, and enjoy most things adventurous.</p>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default About;