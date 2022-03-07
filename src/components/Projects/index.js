import React from 'react';
import MovieMatchPhoto from "../../assets/images/movie-match-screenshot.png";
import MediaGemsPhoto from "../../assets/images/media-gems-screenshot.png";
import WeatherDashboardPhoto from "../../assets/images/weather-dashboard-screenshot.png";
import READMEGeneratorPhoto from "../../assets/images/README-generator-screenshot.png";
import NotetakerPhoto from "../../assets/images/notetaker-screenshot.png";
import PasswordGeneratorPhoto from "../../assets/images/password-generator-screenshot.png";




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

        // const projects = [
        //     {
        //         name: 'Movie Match',
        //         site: 'https://gabrielandrews.github.io/Group-project-movie-/',
        //         repo: 'https://github.com/gabrielandrews/Group-project-movie-',
        //         image: '../assets/images/movie-match-screeshot.png'

        //     }, 
        //     {
        //         name: 'Media Gems',
        //         site: 'https://gentle-dusk-15958.herokuapp.com/',
        //         repo: 'https://github.com/KrisSmith7/media-gems',
        //         image: '../assets/images/media-gems-screenshot.png'

        //     },
        //     {
        //         name: 'Weather Dashboard',
        //         site: 'https://ekball.github.io/C6-Weather-Dashboard/',
        //         repo: 'https://github.com/ekball/C6-Weather-Dashboard',
        //         image: '../assets/images/weather-dashboard-screenshot.png'

        //     },
        //     {
        //         name: 'README Generator',
        //         site: 'https://watch.screencastify.com/v/9nnkvfNLQ3FvrwhAjYeZ',
        //         repo: 'https://github.com/ekball/C9-README-Generator',
        //         image: '../assets/images/README-generator-screenshot.png'

        //     },
        //     {
        //         name: 'Note Taker',
        //         site: 'https://whispering-springs-16433.herokuapp.com/',
        //         repo: 'https://github.com/ekball/C11-Note-Taker',
        //         image: '../assets/images/notetaker-screenshot.png'

        //     },
        //     {
        //         name: 'Password Generator',
        //         site: 'https://ekball.github.io/C3-Password-Generator/',
        //         repo: 'https://github.com/ekball/C3-Password-Generator',
        //         image: '../assets/images/password-generator-screnshot.png'

        //     }
        // ]

        


        return (
        
        <section className='projects-section'>
            
            <h1 className='projects-title'>Projects</h1>

            <div>

                <div className='projects-top-row'>

                    <div className='projects-one'>
                        
                        {/* buttons to project 1 (deployed site + github) */}
                        <a href='https://gabrielandrews.github.io/Group-project-movie-/'>
                            <button 
                                className='projects-button-one-site'
                                style={{ 
                                    backgroundImage: `url("${MovieMatchPhoto}")`,
                                    backgroundPosition: "left 36% center",
                                    backgroundSize: "",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"
                                }}
                            >
                                Deployed Site
                            </button>

                        </a>

                        <a  href='https://github.com/gabrielandrews/Group-project-movie-'>
                            <button 
                                className='projects-button-one-repo'
                                style={{ 
                                    backgroundImage: `url("${MovieMatchPhoto}")`,
                                    backgroundPosition: "right 37.25% center",
                                    backgroundSize: "",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none"
                                }}
                            >
                                Github Repo
                            </button>
                        </a>

                    </div>

                    <div className='projects-two'>
                       
                        {/* buttons to project 2 (deployed site + github) */}
                        <a  href='https://gentle-dusk-15958.herokuapp.com/'>
                            <button 
                                className='projects-button-two-site'
                                style={{ 
                                    backgroundImage: `url("${MediaGemsPhoto}")`,
                                    backgroundPosition: "left center",
                                    backgroundSize: "40vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"
                                }}
                            >
                                Deployed Site
                            </button>                        
                        </a>

                        <a href='https://github.com/KrisSmith7/media-gems'>
                            <button 
                                className='projects-button-two-repo'
                                style={{ 
                                    backgroundImage: `url("${MediaGemsPhoto}")`,
                                    backgroundPosition: "right 3% center",
                                    backgroundSize: "40vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none"
                                }}
                            >
                                Github Repo
                            </button>                        
                        </a>

                    </div>

                </div>

                <div className='projects-middle-row'>

                    <div className='projects-three'>

                        {/* buttons to project 3 (deployed site + github) */}
                        <a href='https://ekball.github.io/C6-Weather-Dashboard/'>
                            <button 
                                className='projects-button-three-site'
                                style={{ 
                                    backgroundImage: `url("${WeatherDashboardPhoto}")`,
                                    backgroundPosition: "left 30% top",
                                    backgroundSize: "79.5vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"
                                }}
                            >
                                Deployed Site
                            </button>                        
                        </a>

                        <a href='https://github.com/ekball/C6-Weather-Dashboard'>
                            <button 
                                className='projects-button-three-repo'
                                style={{ 
                                    backgroundImage: `url("${WeatherDashboardPhoto}")`,
                                    backgroundPosition: "right 37% top",
                                    backgroundSize: "79.5vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none"
                                }}
                            >
                                Github Repo
                            </button>                        
                        </a>
                    </div>

                    <div className='projects-four'>

                        {/* buttons to project 4 (deployed site + github) */}
                        <a href='https://watch.screencastify.com/v/9nnkvfNLQ3FvrwhAjYeZ'>
                            <button 
                                className='projects-button-four-site'
                                style={{ 
                                    backgroundImage: `url("${READMEGeneratorPhoto}")`,
                                    backgroundPosition: "left top",
                                    backgroundSize: "80vw",
                                    width: "20vw",
                                    height: "33vw" 
                                }}
                            >
                                Deployed Site
                            </button>                        
                        </a>
                        
                        <a href='https://github.com/ekball/C9-README-Generator'>
                            <button 
                                className='projects-button-four-repo'
                                style={{ 
                                    backgroundImage: `url("${READMEGeneratorPhoto}")`,
                                    backgroundPosition: "right 35% top",
                                    backgroundSize: "80vw",
                                    width: "20vw",
                                    height: "33vw" 
                                }}
                            >
                                Github Repo
                            </button>                        
                        </a>
                    </div>

                </div>

                <div className='projects-bottom-row'>

                    <div className='projects-five'>

                        {/* buttons to project 5 (deployed site + github) */}
                        <a href='https://whispering-springs-16433.herokuapp.com/'>
                            <button 
                                className='projects-button-five-site'
                                style={{ 
                                    backgroundImage: `url("${NotetakerPhoto}")`,
                                    backgroundPosition: "left 18% top",
                                    backgroundSize: "67vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"
                                }}
                            >
                                Deployed Site
                            </button>                       
                        </a>
                        
                        <a href='https://github.com/ekball/C11-Note-Taker'>
                            <button 
                                className='projects-button-five-repo'
                                style={{ 
                                    backgroundImage: `url("${NotetakerPhoto}")`,
                                    backgroundPosition: "right 40% top",
                                    backgroundSize: "67vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none"
                                }}
                            >
                                Github Repo
                            </button>                         
                        </a>
                    </div>

                    <div className='projects-six'>

                        {/* buttons to project 6 (deployed site + github) */}
                        <a  href='https://ekball.github.io/C3-Password-Generator/'>
                            <button 
                                className='projects-button-six-site'
                                style={{ 
                                    backgroundImage: `url("${PasswordGeneratorPhoto}")`,
                                    backgroundPosition: "left 30% top",
                                    backgroundSize: "70vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"

                                }}
                            >
                                Deployed Site
                            </button>                       
                        </a>
                        
                        <a href='https://github.com/ekball/C3-Password-Generator'>
                            <button 
                                className='projects-button-six-repo'
                                style={{ 
                                    backgroundImage: `url("${PasswordGeneratorPhoto}")`,
                                    backgroundPosition: "right 30.5% top",
                                    backgroundSize: "70vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none" 
                                }}
                            >
                                Github Repo
                            </button>                        
                        </a>
                    </div>

                </div>

            </div>
            
        </section>


    );

}



export default Projects;