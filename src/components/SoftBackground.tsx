/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';

const SoftBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fdfbf7]">
      {/* Soft warm glows */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[100vw] h-[100vw] bg-[#f5efe6] rounded-full filter blur-[100px] opacity-60"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[100vw] h-[100vw] bg-[#efe5d5] rounded-full filter blur-[100px] opacity-40"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Very subtle grain */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default SoftBackground;