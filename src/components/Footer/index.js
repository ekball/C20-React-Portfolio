// import React from "react";
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';

// function Footer() {

//     return(

//         <div className="footer-section flex justify-evenly content-center p-2">


//             <a href="mailto:ekylesball@gmail.com">ekylesball@gmail.com</a>

//             <a href='https://github.com/ekball' className="footer-link hover:text-orange-400">GitHub</a>

//             <a href='https://stackexchange.com/users/22776564/ekball' className="footer-link hover:text-orange-400">Stack Overflow</a>

//             <a href='https://www.linkedin.com/in/kyles-ball' className="footer-link hover:text-orange-400">LinkedIn</a>
        
//         </div>
//     );
// }




export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 1500, position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value} onChange={handleChange} showLabels className='flex justify-evenly footer-section'>

        <BottomNavigationAction
            href="mailto:ekylesball@gmail.com"
            label="ekylesball@gmail.com"
            value="email"
            icon={<EmailIcon />}
        />
        <BottomNavigationAction
            href="https://github.com/ekball"
            label="Github"
            value="github"
            icon={<GitHubIcon/>}
        />
        
        <BottomNavigationAction 
            href="https://www.linkedin.com/in/kyles-ball"
            label="LinkedIn" 
            value="linkedin" 
            icon={<LinkedInIcon />} 
        />

    </BottomNavigation>

  );
}

// export default Footer;
