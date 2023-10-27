import React, { useEffect } from 'react';
import * as THREE from 'three';

const Nebulosa = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(
				75,
				window.innerWidth / window.innerHeight,
				0.1,
				1000,
			);
			const renderer = new THREE.WebGLRenderer();

			camera.position.z = 10;

			renderer.setSize(window.innerWidth, window.innerHeight);

			const container = document.getElementById('nebula-container');
			container.appendChild(renderer.domElement);

			// Crear una geometría de partículas para representar estrellas
			const starGeometry = new THREE.BufferGeometry();
			const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

			const starVertices = [];
			for (let i = 0; i < 1000; i++) {
				const x = (Math.random() - 0.5) * 2000;
				const y = (Math.random() - 0.5) * 2000;
				const z = (Math.random() - 0.5) * 2000;
				starVertices.push(x, y, z);
			}

			starGeometry.setAttribute(
				'position',
				new THREE.Float32BufferAttribute(starVertices, 3),
			);
			const stars = new THREE.Points(starGeometry, starMaterial);
			scene.add(stars);

			const animate = () => {
				requestAnimationFrame(animate);

				stars.rotation.x += 0.001;
				stars.rotation.y += 0.001;

				renderer.render(scene, camera);
			};

			animate();

			window.addEventListener('resize', () => {
				const newWidth = window.innerWidth;
				const newHeight = window.innerHeight;

				camera.aspect = newWidth / newHeight;
				camera.updateProjectionMatrix();

				renderer.setSize(newWidth, newHeight);
			});
		}
	}, []);

	return (
		<div id='nebula-container' style={{ position: 'fixed', top: 0, left: 0 }} />
	);
};

export default Nebulosa;
