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
            <div className="d-flex justify-content-center">
                <Document className="resumeImage"
                file={pdf}
                onLoadSuccess={this.onDocumentLoad}>
                <Page pageNumber={pageNumber} />
                </Document>
            </div>
                <center> 
                    <a href="./AdamFiggatWebDeveloper.pdf">Download a copy of my reusme here!</a>
                </center>
            </div>
        );
    }
}

export default Resume;