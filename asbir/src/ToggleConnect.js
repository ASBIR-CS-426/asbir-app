import React, { useState, useEffect} from 'react'
import ROSLIB from 'roslib'
import placeholder from './assets/video-placeholder.png'

let image_on = true;

let ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

let image_topic = new ROSLIB.Topic({
  ros: ros, 
  name: '/CompressedImage',
  messageType: 'sensor_msgs/CompressedImage'
});

image_topic.subscribe(function(message) {
  console.log('Received message on ' + image_topic.name);
  document.getElementById('my_image').src = "data:image/jpg;base64," + message.data;
  // image_topic.unsubscribe()
})

const toggleCameraFeed = () => {
  if (image_on === true) {
    console.log('Image Off!')
    image_topic.unsubscribe();
    document.getElementById('my_image').src = placeholder;
    image_on = false;
  }
  else {
    console.log('Image On!')
    image_topic.subscribe(function(message) {
      console.log('Received message on ' + image_topic.name);
      document.getElementById('my_image').src = "data:image/jpg;base64," + message.data;
    })
    image_on = true;
  }
}

const ToggleConnect = () => {

    return (
        <div>
            <p>Hello World!</p>
            <b>Simple connect:  </b><button onClick={() =>{
            
              ros.on('connection', function() {
                console.log('Connected to websocket server.');
              });
            
              ros.on('error', function(error) {
                console.log('Error connecting to websocket server: ', error);
              });
            
              ros.on('close', function() {
                console.log('Connection to websocket server closed.');
              });
              
            }}>Toggle Connect</button>  <br />

            {/* <button onClick={() => {
              image_topic.unsubscribe()
            }}>Toggle Camera Feed</button> */}
            <div style={{paddingTop: '5rem'}}onClick={toggleCameraFeed}>
              <img alt='placeholder for ASBIR' id="my_image" src={placeholder}></img>
            </div>
        </div>
    );
}

export default ToggleConnect



