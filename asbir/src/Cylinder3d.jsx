import React, { useRef, useState } from "react";
import ROSLIB from 'roslib'
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from 'three';

const Body = ({ length = 4, ...props }) => (
  <mesh castShadow receiveShadow {...props}>
    <boxGeometry args={[length, 1.5, 2]} />
    <meshStandardMaterial color="purple" />
  </mesh>
)

const Head = (props) => (
  <mesh castShadow receiveShadow {...props}>
    <sphereGeometry args={[0.5, 32, 32]} />
    <meshStandardMaterial color="blue" />
  </mesh>
)

const Wheel = (props) => (
  <mesh castShadow receiveShadow {...props}>
    <sphereGeometry args={[0.4, 16, 16]} />
    <meshStandardMaterial color="green" />
  </mesh>
)

const Cylinder = (props) => (
  <mesh castShadow receiveShadow {...props}>
    <cylinderGeometry args={[0.25, 0.25, 1.5]} />
    <meshStandardMaterial />
  </mesh>
)

let X = 0;
let Y = 0;
let Z = 0;

let ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

let pose_topic = new ROSLIB.Topic({
  ros: ros, 
  name: '/T265/odom/sample',
  messageType: 'nav_msgs/msg/Odometry'
});

const logPose = () => {
  pose_topic.subscribe(function(message) {
    // console.log('orientation:', message.pose.pose.orientation.x, message.pose.pose.orientation.y, message.pose.pose.orientation.z, message.pose.pose.orientation.w)
    let x_temp = message.pose.pose.orientation.x
    let y_temp = message.pose.pose.orientation.y
    let z_temp = message.pose.pose.orientation.z
    let w_temp = message.pose.pose.orientation.w
    let rotation = new THREE.Euler().setFromQuaternion(new THREE.Quaternion(x_temp, y_temp, z_temp, w_temp));
    X = rotation._x
    Z = rotation._y
    Y = rotation._z


  })
}

logPose();


function MyRotatingBox() {
  const myMesh = useRef();
  

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = X;
    myMesh.current.rotation.y = Y;
    myMesh.current.rotation.z = Z;
  });

  return (
    <mesh ref={myMesh}>
      <group position={[0, 0, 0]}>
          <Body />
          <Head position={[1, 1, 0]}/>
          <Cylinder position={[-1.75, -1.5, 0]}/>
          <Cylinder position={[1.75, -1.5, 0]}/>
          <Wheel position={[1.75, -2, 0]}/>
          <Wheel position={[-1.75, -2, 0]}/>
        </group>
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

export default function Cylinder3d() {
  return (
    <div style={{height: "80vh", paddingBottom: "4rem"}}>
      <button onClick={() => {
        X += 0.1;
      }}>Change X Rotation</button>
      <button onClick={() => {
        Y += 0.1;
      }}>Change Y Rotation</button>
      <button onClick={() => {
        Z += 0.1;
      }}>Change Z Rotation</button>
      <Canvas style={{}}>
        {/* <group position={[0, 0, 0]}>
          <MyRotatingBox />
          <Sphere position={[-1, -1, 0]}/>
        </group> */}
        <MyRotatingBox/>
        <ambientLight intensity={0.4} />
        <directionalLight />
      </Canvas>
    </div>
  );
}