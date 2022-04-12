import React from "react";

function Resume() {

    return(
        <div className="resume-section">
            <h1 className="resume-title">Resume</h1>

            <a href={require(`../../assets/docs/resume.pdf`)} target="_blank" className="resume-link">Click here to download a copy of my resume</a>
        </div>
    );
}

export default Resume;