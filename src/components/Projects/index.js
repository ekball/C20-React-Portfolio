import React from 'react';
import photo from "../../assets/images/movie-match-screenshot.png"

function Projects (props) {

    // return(

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

        const projects = [
            {
                name: 'Movie Match',
                site: 'https://gabrielandrews.github.io/Group-project-movie-/',
                repo: 'https://github.com/gabrielandrews/Group-project-movie-',
                image: '../assets/images/movie-match-screeshot.png'

            }, 
            {
                name: 'Media Gems',
                site: 'https://gentle-dusk-15958.herokuapp.com/',
                repo: 'https://github.com/KrisSmith7/media-gems',
                image: '../assets/images/media-gems-screenshot.png'

            },
            {
                name: 'Weather Dashboard',
                site: 'https://ekball.github.io/C6-Weather-Dashboard/',
                repo: 'https://github.com/ekball/C6-Weather-Dashboard',
                image: '../assets/images/weather-dashboard-screenshot.png'

            },
            {
                name: 'README Generator',
                site: 'https://watch.screencastify.com/v/9nnkvfNLQ3FvrwhAjYeZ',
                repo: 'https://github.com/ekball/C9-README-Generator',
                image: '../assets/images/README-generator-screenshot.png'

            },
            {
                name: 'Note Taker',
                site: 'https://whispering-springs-16433.herokuapp.com/',
                repo: 'https://github.com/ekball/C11-Note-Taker',
                image: '../assets/images/notetaker-screenshot.png'

            },
            {
                name: 'Password Generator',
                site: 'https://ekball.github.io/C3-Password-Generator/',
                repo: 'https://github.com/ekball/C3-Password-Generator',
                image: '../assets/images/password-generator-screnshot.png'

            }
        ]

        


        return (
        
        <section className='projects-section'>
            
            <h1 className='projects-title'>Projects</h1>

            <div>

                <div className='projects-top-row'>

                    <div className='projects-one'>
                        
                        {/* buttons to project 1 (deployed site + github) */}
                        <a href='https://gabrielandrews.github.io/Group-project-movie-/'>
                            <button className='project-button-one-site'>Deployed Site</button>
                        </a>

                        <a  href='https://github.com/gabrielandrews/Group-project-movie-'>
                            <button className='project-button-one-repo'>Github Repo</button>
                        </a>

                    </div>

                    <div className='projects-two'>
                       
                        {/* buttons to project 2 (deployed site + github) */}
                        <a  href='https://gentle-dusk-15958.herokuapp.com/'>
                            <button className='project-button-two-site'>Deployed Site</button>
                        </a>

                        <a href='https://github.com/KrisSmith7/media-gems'>
                            <button className='project-button-two-repo'>Github Repo</button>
                        </a>

                    </div>

                </div>

                <div className='projects-middle-row'>

                    <div className='projects-three'>

                        {/* buttons to project 3 (deployed site + github) */}
                        <a href='https://ekball.github.io/C6-Weather-Dashboard/'>
                            <button className='project-button-three-site'>Deployed Site</button>
                        </a>

                        <a href='https://github.com/ekball/C6-Weather-Dashboard'>
                        <button className='project-button-three-repo'>Githhub Repo</button>
                        </a>
                    </div>

                    <div className='projects-four'>

                        {/* buttons to project 4 (deployed site + github) */}
                        <a href='https://watch.screencastify.com/v/9nnkvfNLQ3FvrwhAjYeZ'>
                        <button className='project-button-four-site'>App Video</button>
                        </a>
                        
                        <a href='https://github.com/ekball/C9-README-Generator'>
                        <button className='project-button-four-repo'>Github Repo</button>
                        </a>
                    </div>

                </div>

                <div className='projects-bottom-row'>

                    <div className='projects-five'>

                        {/* buttons to project 5 (deployed site + github) */}
                        <a href='https://whispering-springs-16433.herokuapp.com/'>
                        <button className='project-button-five-site'>Deployed Site</button>
                        </a>
                        
                        <a href='https://github.com/ekball/C11-Note-Taker'>
                        <button className='project-button-five-repo'>Github Repo</button>
                        </a>
                    </div>

                    <div className='projects-six'>

                        {/* buttons to project 6 (deployed site + github) */}
                        <a  href='https://ekball.github.io/C3-Password-Generator/'>
                        <button className='project-button-six-site'>Deployed Site</button>
                        </a>
                        
                        <a href='https://github.com/ekball/C3-Password-Generator'>
                        <button className='project-button-six-repo'>Github Repo</button>
                        </a>
                    </div>

                </div>

            </div>
            
        </section>


    );

}



export default Projects;