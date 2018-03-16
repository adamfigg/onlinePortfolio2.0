import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className='bg-light'>
				<Container>
					<Row className='justify-content-md-center'>
						<Col md='4'>
							<p className="lead">Contact</p>
							<hr />
							<a href="mailto:afiggat@gmail.com">afiggat@gmail.com</a>
                            <br/>
							<a href="tel:+1-760-814-7652">760.814.7652</a>
						</Col>
						<Col md='4'>
							<p className='lead'>Links</p>
							<hr />
							<a href="https://www.linkedin.com/in/adam-figgat/">LinkedIn</a>
                            <br/>
							<a href="https://github.com/adamfigg">Github</a>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default Footer;