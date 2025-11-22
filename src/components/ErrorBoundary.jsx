// src/components/ErrorBoundary.jsx
import React from 'react';
import { Html } from '@react-three/drei'; // <-- IMPORT FIX

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Use Html so fallback sits inside the canvas and doesn't unmount it
      return (
        <Html center>
          <div className="text-white bg-black/60 p-4 rounded">
            Failed to load 3D content. Check console/network.
          </div>
        </Html>
      );
    }
    return this.props.children;
  }
}
