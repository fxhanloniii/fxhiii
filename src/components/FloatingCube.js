import React, { useEffect, useRef } from 'react'

const FloatingCube = () => {
    const containerRef = useRef();
    const { current: THREE } = useRef(window.THREE);
  
    useEffect(() => {
      // Set up the scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(75, 75);
      containerRef.current.appendChild(renderer.domElement);
  
      // Create a cube and add it to the scene
      const geometry = new THREE.BoxGeometry(75, 75, 75);
      const edges = new THREE.EdgesGeometry(geometry);
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });
      const wireframe = new THREE.LineSegments(edges, material);
      scene.add(wireframe);
  
      // Position the camera and cube
      camera.position.z = 200;
  
      // Animate the cube
      function animate() {
        requestAnimationFrame(animate);
        wireframe.rotation.x += 0.01;
        wireframe.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
  
      animate();
  
      return () => {
        // Clean up the renderer when the component unmounts
        containerRef.current.removeChild(renderer.domElement);
      };
    }, [THREE]);
  
    return <div className="floating-cube" ref={containerRef} />;
  };
  
  export default FloatingCube;