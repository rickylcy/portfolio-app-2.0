import "./main.css"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Img from '../images/profile_pic.jpg'
import CV from '../docs/resume.pdf'
function Home() {
  return (<div id="container--main">
  <section id="wrapper--hero" class="section--page">
  <Avatar
        alt="Ricky"
        src={Img}
        sx={{ width: 128, height: 128 }}
      />  

      <div>
          <h1 id="user-name">Ricky Lau</h1>
          <p id="bio">Passionate and diligent developer, graduated at <a href="https://www.qut.edu.au" target="_blank">QUT</a> with the Bachelor of Computer Science. Currently looking for Junior Web Developer position in the IT industry. </p>
          <p id="email">👉 lauyin8183@gmail.com</p>
      </div>  
  </section>

  <section class="section--page">

      <div id="socials--list">
          <a href="https://www.linkedin.com/in/ching-yin-lau-457825206/" target="_blank">Linkedin</a>
          <a href="https://github.com/rickylcy" target="_blank">Github</a>
          <a href={CV} target="_blank">Download Resume</a>
      </div>
  </section>

  <section class="section--page">
      <h2>More About Me</h2>
      <ul id="qualifications--list">
          <li>✔️ Continuous self-learning on modern tech stack</li>
          <li>✔️ Currently focusing on React with MERN stack and Redux</li>
          <li>✔️ 1 year of internship experience under QUT Capstone Project</li>
          <li>✔️ Native Mandarin and Cantonese speaker!</li>
      </ul>
  </section>

  <section class="section--page">
      <h2>Tech stack</h2>

      <div id="wrapper--techstack__items">
          <div class="card--techstack"><span>React, TypeScript, Redux</span></div>
          <div class="card--techstack"><span>JavaScript, NodeJS</span></div>
          <div class="card--techstack"><span>MongoDB, MySQL</span></div>
          <div class="card--techstack"><span>Express, RestAPI</span></div>
      </div>
  </section>

  <section id="work-history-wrapper" class="section--page">
      <h2>Experience</h2>

      <div class="line-break"></div>
      <div class="card--work-history">
          <strong>🚧 WEB DEVELOPER INTERN | LEAP-IN!</strong>
          <p>06/2020 - 06/2021</p>
          <p>Designed and developed a feedback mechanism on existing app. This feature provided an interface for customers to give feedback on a provider they used and also view feedback from other customers when choosing provider.</p>
          <ul>
              <li>Designed prototype & pitched original idea for feedback feature.</li>
              <li>Implement feedback mechanism on client's existing app as a team of 4.</li>
              <li>Liaised with client and develop the mechanism with React, AWS Lambda, Serverless, Bitrise and MySQL</li>
          </ul>
      </div>

      <div class="line-break"></div>

      <div class="card--work-history">
          <strong>🚧 WEB DEVELOPER | PERSONAL PROJECT</strong>
          <p>11/2020 - Present</p>
          <p>Enhancing web development skill by creating different app for practice and keep track on Github repo.</p>
          <ul>
              <li>Full stack development with MERN stack</li>
              <li>React with Redux library to manage application state</li>
              <li>REST API implementation with routes</li>
              <li>Database communication with MySQL</li>
              <li>Material UI for user interface design</li>
          </ul>
      </div>

      <div class="line-break"></div>

      <div class="card--work-history">
          <strong>🚧 ALL-ROUNDER | HANAICHI</strong>
          <p>11/2020 - Present</p>
          <p>Managed bustling store, requiring exceptional customer service, dispute resolution and time management.</p>
          <ul>
              <li>Supervision and mentoring of staff members</li>
              <li>Food preparation under food safety requirements</li>
              <li>Best effort for customers' satisfication</li>
          </ul>
      </div>

      <div class="line-break"></div>

  </section>

  <section class="section--page">
      <h2>Projects & Accomplishments</h2>

      <div class="card--project">
          <a href="project1.html"><span>🏆 </span></a>
      </div>

      <div class="card--project">
          <a href="project1.html" ><span>🏆 </span></a>
      </div>

      <div class="card--project">
          <a href="project1.html" ><span>🏆 </span></a>
      </div>

      <div class="card--project">
          <a href="project1.html"><span>🏆 </span></a>
      </div>

  </section>


</div>);
}

export default Home;
