import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-success">
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col md='3'>
                            <p>Github</p>
                        </Col>
                        <Col md='3'>
                            <p>LinkedIn</p>
                        </Col>
                        <Col md='3'>
                            <p>afiggat@gmail.com</p>
                        </Col>
                        <Col md='3'>
                            <p>760.814.7652</p>
                        </Col>
                    </Row>
                </Container>

            </footer>
        );
    }
}

export default Footer;