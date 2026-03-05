/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <PainPoints />
      </main>
    </div>
  );
}
