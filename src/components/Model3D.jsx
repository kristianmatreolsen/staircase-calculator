import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import '../styles/model3d.css';

export default function Model3D({ result, inputs }) {
  const mountRef = useRef(null);
  const stateRef = useRef({});

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = el.clientWidth  || 640;
    const H = el.clientHeight || 480;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06111C);
    scene.fog = new THREE.Fog(0x06111C, 4000, 9000);

    const camera = new THREE.PerspectiveCamera(48, W / H, 1, 20000);

    scene.add(new THREE.AmbientLight(0x99BBCC, 0.6));
    const sun = new THREE.DirectionalLight(0xFFF4E0, 1.1);
    sun.position.set(1200, 2400, 1000);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far  = 8000;
    sun.shadow.camera.left = sun.shadow.camera.bottom = -2000;
    sun.shadow.camera.right = sun.shadow.camera.top   =  2000;
    scene.add(sun);
    
    const fill = new THREE.DirectionalLight(0x4477CC, 0.4);
    fill.position.set(-800, 600, -500);
    scene.add(fill);
    
    const rim = new THREE.DirectionalLight(0xFF9933, 0.2);
    rim.position.set(0, -200, 1000);
    scene.add(rim);

    const grid = new THREE.GridHelper(5000, 50, 0x0D2A3E, 0x091929);
    grid.position.y = -1;
    scene.add(grid);

    const orb = { theta: 0.55, phi: 1.05, r: 2400, dragging: false, px: 0, py: 0 };

    const updateCam = () => {
      const sp = Math.sin(orb.phi), cp = Math.cos(orb.phi);
      const st = Math.sin(orb.theta), ct = Math.cos(orb.theta);
      camera.position.set(orb.r * sp * st, orb.r * cp + 300, orb.r * sp * ct);
      camera.lookAt(0, 300, 0);
    };
    updateCam();

    const onDown = e => { orb.dragging = true; orb.px = e.clientX; orb.py = e.clientY; renderer.domElement.style.cursor = "grabbing"; };
    const onUp   = () => { orb.dragging = false; renderer.domElement.style.cursor = "grab"; };
    const onMove = e => {
      if (!orb.dragging) return;
      orb.theta -= (e.clientX - orb.px) * 0.006;
      orb.phi    = Math.max(0.12, Math.min(Math.PI * 0.46, orb.phi + (e.clientY - orb.py) * 0.006));
      orb.px = e.clientX; orb.py = e.clientY;
      updateCam();
    };
    const onWheel = e => { orb.r = Math.max(400, Math.min(7000, orb.r + e.deltaY * 0.9)); updateCam(); };
    const onResize = () => {
      const W = el.clientWidth, H = el.clientHeight;
      camera.aspect = W / H; camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };

    renderer.domElement.addEventListener("mousedown", onDown);
    renderer.domElement.addEventListener("mousemove", onMove);
    renderer.domElement.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("resize", onResize);

    let animId;
    const loop = () => { animId = requestAnimationFrame(loop); renderer.render(scene, camera); };
    loop();

    stateRef.current = { scene, camera, renderer, orb, updateCam, animId: { val: animId } };

    return () => {
      cancelAnimationFrame(animId);
      renderer.domElement.removeEventListener("mousedown", onDown);
      renderer.domElement.removeEventListener("mousemove", onMove);
      renderer.domElement.removeEventListener("wheel", onWheel);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const { scene, orb, updateCam } = stateRef.current;
    if (!scene) return;

    const old = scene.getObjectByName("stairs");
    if (old) {
      old.traverse(o => { if (o.isMesh) { o.geometry.dispose(); if (Array.isArray(o.material)) o.material.forEach(m => m.dispose()); else o.material.dispose(); } });
      scene.remove(old);
    }

    if (!result) return;

    const { nSteps, riser, tread } = result;
    const sw = Math.max(100, parseFloat(inputs.stairWidth) || 900);
    const TTHICK = Math.min(45, riser * 0.22);

    const group = new THREE.Group();
    group.name = "stairs";

    const baseMat   = new THREE.MeshLambertMaterial({ color: 0x6B4C2A });
    const treadMat  = new THREE.MeshLambertMaterial({ color: 0xD4A46A });
    const treadTop  = new THREE.MeshLambertMaterial({ color: 0xE8B87A });
    const stringMat = new THREE.MeshLambertMaterial({ color: 0x8C6030 });

    for (let i = 0; i < nSteps; i++) {
      const bH = (i + 1) * riser;
      const baseGeo = new THREE.BoxGeometry(tread - 2, bH, sw);
      const base = new THREE.Mesh(baseGeo, baseMat);
      base.position.set(i * tread + tread / 2, bH / 2, 0);
      base.receiveShadow = true;
      group.add(base);

      const tGeo = new THREE.BoxGeometry(tread + 6, TTHICK, sw + 4);
      const tmesh = new THREE.Mesh(tGeo, i === 0 ? treadTop : treadMat);
      tmesh.position.set(i * tread + tread / 2, (i + 1) * riser - TTHICK / 2 + 1, 0);
      tmesh.castShadow = true;
      tmesh.receiveShadow = true;
      group.add(tmesh);
    }

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    for (let i = 0; i < nSteps; i++) {
      shape.lineTo(i * tread, (i + 1) * riser);
      shape.lineTo((i + 1) * tread, (i + 1) * riser);
    }
    shape.lineTo(nSteps * tread, 0);
    shape.closePath();

    const extSettings = { depth: 28, bevelEnabled: false };
    const strGeo = new THREE.ExtrudeGeometry(shape, extSettings);

    const strL = new THREE.Mesh(strGeo, stringMat);
    strL.position.set(0, 0, -(sw / 2 + 28));
    strL.castShadow = true;
    group.add(strL);

    const strR = new THREE.Mesh(strGeo, stringMat);
    strR.position.set(0, 0, sw / 2);
    strR.castShadow = true;
    group.add(strR);

    group.position.x = -(nSteps * tread) / 2;

    scene.add(group);

    const span = Math.max(nSteps * tread, nSteps * riser, sw);
    orb.r = Math.max(600, Math.min(6000, span * 2.3));
    updateCam();
  }, [result, inputs]);

  return (
    <div
      ref={mountRef}
      className="model3d-container"
    />
  );
}
