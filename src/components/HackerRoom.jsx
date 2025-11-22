// src/components/HackerRoom.jsx
import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

export function HackerRoom({ onReady, ...props }) {
  // load model (from public/models). Keep path relative to public/ so dev server serves it.
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');

  // load textures
  const monitortxt = useTexture('/textures/desk/monitor.png');
  const screenTxt = useTexture('/textures/desk/screen.png');

  /**
   * IMPORTANT: if the parent passes onReady (for example to hide a loader),
   * we call it from useEffect AFTER the model/textures are ready.
   * This prevents "Cannot update a component while rendering a different component".
   */
  useEffect(() => {
    // both useGLTF and useTexture return synchronously when cached, or after loading they will
    // cause a re-render; calling onReady here is safe because it's after render commit.
    if (typeof onReady === 'function') {
      onReady(); // parent should handle idempotency if called multiple times
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onReady, nodes, materials, monitortxt, screenTxt]);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
      <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
    </group>
  );
}

useGLTF.preload('/models/hacker-room.glb');
