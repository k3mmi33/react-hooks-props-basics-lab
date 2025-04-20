import React from "react";
import Links from './Links';

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={props.github} target="_blank" rel="noopener noreferrer">
        {props.github}
      </a>
      <br />
      <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
        {props.linkedin}
      </a>
    </div>
  );
}

export default About;