import React from 'react';
import photo from "../../assets/images/movie-match-screenshot.png"

function Projects (props) {
    
    const currentProject = {
         name: "Movie Match"
    }

    return(

        // <section className=''>

        //     <h1 className="flex-left">Work</h1>

        //     <div className="">

        //         <a className="project-1">

        //             <a href="https://github.com/gabrielandrews/Group-project-movie-" >Movie Match</a>

        //         </a>

        //         <a className="media-gems">

        //             <a href="https://github.com/KrisSmith7/media-gems" >Media Gems</a>

        //         </a>

        //         <a className="weather-dashboard">

        //             <a href="https://github.com/ekball/C6-Weather-Dashboard" >Weather Dashboard</a>

        //         </a>

        //         <a className="readme-generator">

        //             <a href="https://github.com/ekball/C9-README-Generator" >README Generator</a>

        //         </a>

        //         <a className="note-taker">

        //             <a href="https://github.com/ekball/C11-Note-Taker" >Note Taker</a>

        //         </a>

        //         <a className="password-generator">

        //             <a href="https://github.com/ekball/C3-Password-Generator" >Password Generator</a>

        //         </a>

        //     </div>

        // </section>

        

        <section>
            <h2>{currentProject.name}</h2>
            <div className='flex-row'>
                <img 
                    src={photo}
                    alt="Movie Match Project"
                    className='button-images'
                />
            </div>
        </section>


    );

}



export default Projects;