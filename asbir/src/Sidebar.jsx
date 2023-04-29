import React, { useState, useCallback } from "react";
import { StatusCard } from "./StatusCard";
import ROSLIB from 'roslib'

import './Sidebar.css'
// import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const delay = ms => new Promise(res => setTimeout(res, ms));

let initialCardData = {
  "Model": { status: "green", title: "Model", description: "This node corresponds to the actual ASBIR bot itself", count: 0 },
  "Graph": { status: "green", title: "Graph", description: "This node corresponds to the graph node that ASBIR creates", count: 0 },
  "BuildPath": { status: "green", title: "BuildPath", description: "This node corresponds to ASBIR's path building algorithm", count: 0 },
  "PathController": { status: "green", title: "PathController", description: "This node corresponds to the controller module that oversees the paths", count: 0 },
  "PotentialField": { status: "green", title: "PotentialField", description: "This node corresponds to the potential field module that ASBIR uses to navigate", count: 0 },
  "StatusListener": { status: "green", title: "StatusListener", description: "This node corresponds to the status listener module that is the backbone of the status checker", count: 0 },
  "D400/D400": { status: "green", title: "D400 Camera", description: "This node corresponds to the D400 camera", count: 0 },
  "T265/T265": { status: "green", title: "T265 Camera", description: "This node corresponds to the T265 camera", count: 0 },
  "rosbridge_websocket": { status: "green", title: "rosbridge_websocket", description: "This node corresponds to the rosbride module that is used for web <-> ros communication", count: 0 },
  "ROSAPI": { status: "green", title: "ROSAPI", description: "This node corresponds to the ROSAPI", count: 0 },
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checker, setChecker] = useState(1);
  const [nodeTopicOutput, setNodeTopicOutput] = useState([]);

  let ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });

  var nodesClient = new ROSLIB.Service({
    ros : ros,
    name : '/rosapi/nodes',
    serviceType : 'rosapi/Nodes'
  });

  var request = new ROSLIB.ServiceRequest();

  nodesClient.callService(request, async function(result) {
    await delay(1500)
    let temp_nodes = result['nodes']
    let nodes = []
    temp_nodes.forEach(node => nodes.push(node.toLowerCase()));
    // console.log(nodes)
    setNodeTopicOutput(nodes);
    // console.log("Getting topics...", result);
  });

  // const node_sub = () => {
  //   node_topic.subscribe(function(message) {
  //     let output = message.data;
  //     output = output.replaceAll("'", "");
  //     output = output.toLowerCase();
  //     output = output.substring(1, output.length-1);
  //     output = output.split(', ')
  //     setNodeTopicOutput(output);
  //     setChecker(2);
  //   })
  // }

  // let node_topic = new ROSLIB.Topic({
  //   ros: ros, 
  //   name: '/activeNodes',
  //   messageType: 'std_msgs/String'
  // });

  // node_sub();

  // const topic_sub = () => {
  //   node_topic.subscribe(function(message) {
  //     console.log('Received message on ' + image_topic.name);
  //   })
  // }

  // let node_topic = new ROSLIB.Topic({
  //   ros: ros, 
  //   name: '/activeNodes',
  //   messageType: 'std_msgs/String'
  // });

  // document.getElementById('my_image').src = "data:image/jpg;base64," + message.data;

  const cardData = ["Model", "Graph", "BuildPath", "PathController", "PotentialField", "D400/D400", "T265/T265", "rosbridge_websocket", "ROSAPI"]

  const renderCards = () => {
    return cardData.map((card, index) => {
      if (nodeTopicOutput.includes('/' + card.toLowerCase())) {
        initialCardData[card].status = "green";
        initialCardData[card].count = 0;
      }
      else {
        // console.log(initialCardData[card].status);
        if (initialCardData[card].count > 15) {
          initialCardData[card].status = "red";
        }
        else {
          initialCardData[card].status = "yellow";
        }
        initialCardData[card].count = initialCardData[card].count + 1;
        // if (initialCardData[card].status === "yellow" || initialCardData[card].status === "red") {
        //   initialCardData[card].status = "red";
        // }
        // else {
        //   initialCardData[card].status = "yellow";
        // }
      }
      return <StatusCard key={index} status={initialCardData[card].status} title={initialCardData[card].title} description={initialCardData[card].description} />;
      // return <StatusCard key={index} status={initialCardData[card].status} title={initialCardData[card].title} description={initialCardData[card].description} />;
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <button
        style={{
          position: "fixed",
          top: "20px",
          left: isOpen ? "25rem" : "2rem",
          transition: "left 0.5s ease-in-out",
          paddingBottom: 0,
          paddingTop: 0,
          backgroundColor: "white",
        }}
        onClick={toggleSidebar}
      >
        {/* {isOpen ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />} */}
      </button>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {renderCards()}
      </div>
    </>
  );
};