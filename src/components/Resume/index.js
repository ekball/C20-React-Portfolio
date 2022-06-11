import React from "react";

import BootcampBadge from "../../assets/images/bootcampbadge.png";

import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Resume() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000',
            },
            secondary: {
                main: '#FED7AA',
            }
        }
    });

    const skills1 = [
        'React.js',
        'Javascript', 
        'MERN Stack',
        'GraphQL',
        'Node.js',
        'MongoDB',
        'Express.js',
        'NoSQL', 
        'GitHub'
    ]

    const skills2 = [
        
        'CSS', 
        'DRY Methods',
        'OOP', 
        'MVC Paradigm',
        'Progressive Web Apps',
        'HTML',
        'Tailwind',
        'Agile Methodology',
        'ORM',

    ]

    return(

        <div className="flex justify-evenly mt-10">

            <div className="flex-column justify-center align-evenly mb-2">

                <div className="flex justify-center">
                    <ThemeProvider theme={theme} className='flex-column flex-wrap justify-center'>

                        <Button variant='contained' size="large" color="secondary" endIcon={<DownloadIcon className="animate-bounce"/>}>
                            <a href={require(`../../assets/docs/resume.pdf`)} download="resume-erick-ball" className="flex justify-center p-5" >
                                Download My Resume Here
                            </a>
                        </Button>

                    </ThemeProvider>
                </div>

                <div className="flex justify-center mt-10">

                        <a href='https://www.credly.com/badges/862ef38e-16b4-4bd3-ab20-09a4d4c2458b/linked_in?t=rbmvsx' className="flex-column justify-center" >
                            <img src={BootcampBadge} alt="Kyles' Boot Camp Badge" className="h-64"></img>
                        </a>
                    
                </div>

            </div>

            <div className="flex-column justify-center mb-2">

                <h1 className="underline decoration-solid decoration-1 underline-offset-2 text-xl flex justify-center pb-5">
                        Skills:
                </h1>

                <div className="flex">

                    <ThemeProvider theme={theme} className='flex-column flex-wrap justify-center'>

                    <div className="flex-column w-36">
                        {skills1.map(skill => {
                            return <Chip label={skill} color='secondary' className="m-1"/>
                        })}
                    </div>

                    <div className="flex-column w-36">
                        {skills2.map(skill => {
                            return <Chip label={skill} color='secondary' className="m-1"/>
                        })}
                    </div>
                    </ThemeProvider>
                </div>
       
            </div>

        </div>
    );
}

export default Resume;