import React, { useEffect, useRef } from 'react';
import ROSLIB from 'roslib';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const PointCloud = ({ ros, topic, maxPoints = 100000, pointSize = 0.1, cameraPosition = { x: 0, y: 0, z: 2 }, backgroundColor = 0x000000, width = 800, height = 600 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = true;
    controls.enablePan = false;

    const material = new THREE.PointsMaterial({ size: pointSize });

    const pointCloud = new THREE.Points(new THREE.BufferGeometry(), material);
    scene.add(pointCloud);

    const listener = new ROSLIB.Topic({
      ros,
      name: topic,
      messageType: 'sensor_msgs/PointCloud2'
    });

    console.log(topic)

    let pointCount = 0;
    const buffer = new ArrayBuffer(maxPoints * 4 * 4); // Allocate buffer for 4-byte floats
    const view = new DataView(buffer);

    listener.subscribe((msg) => {
      const numPoints = msg.width * msg.height;

      if (numPoints <= maxPoints) {
        for (let i = 0; i < numPoints; i++) {
          const byteOffset = i * 16;
          view.setFloat32(byteOffset, msg.data[i * 4], true); // X coordinate
          view.setFloat32(byteOffset + 4, msg.data[i * 4 + 1], true); // Y coordinate
          view.setFloat32(byteOffset + 8, msg.data[i * 4 + 2], true); // Z coordinate
          view.setUint8(byteOffset + 12, 255); // Alpha channel (always 255)
        }

        const data = new Float32Array(buffer, 0, numPoints * 4);
        console.log(data)
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(data, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(numPoints * 3).fill(1), 3));
        geometry.computeBoundingBox();

        pointCloud.geometry.dispose();
        pointCloud.geometry = geometry;

        pointCount = numPoints;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      listener.unsubscribe();
      scene.remove(pointCloud);
    };
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

