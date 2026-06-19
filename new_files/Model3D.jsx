import { useRef, useEffect } from "react";
import * as THREE from "three";

// ─── Materials ────────────────────────────────────────────────────────────────

function makeMaterials() {
  return {
    base:   new THREE.MeshLambertMaterial({ color: 0x6B4C2A }),
    tread:  new THREE.MeshLambertMaterial({ color: 0xD4A46A }),
    treadT: new THREE.MeshLambertMaterial({ color: 0xE8B87A }),
    string: new THREE.MeshLambertMaterial({ color: 0x8C6030 }),
    land:   new THREE.MeshLambertMaterial({ color: 0x7A9EB0 }),
    pole:   new THREE.MeshLambertMaterial({ color: 0x888888 }),
  };
}

// ─── Geometry builders ────────────────────────────────────────────────────────

function buildStraight(result, mats) {
  const { nSteps, riser, tread, stairWidth: sw } = result;
  const group  = new THREE.Group();
  const TTHICK = Math.min(45, riser * 0.22);

  for (let i = 0; i < nSteps; i++) {
    const bH    = (i + 1) * riser;
    const base  = new THREE.Mesh(new THREE.BoxGeometry(tread - 2, bH, sw), mats.base);
    base.position.set(i * tread + tread / 2, bH / 2, 0);
    base.receiveShadow = true;
    group.add(base);

    const tMesh = new THREE.Mesh(new THREE.BoxGeometry(tread + 6, TTHICK, sw + 4), i === 0 ? mats.treadT : mats.tread);
    tMesh.position.set(i * tread + tread / 2, (i + 1) * riser - TTHICK / 2 + 1, 0);
    tMesh.castShadow = true;
    tMesh.receiveShadow = true;
    group.add(tMesh);
  }

  // Stringers
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

  [-sw / 2 - 28, sw / 2].forEach(zOff => {
    const str = new THREE.Mesh(strGeo, mats.string);
    str.position.set(0, 0, zOff);
    str.castShadow = true;
    group.add(str);
  });

  group.position.x = -(nSteps * tread) / 2;
  return group;
}

function buildFlight(nSteps, riser, tread, sw, mats, offsetX = 0, offsetZ = 0, flipX = false) {
  const group  = new THREE.Group();
  const TTHICK = Math.min(45, riser * 0.22);
  const dir    = flipX ? -1 : 1;

  for (let i = 0; i < nSteps; i++) {
    const bH   = (i + 1) * riser;
    const posX = dir * (i * tread + tread / 2);
    const base = new THREE.Mesh(new THREE.BoxGeometry(tread - 2, bH, sw), mats.base);
    base.position.set(posX, bH / 2, 0);
    base.receiveShadow = true;
    group.add(base);

    const tMesh = new THREE.Mesh(new THREE.BoxGeometry(tread + 6, TTHICK, sw + 4), i === 0 ? mats.treadT : mats.tread);
    tMesh.position.set(posX, (i + 1) * riser - TTHICK / 2 + 1, 0);
    tMesh.castShadow = true;
    group.add(tMesh);
  }
  group.position.set(offsetX, 0, offsetZ);
  return group;
}

function buildLanding(w, d, h, mats) {
  const land = new THREE.Mesh(new THREE.BoxGeometry(w, 40, d), mats.land);
  land.position.y = h + 20;
  land.castShadow = true;
  land.receiveShadow = true;
  return land;
}

function buildLShaped(result, mats) {
  const { stepsF1, stepsF2, riser, tread1, tread2, stairWidth: sw, landingDepth: ld } = result;
  const group = new THREE.Group();

  // Flight 1 goes in +X
  const f1 = buildFlight(stepsF1, riser, tread1, sw, mats);
  group.add(f1);

  // Landing at end of flight 1
  const landH = stepsF1 * riser;
  const landW = ld;
  const land  = buildLanding(landW, sw, landH, mats);
  land.position.x = stepsF1 * tread1 + landW / 2;
  group.add(land);

  // Flight 2 rotates 90°: goes in +Z from landing corner
  const f2 = buildFlight(stepsF2, riser, tread2, sw, mats);
  f2.rotation.y = -Math.PI / 2;
  f2.position.set(stepsF1 * tread1 + landW, landH, 0);
  group.add(f2);

  // Centre approx
  group.position.set(-(stepsF1 * tread1) / 2, 0, -(stepsF2 * tread2) / 2);
  return group;
}

function buildUShaped(result, mats) {
  const { stepsPerFlight, riser, tread, stairWidth: sw, landingDepth: ld, wellGap } = result;
  const group = new THREE.Group();
  const halfW = sw / 2 + wellGap / 2;

  // Flight 1: +X direction, on the right side
  const f1 = buildFlight(stepsPerFlight, riser, tread, sw, mats, 0, -halfW);
  group.add(f1);

  // Landing on the left
  const landH = stepsPerFlight * riser;
  const landW = ld;
  const land  = buildLanding(landW, sw * 2 + wellGap, landH, mats);
  land.position.x = stepsPerFlight * tread + landW / 2;
  group.add(land);

  // Flight 2: -X direction (going back), on the left side, starts from landing height
  const f2 = buildFlight(stepsPerFlight, riser, tread, sw, mats,
    stepsPerFlight * tread + landW, halfW, true);
  f2.position.y = landH;
  group.add(f2);

  group.position.set(-(stepsPerFlight * tread) / 2, 0, 0);
  return group;
}

