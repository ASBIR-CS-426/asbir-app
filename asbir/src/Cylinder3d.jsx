import React, { useRef, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";

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

let x_rotation = 0;
let y_rotation = -1.57;
let z_rotation = 0;

function MyRotatingBox() {
  const myMesh = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = x_rotation;
    myMesh.current.rotation.y = y_rotation;
    myMesh.current.rotation.z = z_rotation;
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
        x_rotation += 0.1;
      }}>Change X Rotation</button>
      <button onClick={() => {
        y_rotation += 0.1;
      }}>Change Y Rotation</button>
      <button onClick={() => {
        z_rotation += 0.1;
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
 