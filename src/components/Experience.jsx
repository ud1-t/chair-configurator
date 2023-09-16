import { MeshReflectorMaterial, PresentationControls, Stage} from '@react-three/drei'
import { Suspense } from 'react'
import Chair from './Chair.jsx'

const Experience = () => {

    return (
        <>
            <PresentationControls
                speed={1.4}
                zoom={0.7}
                global
                polar={[-0.6, Math.PI/4]}
                rotation={[Math.PI/8, Math.PI/4, 0]}
            >
                <Stage environment="city" intensity={0.4} castShadow={false} position={[0, -2, 0]}>
                    {/* <Suspense fallback={null} > */}
                        <Chair position={[0, -2, 0]}/>
                    {/* </Suspense> */}
                </Stage>
                <mesh rotation = {[-Math.PI/2, 0, 0]} position-y={-2} >
                    <planeGeometry args={[170, 170]} />
                    <MeshReflectorMaterial
                        blur = {[900, 900]}
                        resolution = {2048}
                        mixBlur = {1}
                        mixStrength = {40}
                        roughness = {1}
                        depthScale = {1.2}
                        minDepthThreshhold = {0.4}
                        maxDepthThreshhold = {1.4}
                        color = "#222222"
                        metalness = {0.5}
                    />
                </mesh>
            </PresentationControls>
        </>
    )
}

export default Experience;