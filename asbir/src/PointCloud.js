import React, { useEffect, useRef } from 'react';
import ROSLIB from 'roslib';
import * as THREE from 'three';

const PointCloud = ({ rosUrl, rosTopic }) => {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const pointCloudRef = useRef(null);

  useEffect(() => {
    const ros = new ROSLIB.Ros({ url: rosUrl });
    const pointCloudSubscriber = new ROSLIB.Topic({
      ros: ros,
      name: rosTopic,
      messageType: 'sensor_msgs/PointCloud2' // possibly change, ask Tanner
    });

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    rendererRef.current = renderer;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    const pointCloud = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ size: 0.1 }));
    scene.add(pointCloud);
    pointCloudRef.current = pointCloud;

    // Subscribe to point cloud topic
    pointCloudSubscriber.subscribe(pointCloudMessage => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointCloudMessage.width * pointCloudMessage.height * 3);
      let i = 0;
      for (let row = 0; row < pointCloudMessage.height; row++) {
        for (let col = 0; col < pointCloudMessage.width; col++) {
          const offset = (row * pointCloudMessage.row_step) + (col * pointCloudMessage.point_step);
          positions[i++] = pointCloudMessage.data[offset];
          positions[i++] = pointCloudMessage.data[offset + 1];
          positions[i++] = pointCloudMessage.data[offset + 2];
        }
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pointCloud.geometry.dispose();
      pointCloud.geometry = geometry;
    });

    return () => {
      pointCloudSubscriber.unsubscribe();
      scene.remove(pointCloudRef.current);
      rendererRef.current.dispose();
    };
  }, [rosUrl, rosTopic]);

  return <canvas ref={canvasRef} />;
};
