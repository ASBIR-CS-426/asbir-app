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

function MyRotatingBox() {
  const myMesh = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = Math.sin(a);
    myMesh.current.rotation.y = Math.sin(a);
    myMesh.current.rotation.z = Math.sin(a);
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
    <div style={{height: "1000px"}}>
      <Canvas>
        {/* <group position={[0, 0, 0]}>
          <MyRotatingBox />
          <Sphere position={[-1, -1, 0]}/>
        </group> */}
        <MyRotatingBox/>
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}
 