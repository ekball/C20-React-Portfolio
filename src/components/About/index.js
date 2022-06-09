import React from 'react';
import ProfilePicture from '../../assets/images/profile-picture.jpeg';
import EmberSnow from '../../assets/images/ember1.jpeg';
import EmberGaze from '../../assets/images/ember2.jpeg';
import EmberBed from '../../assets/images/ember3.jpeg';
import EmberSleep from '../../assets/images/ember4.jpeg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import PetsIcon from '@mui/icons-material/Pets';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
      className='sidebar h-full w-72'
    >
      <List className='flex-column'>
          <ListItem className='justify-center'>
            <img src={EmberSnow} className='h-48 w-32 mr-1 rounded-lg border-dashed border-2 border-orange-500'/>
            <img src={EmberGaze} className='h-48 w-32 ml-1 rounded-lg border-dashed border-2 border-orange-500'/>
          </ListItem>
          <ListItem  className='justify-center text-justify text-orange-300'>
            <p>Ember is a 7 year old Siberian Husky with bright red fur. She enjoys her loud squeaky toys, long walks when it isn't hot outside, and she is a glutton for treats.</p>
          </ListItem>
          <ListItem  className='justify-center'>
            <img src={EmberBed} className='h-48 rounded-lg border-dashed border-2 border-orange-500'/>
          </ListItem>
          <ListItem  className='justify-center'>
            <img src={EmberSleep} className='h-48 rounded-lg border-dashed border-2 border-orange-500'/>
          </ListItem>
          
      </List>
    </Box>
  );

  return (
    

    <section className='about-section flex-wrap flex justify-evenly align-center content-around m-12'>

      <h1 id="about" className="about-title text-lg">About Me</h1>

      <div className='flex justify-evenly align-center pt-5'>

        <div className='flex-column'>

          <img src={ProfilePicture} className='h-48 m-5'/>

          <div className='p-5'>
            {['Click here to learn about Ember'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)} variant='contained'startIcon={<PetsIcon />} endIcon={<PetsIcon />}>{anchor}</Button>
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

        <p className='flex flex-wrap w-1/2'>
        Full stack developer proficient in building websites from a user story, preparing a minimally viable product, and then fine- tuning the small details into an efficiently running complete site. 
        Able to efficiently work in a group as well as independently in order to complete tasks on time. 
        Prior experience gained through working as a Dog Trainer allows the delegation of tasks if necessary, while also multitasking across various duties. 
        Excel in solving unique and complex issues.
        </p>

      </div>



    </section>
  );
}

export default About;
