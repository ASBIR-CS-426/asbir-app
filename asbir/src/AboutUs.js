import React from 'react';

import './AboutUs.css'

import brock from './assets/brock.JPG'
import annette from './assets/annette.jpg'
import tanner from './assets/tanner.jpg'

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
    </>
    )
};