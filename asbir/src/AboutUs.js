import React from 'react';

import './AboutUs.css'

import brock from './assets/brock.JPG'
import annette from './assets/annette.jpg'
import tanner from './assets/tanner.jpg'
import dave from './assets/dave.jpg'
import la from './assets/la.jpg'
import devrin from './assets/devrin.jpg'
import ASBIR_Model from './assets/ASBIR_Model.mp4'
import ASBIR_Livestream from './assets/ASBIR_Livestream.mp4'
import Brock_Pose from './assets/Brock_Pose.mp4'
import ASBIR_Pose from './assets/VideoOfPoseProjection.mp4'

import { Link } from "react-router-dom"


export const AboutUs = () => {
    return (
    <>
        <div className="about-section">
            <div className='fixed-app-send'>
                <Link alt='link that sends a user to the login page' className="link-btn" to="/login"><h3>Go To App!</h3></Link>
            </div>
            <h1 className='about-us-header'>About ASBIR (Team 03)</h1>
            <h2>CS 426 Senior Project in Computer Science, Spring 2023, at UNR, CSE Department</h2>
        </div>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>Meet the team!</h2>
        <div className="row">
            <div className="column">
            <div className="image-card">
                <img src={annette} alt="Annette selfie" style={{ width: "100%" }} />
                <div className="container">
                <h2>Annette McDonough</h2>
                <p style={{fontSize : "1.25rem"}}>Annette worked on the path finding algorithms and <b>led the effort on the deep learning model</b></p>
                <p>amcdonough@nevada.unr.edu</p>
                <p>
                    <button className="button" onClick={() => {window.location.href = "mailto:amcdonough@nevada.unr.edu"}}>Contact Annette</button>
                </p>
                </div>
            </div>
            </div>
            <div className="column">
            <div className="image-card">
                <img src={brock} alt="Brock selfie" style={{ width: "100%" }} />
                <div className="container">
                <h2>Brock Patchin</h2>
                <p style={{fontSize : "1.25rem"}}>Brock <b>developed the entire web application</b> and led the effort on ROS intergration into the website</p>
                <p>bpatchin@nevada.unr.edu</p>
                <p>
                    <button className="button" onClick={() => {window.location.href = "mailto:bpatchin@nevada.unr.edu"}}>Contact Brock</button>
                </p>
                </div>
            </div>
            </div>
            <div className="column">
            <div className="image-card">
                <img src={tanner} alt="Tanner selfie" style={{ width: "100%" }} />
                <div className="container">
                <h2>Tanner Richnak</h2>
                <p style={{fontSize : "1.25rem"}}>Tanner <b>led all things ASBIR locomotion and planning</b> while also leading the effort on ROS</p>
                <p>trichnak72399@gmail.com</p>
                <p>
                    <button className="button" onClick={() => {window.location.href = "mailto:trichnak72399@gmail.com"}}>Contact Tanner</button>
                </p>
                </div>
            </div>
            </div>
        </div>

        <div className='project-description'>
            <div className='project-description-header'>
                <h1>Project Description</h1>
            </div>
            <div className='project-description-section'>
            <section>
                <h2>Main Goals</h2>
                <p>The project's primary goal is to advance civil engineering with autonomous steel bridge inspectors. Using robots to climb dangerous bridges will allow for safer inspections. Additionally, the goal is to minimize the potential for inspector error, therefore nullifying the potential of catastrophic events caused by bridge collapses.</p>
            </section>
            <section>
                <h2>Intended Audience</h2>
                <p>The intended audience is civil engineers specializing in bridge infrastructure and inspections. Moreover, the implementation of ASBIR at a national level is also much more cost effective and efficient, therefore decreasing infrastructure maintenance costs while also upholding high levels of safety.</p>
            </section>
            <section>
                <h2>Main Functionality</h2>
                <p>The primary functionality of the Autonomous Steel Bridge Inspection Robot (ASBIR) is to allow the inspectors to stay safely on the ground while ASBIR does the dangerous work. The inspector will choose a location on the bridge they would like inspected; ASBIR will traverse the bridge to the location while scanning and sending data back to the UI for the inspector to view. ASBIR does not only inspect the location the inspector selected, but also will inspect the entire time traversing to the location and transmitting this data back to the subject matter experts on the ground. Put succinctly, the main functionality of ASBIR centers around autonomous navigation and inspection of ferromagnetic structures.</p>
            </section>
            <section>
                <h2>Technologies + Hardware</h2>
                <ul>
                    <li>Web Interface: React.js, HTML, CSS, TypeScript, Node.js, Firebase, Styled Components, ROSBridge, ROSlibjs, etc.</li>
                    <li>Deep Learning Model: Python, ENet, SegNet, CUDA, and TensorFlow.</li>
                    <li>Autonomous Navigation and Locomotion: A* algorithm for pathfinding. ROS2 as Operating System.</li>
                    <li>System Hardware Components: Realsense T265 and D435i for localization, imaging and mapping. Latte Panda for computing and I/O.</li>
                </ul>
            </section>
            </div>

        </div>

        <div class="video-grid">
            <div class="video-item">
                <h1>Our first time getting the video livestream to work!</h1>
                <video controls autoPlay loop muted>
                    <source src={ASBIR_Livestream} type="video/mp4"></source>
                </video>
            </div>
            <div class="video-item">
                <h1>Our first time getting the 3D Model to work!</h1>
                <video controls autoPlay loop muted>
                    <source src={ASBIR_Model} type="video/mp4"></source>
                </video>
            </div>
            <div class="video-item">
                <h1>Brock playing with ASBIR</h1>
                <video controls autoPlay loop muted>
                    <source src={Brock_Pose} type="video/mp4"></source>
                </video>
            </div>
            <div class="video-item">
                <h1>The pose of ASBIR while Brock is moving it</h1>
                <video controls autoPlay loop muted>
                    <source src={ASBIR_Pose} type="video/mp4"></source>
                </video>
            </div>
        </div>

        <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>Meet the advisors!</h2>
        <div className="row">
            <div className="column">
            <div className="image-card">
                <img src={dave} alt="Headshot of Dave" style={{ width: "100%" }} />
                <div className="container">
                <h2>David Feil-Seifer</h2>
                <h3>Instructor for CS 426 (Professor for the UNR CSE Department)</h3>
                <p style={{fontSize : "1.25rem"}}>Dave (Dr. Feil-Seifer) is the other primary instructor for the CS 426 teaching team and is an avid roboticist</p>
                <p>dave@cse.unr.edu</p>
                <p>
                    <button className="button" onClick={() => {window.location.href = "mailto:dave@cse.unr.edu"}}>Contact Dave</button>
                </p>
                </div>
            </div>
            </div>
            <div className="column">
            <div className="image-card">
                <img src={la} alt="Headshot of Dr. La" style={{ width: "100%" }} />
                <div className="container">
                <h2>Hung (Jim) La</h2>
                <h3>Our External Advisor (Professor for the UNR CSE Department)</h3>
                <p style={{fontSize : "1.25rem"}}>Dr. La is our external advisor for our project and has helped immensely in all the devlopment of ASBIR</p>
                <p>hla@unr.edu</p>
                <p>
                    <button className="button" onClick={() => {window.location.href = "mailto:hla@unr.edu"}}>Contact Dr. La</button>
                </p>
                </div>
            </div>
            </div>
            <div className="column">
            <div className="image-card">
                <img src={devrin} alt="Devrin Lee Headshot" style={{ width: "100%" }} />
                <div className="container">
                <h2>Devrin Lee</h2>
                <h3>Instructor for CS 426 (Lecturer for the UNR CSE Department)</h3>
                <p style={{fontSize : "1.25rem"}}>Devrin is one of the primary instructors apart of the CS 426 team and has immense project management experience</p>
                <p>dlee@unr.edu</p>
                <p>
                    <button className="button" onClick={() => {window.location.href = "mailto:dlee@unr.edu"}}>Contact Devrin</button>
                </p>
                </div>
            </div>
            </div>
        </div>
        <div className="about-us-footer">
            <Link alt='link that sends a user to the login page' className="link-btn" to="/login"><h1>Go To App!</h1></Link>
        </div>
    </>
    )
};