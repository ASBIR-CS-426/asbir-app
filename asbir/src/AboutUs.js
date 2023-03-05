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


export const AboutUs = () => {
    return (
    <>
        <div className="about-section">
            <h1 className='about-us-header'>About ASBIR</h1>
        </div>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>Meet the team!</h2>
        <div className="row">
            <div className="column">
            <div className="image-card">
                <img src={annette} alt="Annette selfie" style={{ width: "100%" }} />
                <div className="container">
                <h2>Annette McDonough</h2>
                <p style={{fontSize : "1.25rem"}}>Annette primarily worked on the path finding and planning algorithms and led the effort on the deep learning model</p>
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
                <p style={{fontSize : "1.25rem"}}>Brock primarily worked on the website and on ROS integration into the application</p>
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
                <p style={{fontSize : "1.25rem"}}>Tanner led all things ASBIR locomotion and planning while also leading the effort on ROS</p>
                <p>trichnak72399@gmail.com</p>
                <p>
                    <button className="button" onClick={() => {window.location.href = "mailto:trichnak72399@gmail.com"}}>Contact Tanner</button>
                </p>
                </div>
            </div>
            </div>
        </div>

        <div className='row' style={{paddingBottom : "1.25rem", paddingTop: "1.25rem", display: "flex", flexDirection: "row", gap: "1.5%", justifyContent: "center"}}>
            <div className='video-column-left'>
                <video controls autoPlay loop muted>
                    <source src={ASBIR_Livestream} type="video/mp4"></source>
                </video>
            </div>
            <div className='video-column-right'>
                <video controls autoPlay loop muted>
                    <source src={ASBIR_Model} type="video/mp4"></source>
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
                <p style={{fontSize : "1.25rem"}}>Devrin is one of the primary instructors apart of the CS 426 team and has immense project management experience</p>
                <p>dlee@unr.edu</p>
                <p>
                    <button className="button" onClick={() => {window.location.href = "mailto:dlee@unr.edu"}}>Contact Devrin</button>
                </p>
                </div>
            </div>
            </div>
        </div>
    </>
    )
};