import React, { useEffect, useRef } from 'react';
import * as ROSLIB from 'roslib';
import * as ROS3D from 'ros3d';

export const PointCloud = () => {
  const canvasRef = useRef(null);
  const rosRef = useRef(null);
  const pointCloudRef = useRef(null);

  useEffect(() => {
    // Set up the ROS connection
    const ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090'
    });
    const pointCloudTopic = new ROSLIB.Topic({
      ros: ros,
      name: '/camera/depth/color/points',
      messageType: 'sensor_msgs/msg/PointCloud2'
    });

    // Create the PointCloud2 visualization
    const viewer = new ROS3D.Viewer({
      divID: canvasRef.current.id,
      width: canvasRef.current.offsetWidth,
      height: canvasRef.current.offsetHeight,
      antialias: true
    });
    const pointCloud = new ROS3D.PointCloud2({
      ros: ros,
      topic: '/camera/depth/color/points',
      material: { size: 0.1 }
    });
    viewer.scene.add(pointCloud);
    
    // Save references to the ROS connection and the PointCloud2 visualization
    rosRef.current = ros;
    pointCloudRef.current = pointCloud;

    // Subscribe to the PointCloud2 topic
    pointCloudTopic.subscribe((msg) => {
      console.log(msg)
      pointCloud.update(msg);
    });

    return () => {
      // Unsubscribe from the PointCloud2 topic and disconnect from ROS when the component is unmounted
      pointCloudTopic.unsubscribe();
      ros.close();
    };
  }, []);

  return <div id="point-cloud-canvas" ref={canvasRef} />;
}