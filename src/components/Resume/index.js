import React from 'react';
import resumeFile from './Resume.pdf';
import pdfImage from './pdfImage.png';

function Resume() {
    return(
        <div>
            <h1>Resume</h1>
            <a href={resumeFile} download> <img src={pdfImage} alt="" /></a>
            </div>
    )
}
export default Resume;