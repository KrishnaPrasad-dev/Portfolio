// src/components/Loading.jsx
import React from "react";
import { Html } from "@react-three/drei";

/**
 * Simple DOM loader content (no three/drei hooks).
 * Safe to render anywhere (inside or outside Canvas) as plain DOM.
 */
function LoaderContent() {
  return (
    <div className="bg-black/60 backdrop-blur-sm rounded p-4 flex items-center justify-center">
      <div className="loader">
        {/* simple spinner or SVG */}
        <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Default export: plain DOM loader (safe anywhere).
 * Use this when you want a normal HTML loader in the DOM.
 */
export default function CanvasLoader() {
  return <LoaderContent />;
}

/**
 * Named export: HTML overlay for use *inside* a <Canvas>.
 * This wraps the DOM loader with <Html>, which uses r3f hooks — so
 * ONLY render this component from *within* a <Canvas> tree.
 *
 * Usage inside Canvas:
 * import { CanvasLoaderHtml } from './components/Loading'
 * ...
 * <Canvas>
 *   ...
 *   <CanvasLoaderHtml />
 * </Canvas>
 */
export function CanvasLoaderHtml() {
  return (
    <Html center>
      <LoaderContent />
    </Html>
  );
}
