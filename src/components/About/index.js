import React from 'react';
import ProfilePicture from '../../assets/images/profile-picture.jpeg';
import EmberSnow from '../../assets/images/ember1.jpeg';
import EmberGaze from '../../assets/images/ember2.jpeg';
import EmberBed from '../../assets/images/ember3.jpeg';
import EmberSleep from '../../assets/images/ember4.jpeg';
import EmberProfile from '../../assets/images/ember-profile.jpeg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import PetsIcon from '@mui/icons-material/Pets';
import ListItem from '@mui/material/ListItem';
import { orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function About() {

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='sidebar h-full w-96 projects'
    >
      <List className='flex-column'>
          <ListItem className='justify-center'>
            <img src={EmberSnow} className='h-48 w-1/2 mr-1 rounded-lg border-dashed border-2 border-orange-500'/>
            <img src={EmberGaze} className='h-48 w-1/2 ml-1 rounded-lg border-dashed border-2 border-orange-500'/>
          </ListItem>
          <ListItem  className='justify-center text-justify'>
            <p>Ember is a 7 year old Siberian Husky with bright red fur. She enjoys her loud squeaky toys, long walks when it isn't hot outside, and she is a glutton for treats.</p>
          </ListItem>
          <ListItem  className='justify-center'>
            <img src={EmberBed} className='h-52 w-96 rounded-lg border-dashed border-2 border-orange-500'/>
          </ListItem>
          <ListItem  className='justify-center'>
            <img src={EmberSleep} className='h-52 w-96 rounded-lg border-dashed border-2 border-orange-500'/>
          </ListItem>
          
      </List>
    </Box>
  );

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
    
    <section className='about-section flex-wrap flex justify-evenly align-center content-around m-12'>

      <div className='flex justify-evenly align-center about-pieces'>

        <div className='flex-column left-column'>

          <div className='inline-flex justify-center pl-5 about-images'>
            <img src={ProfilePicture} className='h-48 mr-2 rounded-lg border-solid border-2 border-black about-profile-pic'/>
            <img src={EmberProfile} className='h-48 ml-2 rounded-lg border-solid border-2 border-black about-ember-pic'/>
          </div>

          <div className='p-5'>
            {['Click here to learn about Ember'].map((anchor) => (
              <React.Fragment key={anchor}>
                <ThemeProvider theme={theme}>
                  <Button onClick={toggleDrawer(anchor, true)} variant='contained' color='secondary' startIcon={<PetsIcon />} endIcon={<PetsIcon />}>
                    {anchor}
                  </Button>
                </ThemeProvider>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

        </div>
        
          <p className='flex flex-wrap w-1/2 leading-loose'>
          Full stack developer proficient in building websites from a user story, preparing a minimally viable product, and then fine- tuning the small details into an efficiently running complete site. 
          Able to efficiently work in a group as well as independently in order to complete tasks on time. 
          Completed a web development bootcamp from UNC-Chapel Hill and earned a certificate in full stack web development. 
          The bootcamp provided me with a strong foundation in HTML, CSS, Javascript, React.js, and many other technologies.
          Prior experience gained through working as a Dog Trainer allows the delegation of tasks if necessary, while also multitasking across various duties. 
          Excel in solving unique and complex issues.
          </p>

      </div>



    </section>
  );
}

export default About;
