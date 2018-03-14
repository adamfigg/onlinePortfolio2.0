import React, { Component } from 'react';

import { Document, Page } from 'react-pdf';

import pdf from './AdamFiggatWebDeveloper.pdf';

import "./Resume.css";

class Resume extends Component {

state = {
    numPages: null,
    pageNumber: 1,
}

onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
}

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <center>
                <h1>Feel free to download my resume here!</h1>
                </center>
            <div className="d-flex justify-content-center">
                <Document className="resumeImage"
                file={pdf}
                onLoadSuccess={this.onDocumentLoad}>
                <Page pageNumber={pageNumber} />
                </Document>
            </div>
            </div>
        );
    }
}

export default Resume;