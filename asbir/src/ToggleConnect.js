import React, { useState, useEffect} from 'react'
import ROSLIB from 'roslib'
import placeholder from './assets/video-placeholder.png'

import './ToggleConnect.css'

let image_on = true;

let ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

const delay = ms => new Promise(res => setTimeout(res, ms));

let image_topic = new ROSLIB.Topic({
  ros: ros, 
  name: '/D400/color/image_raw/compressed',
  messageType: 'sensor_msgs/msg/CompressedImage'
});

let segmented_image_topic = new ROSLIB.Topic({
  ros: ros, 
  name: '/output_compress',
  messageType: 'sensor_msgs/msg/CompressedImage'
});

let system_toggle_topic = new ROSLIB.Topic({
  ros: ros, 
  name: '/ToggleSystem',
  messageType: 'std_msgs/Bool',
  isAdvertised: true
});

let return_to_start_topic = new ROSLIB.Topic({
  ros: ros,
  name: 'targetPoint',
  messageType: 'geometry_msgs/PointStamped',
  isAdvertised: true
});

const image_sub = () => {
  image_topic.subscribe(function(message) {
    document.getElementById('image').src = "data:image/jpg;base64," + message.data;
  })
}

const segmented_image_sub = () => {
  segmented_image_topic.subscribe(function(message) {
    document.getElementById('segmented_image').src = "data:image/jpg;base64," + message.data;
  })
}

const toggleCameraFeed = () => {
  if (image_on === true) {
    console.log('Image Off!')

    image_topic.unsubscribe();
    segmented_image_topic.unsubscribe();

    document.getElementById('image').src = placeholder;
    document.getElementById('segmented_image').src = placeholder;


    image_on = false;
  }
  else {
    console.log('Image On!')


    image_sub(ros);
    segmented_image_sub(ros);


    image_on = true;
  }
}

const ToggleConnect = () => {

  const [clicked, setClicked] = useState(0);

    return (
        <div>
            <div className='toggle_row_button'>
              <button style={{backgroundColor: (clicked ? "yellow" : "green"), color: (clicked ? "black" : "white")}}
              id='toggle_btn' onClick={() =>{
                let toggle_msg = new ROSLIB.Message({data : true}); 
                system_toggle_topic.publish(toggle_msg)
                document.getElementById('toggle_btn').disabled = true;
                setClicked(1);
              }}><b>Run ASBIR Launch File</b></button>

              <button style={{backgroundColor: "blue", color: "white"}}
              id='toggle_btn' onClick={() =>{
                let toggle_msg = new ROSLIB.Message({data : true}); 
                system_toggle_topic.publish(toggle_msg)
                document.getElementById('toggle_btn').disabled = true;
                setClicked(1);
              }}><b>Placeholder Button for Tanner</b></button>
            </div>

            {/* <button onClick={() => {
              image_topic.unsubscribe()
            }}>Toggle Camera Feed</button> */}
            <div className='toggle_row'>
              <div>
                <h3>Raw Image</h3>
                <img className='image-wrapper' alt='placeholder for ASBIR' id="image" src={placeholder} style={{hover: 'cursor', width: 712, height: 512}}onClick={toggleCameraFeed}></img>
              </div>

              <div>
                <h3>Segmented Image</h3>
                <img className='image-wrapper' alt='placeholder for ASBIR' id="segmented_image" src={placeholder} style={{hover: 'cursor', width: 712, height: 512}}onClick={toggleCameraFeed}></img>
              </div>
            </div>
            
            <div id="viewer"></div>

            <button style={{backgroundColor: "red", marginTop: "2rem", color: "white"}} onClick={() =>{
              let return_msg = new ROSLIB.Message({
                header : {
                  stamp : {
                    sec : 0.0,
                    nanosec: 0.0 
                  },
                  frame_id : 'odom_frame'
                },
                point : {
                  x : 0.0,
                  y : 0.0,
                  z : 0.0
                }
              })
              return_to_start_topic.publish(return_msg)
              // ros.on('connection', function() {
              //   console.log('Connected to websocket server.');
              // });
            
              // ros.on('error', function(error) {
              //   console.log('Error connecting to websocket server: ', error);
              // });
            
              // ros.on('close', function() {
              //   console.log('Connection to websocket server closed.');
              // });
              
            }}><b>Return ASBIR Back To Starting Location</b></button><br />
            
        </div>
    );
}

export default ToggleConnect