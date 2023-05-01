import React, { useState, useEffect } from 'react';
import ROSLIB from 'roslib'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './RobotLocationChart.css'

let ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

let pose_topic = new ROSLIB.Topic({
  ros: ros, 
  name: '/T265/pose/sample',
  messageType: 'nav_msgs/msg/Odometry'
});
let x_temp;
let y_temp;
let z_temp;

const logLocation = () => {
  pose_topic.subscribe(function(message) {
    // console.log(message.pose.pose.position.x)
    // console.log(message)
    x_temp = message.pose.pose.position.x
    y_temp = message.pose.pose.position.y
    z_temp = message.pose.pose.position.z
  })
}

logLocation();




let counter = 0;
export const RobotLocationChart = () => {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const [zData, setZData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newXData = {
        name: counter,
        value: x_temp,
      };
      const newYData = {
        name: counter,
        value: y_temp,
      };
      const newZData = {
        name: counter,
        value: z_temp,
      };
      counter++;
      setXData(prevData => [...prevData, newXData]);
      setYData(prevData => [...prevData, newYData]);
      setZData(prevData => [...prevData, newZData]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='chart_row'>
      <div className='chart_column'>
        <h1>X-Value for Positions</h1>
        <LineChart width={700} height={500} data={xData} style={{ backgroundColor: 'white', margin: 'auto' }} animationDuration={0}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" animationDuration={0} />
        </LineChart>
      </div>
      <div className='chart_column'>
        <h1>Y-Value for Positions</h1>
        <LineChart width={700} height={500} data={yData} style={{ backgroundColor: 'white', margin: 'auto' }} animationDuration={0}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" animationDuration={0} />
        </LineChart>
      </div>
    </div>
    <div>
      <h1>Z-Value for Positions</h1>
      <LineChart width={700} height={500} data={zData} style={{ backgroundColor: 'white', margin: 'auto'}} animationDuration={0}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" animationDuration={0} />
      </LineChart>
    </div>
    </>
  );
};
