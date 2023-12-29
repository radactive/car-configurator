import * as THREE from 'three'
import {
    ContactShadows, Environment, Lightformer,
    OrbitControls, Float, AccumulativeShadows, RandomizedLight
    , CubeCamera, PerspectiveCamera
} from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from 'react'
import { useLoader, Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
//import Porsche from './Car'
import { Lamborghini } from "./Lamborghini"
import { LayerMaterial, Color, Depth } from 'lamina'
import Configurator from './Configurator';
import { Ground } from './Ground';

const Viewer = () => {

    //const gltf = useLoader(GLTFLoader, "./models/car/car.gltf")

    function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
        const group = useRef()
        useFrame((state, delta) => (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60))
        return (
            <>
                {/* Ceiling */}
                <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                <group rotation={[0, 0.5, 0]}>
                    <group ref={group}>
                        {/* {positions.map((x, i) => (
                            <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
                        ))} */}
                    </group>
                </group>
                {/* Sides */}
                <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
                <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
                <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
                <mesh scale={100}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <LayerMaterial side={THREE.BackSide}>
                        <Color color="#444" alpha={1} mode="normal" />
                        <Depth colorA="white" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
                    </LayerMaterial>
                </mesh>
            </>
        )
    }

    return (
        <>
            {/* <Canvas gl={{ logarithmicDepthBuffer: true, antialias: true }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}> */}
            <Canvas shadows>
                {/* <OrbitControls autoRotate={true} autoRotateSpeed={0.75} enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} /> */}
                <OrbitControls
                    target={[0, 0.35, 0]}
                    maxPolarAngle={1.45}
                />
                <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
                <color args={[0, 0, 0]} attach="background" />
                <CubeCamera resolution={256} frames={Infinity}>
                    {(texture) => (
                        <>
                            <Environment map={texture} />
                            <Lamborghini rotation={[0, Math.PI / 1.5, 0]} scale={0.015} position={[0, 0, 0]} />
                        </>
                    )}
                </CubeCamera>

                <ambientLight intensity={0.2} />
                <spotLight
                    //color={''}
                    intensity={200}
                    angle={1}
                    penumbra={0.5}
                    position={[0, 10, 0]}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <spotLight
                    //color={[1, 0.25, 0.7]}
                    intensity={50}
                    angle={0.6}
                    penumbra={0.5}
                    position={[5, 5, 0]}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <spotLight
                    //color={[0.14, 0.5, 1]}
                    intensity={20}
                    angle={0.6}
                    penumbra={0.5}
                    position={[-5, 5, 0]}
                    castShadow
                    shadow-bias={-0.0001}
                />

                <spotLight
                    //color={[0.14, 0.5, 1]}
                    intensity={150}
                    angle={1}
                    penumbra={0.5}
                    position={[6, 2, 0]}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <Ground />

                {/* V1 */}
                {/* <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} /> */}
                {/* <ambientLight intensity={0.7} /> */}
                {/* <Lamborghini rotation={[0, Math.PI / 1.5, 0]} scale={0.015} position={[0, -1, 0]} /> */}
                {/* <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={0.5} far={20} /> */}
                {/* <Environment frames={Infinity} resolution={256} background blur={1}>
                    <Lightformers />
                </Environment> */}

            </Canvas>
            <Configurator />
        </>
    )
}

export default Viewer;