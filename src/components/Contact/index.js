import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


function Contact() {

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    return (
        <section className='flex h-fit justify-around m-10'>
   
                <div className=''>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained' size="large" color="secondary" className="animate-bounce h-fit" startIcon={<EmailIcon/>} endIcon={<EmailIcon/>}>
                            <a href='mailto:ekylesball@gmail.com' className="flex justify-center p-5" >
                                Email me at ekylesball@gmail.com
                            </a>
                        </Button>
                    </ThemeProvider>
                </div>

                <div className=''>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained' size="large" color="secondary" className="animate-bounce h-fit" startIcon={<GitHubIcon/>} endIcon={<GitHubIcon/>}>
                            <a href="https://github.com/ekball" className="flex justify-center p-5" >
                                Link to my Github Profile
                            </a>
                        </Button>
                    </ThemeProvider>
                </div>

                <div className=''>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained' size="large" color="secondary" className="animate-bounce h-fit" startIcon={<LinkedInIcon/>} endIcon={<LinkedInIcon/>}>
                            <a href="https://www.linkedin.com/in/kyles-ball" className="flex justify-center p-5" >
                                Link to my LinkedIn Profile
                            </a>
                        </Button>
                    </ThemeProvider>
                </div>

        </section>
    );
    }

export default Contact;