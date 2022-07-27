import React, { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import noasisAudio from "../assets/compress/noasis.mp3";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import ReactHowler from "react-howler";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const parameters = {
  size: 0.001,
  count: 100000,
  radius: 4,
  branches: 12,
  spin: 1.25,
  randomness: 0.25,
  randomnessPower: 4,
  colorIn: "#BC027F",
  colorOut: "#004CA3",
};

function BlackHoleNucleus({ size }) {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} scale={[size, size, size]} position={[0, 0, 0]}>
      <sphereBufferGeometry
        attach='geometry'
        args={[0.5, 32, 32, 0, 6.4, 0, 6.3]}
      />
      <meshBasicMaterial attach='material' color='#000' />
    </mesh>
  );
}

const Galaxy = () => {
  const particles = useRef();
  const clock = new THREE.Clock();

  useEffect(() => {
    generateGalaxy();
  });

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    particles.current.rotation.y = elapsedTime * 0.05;
  });

  const generateGalaxy = () => {
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const colorInside = new THREE.Color(parameters.colorIn);
    const colorOutside = new THREE.Color(parameters.colorOut);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * parameters.radius;
      const spinAngle = radius * parameters.spin;
      const branchAngle =
        ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      const randomX =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius;
      const randomY =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius;
      const randomZ =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particles.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particles.current.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
  };

  return (
    <points ref={particles}>
      <bufferGeometry />
      <pointsMaterial
        size={parameters.size}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function Noasis({ playing, pauseSound }) {
  const navigate = useNavigate();

  return (
    <>
      <ReactHowler
        playing={playing}
        src={noasisAudio}
        volume={0.5}
        loop={true}
      />
      <div className='relative bg-neutral-900'>
        <Canvas
          colorManagement={false}
          style={{ height: `100vh` }}
          camera={{ position: [0, 2, 5] }}
        >
          <color attach='background' args={["#11081F"]} />

          <Suspense fallback={null}>
            <BlackHoleNucleus size={2} />
            <Galaxy />
          </Suspense>
        </Canvas>
        <div className='absolute top-5 left-0 right-0 flex '>
          <button
            className=' bg-violet-800 py-3 px-5 rounded-full text-lg font-semibold flex items-center gap-3 ml-5'
            onClick={() => {
              navigate("/");
              pauseSound();
            }}
          >
            <KeyboardBackspaceIcon />
            <p>Home</p>
          </button>
        </div>
      </div>
    </>
  );
}