function buildSpiral(result, mats) {
  const { nSteps, riser, degPerStep, outerRadius: or, innerRadius: ir } = result;
  const group  = new THREE.Group();
  const TTHICK = Math.min(40, riser * 0.22);

  // Central pole
  const poleH = nSteps * riser + 200;
  const pole  = new THREE.Mesh(new THREE.CylinderGeometry(ir * 0.9, ir * 0.9, poleH, 16), mats.pole);
  pole.position.y = poleH / 2;
  group.add(pole);

  for (let i = 0; i < nSteps; i++) {
    const angle  = (i * degPerStep) * Math.PI / 180;
    const height = i * riser + riser / 2;

    // Build a tread wedge using a CylinderGeometry with a small arc
    const arcAngle = degPerStep * Math.PI / 180 * 1.02;
    const geo = new THREE.CylinderGeometry(or, or, TTHICK, 12, 1, false, angle - arcAngle / 2, arcAngle);

    // Cut out inner radius by subtracting — three.js doesn't support CSG natively so
    // we use a flat BoxGeometry-based tread aligned radially instead for simplicity
    const treadLen = or - ir;
    const treadW   = Math.min(or * degPerStep * Math.PI / 180, or * 0.8);

    const tMesh = new THREE.Mesh(
      new THREE.BoxGeometry(treadLen, TTHICK, treadW),
      i % 2 === 0 ? mats.tread : mats.treadT
    );
    const midR  = (or + ir) / 2;
    tMesh.position.set(
      midR * Math.cos(angle),
      height,
      midR * Math.sin(angle)
    );
    tMesh.rotation.y = -angle;
    tMesh.castShadow = true;
    tMesh.receiveShadow = true;
    group.add(tMesh);

    // Thin riser panel
    const rMesh = new THREE.Mesh(
      new THREE.BoxGeometry(treadLen, riser * 0.7, 8),
      mats.base
    );
    rMesh.position.set(
      midR * Math.cos(angle),
      height - riser * 0.3,
      midR * Math.sin(angle)
    );
    rMesh.rotation.y = -angle;
    group.add(rMesh);
  }

  group.position.set(0, 0, 0);
  return group;
}

// ─── Builder dispatcher ───────────────────────────────────────────────────────

function buildGeometry(result, mats) {
  if (!result) return null;
  switch (result.type) {
    case "lshaped": return buildLShaped(result, mats);
    case "ushaped": return buildUShaped(result, mats);
    case "spiral":  return buildSpiral(result, mats);
    default:        return buildStraight(result, mats);
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Model3D({ result }) {
  const mountRef = useRef(null);
  const sceneRef = useRef({});

  // Init Three.js once
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
    sun.shadow.camera.left = sun.shadow.camera.bottom = -2000;
    sun.shadow.camera.right = sun.shadow.camera.top   =  2000;
    scene.add(sun);
    scene.add(Object.assign(new THREE.DirectionalLight(0x4477CC, 0.4), { position: new THREE.Vector3(-800, 600, -500) }));

    const grid = new THREE.GridHelper(5000, 50, 0x0D2A3E, 0x091929);
    grid.position.y = -1;
    scene.add(grid);

    const orb = { theta: 0.55, phi: 1.05, r: 2400, dragging: false, px: 0, py: 0 };
    const updateCam = () => {
      camera.position.set(
        orb.r * Math.sin(orb.phi) * Math.sin(orb.theta),
        orb.r * Math.cos(orb.phi) + 300,
        orb.r * Math.sin(orb.phi) * Math.cos(orb.theta)
      );
      camera.lookAt(0, 300, 0);
    };
    updateCam();

    const onDown  = e => { orb.dragging = true;  orb.px = e.clientX; orb.py = e.clientY; renderer.domElement.style.cursor = "grabbing"; };
    const onUp    = ()  => { orb.dragging = false; renderer.domElement.style.cursor = "grab"; };
    const onMove  = e => {
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

    sceneRef.current = { scene, camera, renderer, orb, updateCam, mats: makeMaterials() };

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

  // Re-build geometry when result changes
  useEffect(() => {
    const { scene, orb, updateCam, mats } = sceneRef.current;
    if (!scene) return;

    // Dispose old
    const old = scene.getObjectByName("stairs");
    if (old) {
      old.traverse(o => {
        if (o.isMesh) {
          o.geometry.dispose();
          if (Array.isArray(o.material)) o.material.forEach(m => m.dispose());
          else o.material.dispose();
        }
      });
      scene.remove(old);
    }

    if (!result) return;

    const group = buildGeometry(result, mats);
    if (!group) return;
    group.name = "stairs";
    scene.add(group);

    // Auto-zoom
    const span = Math.max(
      (result.totalRun  || result.flightRun * 2 || result.diameter || 1000),
      (result.totalRise || 1000)
    );
    orb.r = Math.max(600, Math.min(6000, span * 2.5));
    updateCam();
  }, [result]);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", cursor: "grab", background: "#06111C" }}
    />
  );
}
