import React from "react";
import "../../containers/main.css";
import ReactPlayer from 'react-player/youtube';
import { BrowserRouter as Router,
  Routes ,
  Route,Link } from 'react-router-dom';
import Report from '../../docs/FinalReport.pdf';
function Feedback() {
  return (
    <div id="container--main">
            <Link to="/">&#x2190; Go Back</Link>
            <h1>Build a feedback mechanism for NDIS provider (LeapIn!)</h1>
            <a href={Report} target="_blank">View Report</a>
            <p>LeapIn! provides Plan Management services for people part of the National Disability Insurance Scheme or NDIS which is a scheme sponsored by the Australian Government to fund people with disabilities. Therefore, Leap In! operates in the Disability Services Sector and provides a platform for participants of the program to be able to manage their NDIS Plans. </p>
            
            <p>For this project, the client sought to develop a provider feedback capturing and surfacing mechanism so the project was termed “Provider Ratings”. Such a mechanism was not limited to designing, developing and deploying a system on the website and on the mobile applications to let users give feedback about the services of a certain provider. It also required storing that feedback in the database of the company in the backend and then surfacing the feedback as per the requirements of the client. Therefore, apart from web, Android and iOS development, the development team had to also work with Application Programming Interface (API) communications to establish contact between front-end and back-end. </p>

            <ul>
                <li>Feedback Eliciting Mechanism </li>
                <li>Storing the collected feedback </li>
                <li>Surfacing the feedback </li>
            </ul>

            <ReactPlayer url='https://youtu.be/98JSu9AiNBc' />
                <ReactPlayer url='https://youtu.be/bTZ6EMtFFZk' />
        </div>
  );
}

export default Feedback;
