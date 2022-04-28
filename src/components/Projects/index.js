import React from 'react';
import MovieMatchPhoto from "../../assets/images/movie-match-screenshot.png";
import MediaGemsPhoto from "../../assets/images/media-gems-screenshot.png";
import WeatherDashboardPhoto from "../../assets/images/weather-dashboard-screenshot.png";
import READMEGeneratorPhoto from "../../assets/images/README-generator-screenshot.png";
import NotetakerPhoto from "../../assets/images/notetaker-screenshot.png";
import PasswordGeneratorPhoto from "../../assets/images/password-generator-screenshot.png";
import PokeBuffPhoto from "../../assets/images/pokebuff-screenshot.png";



function Projects () {

        return (
        
        <section className='projects-section'>
            
            <h1 className='projects-title'>Projects</h1>

            <div>

                <div className='projects-titles-top'>
                    <div>
                    <h2>Movie Match</h2>
                    <p>MOVIE MATCH DESCRIPTION</p>

                    </div>
                    
                    <div>
                    <h2>Media Gems</h2>
                    <p>MEDIA GEMS DESCRIPTION</p>
                    </div>

                </div>

                <div className='projects-top-row'>

                    <div className='projects-one'>

                        {/* buttons to project 1 (deployed site + github) */}
                        <a href='https://gabrielandrews.github.io/Group-project-movie-/'>
                            <button 
                                className='projects-button-one-site'
                                style={{ 
                                    backgroundImage: `url("${MovieMatchPhoto}")`,
                                    backgroundPosition: "left 26.5% center",
                                    backgroundSize: "65vw",
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
                                    backgroundPosition: "right 30% center",
                                    backgroundSize: "65vw",
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

                <div className='projects-titles-middle'>
                    <div>
                    <h2>Weather Dashboard</h2>
                    <p>WEATHER DASHBOARD DESCRIPTION</p>
                    </div>

                    <div>
                    <h2>README Generator</h2>
                    <p>README GENERATOR DESCRIPTION</p>
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

                <div className='projects-titles-bottom'>
                    <div>
                        <h2>PokeBuff</h2>
                        <p>POKEBUFF DESCRIPTION</p>
                    </div>
                    
                    <div>
                    <h2>Password Generator</h2>
                    <p>PASSWORD GENERATOR DESCRIPTION</p>
                    </div>
                    
                </div>

                <div className='projects-bottom-row'>

                    <div className='projects-five'>

                        {/* buttons to project 5 (deployed site + github) */}
                        <a href='https://fierce-mesa-57913.herokuapp.com/'>
                            <button 
                                className='projects-button-five-site'
                                style={{ 
                                    backgroundImage: `url("${PokeBuffPhoto}")`,
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
                        
                        <a href='https://github.com/ekball/poke-buff'>
                            <button 
                                className='projects-button-five-repo'
                                style={{ 
                                    backgroundImage: `url("${PokeBuffPhoto}")`,
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