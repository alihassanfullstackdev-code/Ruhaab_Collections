/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, PresentationControls, Environment } from '@react-three/drei';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface JewelryViewerProps {
  modelUrl?: string;
  fallbackImage: string;
}

const JewelryViewer: React.FC<JewelryViewerProps> = ({ modelUrl, fallbackImage }) => {
  if (!modelUrl) {
    return (
      <div className="w-full h-full bg-[#f4f2ee] flex items-center justify-center p-12">
        <img 
          src={fallbackImage} 
          alt="Product View" 
          className="w-full h-full object-contain mix-blend-multiply opacity-80"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#f4f2ee] relative">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Stage environment="city" intensity={0.5} contactShadow={false}>
              <Model url={modelUrl} />
            </Stage>
          </PresentationControls>
        </Suspense>
        <OrbitControls makeDefault enableZoom={true} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
      </Canvas>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] font-bold text-soft-black/40 pointer-events-none">
        Rotate and Zoom to Inspect Craftsmanship
      </div>
    </div>
  );
};

export default JewelryViewer;
