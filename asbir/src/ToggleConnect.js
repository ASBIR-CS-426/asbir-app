import React, { useState, useEffect} from 'react'
import ROSLIB from 'roslib'
import { PointCloud2, Viewer, Grid } from 'ros3d';
import placeholder from './assets/video-placeholder.png'
import * as THREE from 'three';

import './ToggleConnect.css'

let image_on = true;

const ROS3D = window.ROS3D;

let ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

const delay = ms => new Promise(res => setTimeout(res, ms));

const image_sub = () => {
  image_topic.subscribe(function(message) {
    console.log('Received message on ' + image_topic.name);
    document.getElementById('my_image').src = "data:image/jpg;base64," + message.data;
  })
}

let image_topic = new ROSLIB.Topic({
  ros: ros, 
  name: '/CompressedImage',
  messageType: 'sensor_msgs/CompressedImage'
});

// const pointcloud_sub = () => {
//   let output;
//   pointcloud_topic.subscribe(function(message) {
//     // output = message.data;
//     console.log(message)
//   })
//   return output
// }

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
})

// let pointcloud_topic = new ROSLIB.Topic({
//   ros: ros, 
//   name: '/D435i/depth/color/points',
//   messageType: 'sensor_msgs/PointCloud2',
//   isAdvertised: true
// });

// const pointcloud = async () => {
//   await delay(3000);
//   let viewer = new Viewer({
//     divID : 'viewer',
//     width : 800,
//     height : 600,
//     antialias : true
//   });
  
//   // Setup a client to listen to TFs.
//   let tfClient = new ROSLIB.TFClient({
//     ros : ros,
//     angularThres : 0.01,
//     transThres : 0.01,
//     rate : 10.0,
//     fixedFrame : '/T265_odom_frame'
//   });
//   console.log(tfClient)

//   let cloudClient = new PointCloud2({
//       ros: ros,
//       tfClient: tfClient,
//       rootObject: viewer.scene,
//       topic: '/D435i/depth/color/points',
//       material: { size: 0.5, color: 0xffffff },
//       max_pts: 5000000,
//   });
//   console.log(cloudClient)
//   console.log(viewer.scene)
//   viewer.addObject(cloudClient);
//   viewer.addObject(new Grid);
// }

// pointcloud();
// // image_sub();
// pointcloud_sub();

const toggleCameraFeed = () => {
  if (image_on === true) {
    console.log('Image Off!')
    image_topic.unsubscribe();
    document.getElementById('my_image').src = placeholder;
    image_on = false;
  }
  else {
    console.log('Image On!')
    image_sub(ros);
    image_on = true;
  }
}

const ToggleConnect = () => {

  const [clicked, setClicked] = useState(0);

    return (
        <div>
            <div className='toggle_row'>
              <button style={{backgroundColor: (clicked ? "yellow" : "green")}}
              id='toggle_btn' onClick={() =>{
                let toggle_msg = new ROSLIB.Message({data : true}); 
                system_toggle_topic.publish(toggle_msg)
                document.getElementById('toggle_btn').disabled = true;
                setClicked(1);
                console.log("HELLO")
                
              }}><b>Run ASBIR Launch File</b></button>  <br />

              <button style={{backgroundColor: "blue"}}
              id='toggle_btn' onClick={() =>{
                let toggle_msg = new ROSLIB.Message({data : true}); 
                system_toggle_topic.publish(toggle_msg)
                document.getElementById('toggle_btn').disabled = true;
                setClicked(1);
                console.log("HELLO")
                
              }}><b>Run ASBIR Launch File</b></button>  <br />
            </div>

            {/* <button onClick={() => {
              image_topic.unsubscribe()
            }}>Toggle Camera Feed</button> */}
            <div className='toggle_row'>
              <div className='image-wrapper' style={{hover: 'cursor'}}onClick={toggleCameraFeed}>
                <h3>Raw Image</h3>
                <img alt='placeholder for ASBIR' id="my_image" src={placeholder}></img>
              </div>

              <div className='image-wrapper' style={{hover: 'cursor'}}onClick={toggleCameraFeed}>
                <h3>Segmented Image</h3>
                <img alt='placeholder for ASBIR' id="my_image" src={placeholder}></img>
              </div>
            </div>
            
            <div id="viewer"></div>

            <button style={{backgroundColor: "red", marginTop: "2rem"}} onClick={() =>{
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



// const logPose = () => {
//   pose_topic.subscribe(function(message) {
//     console.log('position:', message.pose.pose.position.x, message.pose.pose.position.y, message.pose.pose.position.z)
//     console.log('orientation:', message.pose.pose.orientation.x, message.pose.pose.orientation.y, message.pose.pose.orientation.z, message.pose.pose.orientation.w)
//   })
// }

// let pose_topic = new ROSLIB.Topic({
//   ros: ros, 
//   name: '/T265/odom/sample',
//   messageType: 'nav_msgs/msg/Odometry'
// });

// logPose();