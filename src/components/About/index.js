import React from 'react';
import Avatar from '../../assets/images/avatar.jpeg';

function About() {
  return (

    <section className='about-section flex-wrap flex justify-center align-center bg-cyan-600 h-full'>

      <h1 id="about" className="about-title text-lg p-5">About Me</h1>

      <div className='flex justify-evenly align-center p-5'>

      <img src={Avatar} className='h-48'/>

      <p className='flex flex-wrap w-1/2'>
            Hello, my name is Kyles and I am currently a dog trainer at Petco. I have been training dogs for about 4 years now. I graduated from UNC-Chapel Hill in 2017 with a B.A. in German Studies and a minor in Linguistics. 
            Coding has always been an interest of mine, but I did not have the opportunity to learn it in a formal environment until I enrolled in the UNC Coding Bootcamp in Fall 2021. 
            I would like to find a position that revolves around web development or creating independent projects for people.
      </p>


      </div>

      
    </section>
  );
}

export default About;
