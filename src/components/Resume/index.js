import React from "react";

function Resume() {

    const skills = [
        'React',
        'Javascript', 
        'GraphQL',
        'MERN Stack',
        'Node.js',
        'MongoDB',
        'Express.js',
        'NoSQL', 
        'GitHub', 
        'CSS', 
        'DRY Methods',
        'OOP', 
        'MVC Paradigm',
        'Progressive Web Applications',
    ]


    return(
        <div className="resume-section">
            <div>
                <h1 className="resume-title">Resume</h1>

                <a href='../assets/docs/resume.pdf' download className="resume-link">Click here to download a copy of my resume</a>
            </div>

            <div>
                <h1>Skills</h1>

                <ul>
                        {skills.map(skill => {
                            return <li>{skill}</li>
                        })}
                </ul>
            </div>
        </div>
    );
}

export default Resume;