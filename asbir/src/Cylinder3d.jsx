import React, { useRef, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";

function MyRotatingBox() {
  const myMesh = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = Math.sin(a);
    myMesh.current.rotation.y = Math.cos(a);
    myMesh.current.rotation.z = Math.tan(a);
  });

  return (
    <mesh ref={myMesh}>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

export default function Cylinder3d() {
  return (
    <div style={{height: "1000px"}}>
      <Canvas>
        <MyRotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}
 