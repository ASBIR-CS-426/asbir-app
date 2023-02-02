import React, { useState, useEffect} from 'react'
import ROSLIB from 'roslib'

const ToggleConnect = () => {
    // let { isConnected, url, changeUrl, toggleConnection } = useROS();

    useEffect(() => {
    })

    return (
        <div>
            <p>Hello World!</p>
            <b>Simple connect:  </b><button onClick={() =>{
              var ros = new ROSLIB.Ros({
                url : 'ws://localhost:9090'
              });
            
              ros.on('connection', function() {
                console.log('Connected to websocket server.');
              });
            
              ros.on('error', function(error) {
                console.log('Error connecting to websocket server: ', error);
              });
            
              ros.on('close', function() {
                console.log('Connection to websocket server closed.');
              });
              
              var listener = new ROSLIB.Topic({
                ros : ros,
                name : '/listener',
                messageType : 'std_msgs/String'
              });
            
            listener.subscribe(function(message) {
                console.log('Received message on ' + listener.name + ': ' + message.data);
                listener.unsubscribe();
              });
            }}>Toggle Connect</button>  <br />

            <button onClick={() => {
              var ros = new ROSLIB.Ros({
                url : 'ws://localhost:9090'
              });
              let image_topic = new ROSLIB.Topic({
                ros: ros, 
                name: '/stream1/image/compressed',
                messageType: 'sensor_msgs/CompressedImage'
              });
              image_topic.subscribe(function(message) {
                document.getElementById('my_image').src = "data:image/jpg;base64," + message.data;
                image_topic.unsubscribe();
              });
            }}>Click for New Image</button>

            <img alt='placeholder for ASBIR' id="my_image" src="assets/img/placeholder.png"></img>

          {/* <p>
            <b>Simple connect:  </b><button onClick={() =>{
              toggleConnection()
              console.log(url)
            }}>Toggle Connect</button>  <br />
            <b>ROS url input:  </b><input name="urlInput" defaultValue={ url } onChange={event => changeUrl(event.target.value)} />  <br />
            <b>ROS url to connect to:  </b> {url}  <br />
            <b>Status of ROS:</b> { isConnected ? "connected" : "not connected" }   <br />
            <b>Topics detected:</b><br />
            { topics.map((topic, i) => <li key={i}>    {topic.path}</li> )} */}
        </div>
    );
}

export default ToggleConnect



