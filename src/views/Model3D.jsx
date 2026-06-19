import { useRef, useEffect } from "react";
import * as THREE from "three";

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

function makeTextSprite(text, color = 0xE8A030) {
  const width = 384;
  const height = 120;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(8,20,34,0.88)";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(4, 12, 20, 0.95)";
  ctx.lineWidth = 8;
  ctx.font = "bold 32px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.strokeText(text, width / 2, height / 2);
  ctx.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
  ctx.fillText(text, width / 2, height / 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(260, 80, 1);
  sprite.renderOrder = 999;
  return sprite;
}

function makeDimLine(start, end, label, offset = new THREE.Vector3(0, 40, 0)) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineDashedMaterial({
    color: 0xE8A030,
    dashSize: 24,
    gapSize: 12,
    linewidth: 1,
  });
  geometry.computeBoundingSphere();
  const line = new THREE.Line(geometry, material);
  line.computeLineDistances();
  const group = new THREE.Group();
  group.add(line);

  // Arrow tips removed for cleaner model dimension lines.
  const mid = new THREE.Vector3().addVectors(points[0], points[1]).multiplyScalar(0.5).add(offset);
  const sprite = makeTextSprite(label);
  sprite.position.copy(mid);
  group.add(sprite);
  return group;
}

function buildStraight(result, mats) {
  const { nSteps, riser, tread, stairWidth: sw, totalRun: run, totalRise: rise, angle } = result;
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

  const runDim = makeDimLine([0, 20, sw / 2 + 140], [run, 20, sw / 2 + 140], `Run: ${run.toFixed(0)} mm`);
  group.add(runDim);

  const riseDim = makeDimLine([run + 120, 0, 0], [run + 120, rise, 0], `Height: ${rise.toFixed(0)} mm`);
  group.add(riseDim);

  const widthDim = makeDimLine([run + 120, 20, -sw / 2], [run + 120, 20, sw / 2], `Width: ${sw.toFixed(0)} mm`, new THREE.Vector3(60, 0, 0));
  group.add(widthDim);

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
  const { stepsF1, stepsF2, riser, tread1, tread2, stairWidth: sw, landingDepth: ld, angle } = result;
  const group = new THREE.Group();

  const f1 = buildFlight(stepsF1, riser, tread1, sw, mats);
  group.add(f1);

  const landH = stepsF1 * riser;
  const landW = ld;
  const land  = buildLanding(landW, sw, landH, mats);
  land.position.x = stepsF1 * tread1 + landW / 2;
  group.add(land);

  const f2 = buildFlight(stepsF2, riser, tread2, sw, mats);
  f2.rotation.y = -Math.PI / 2;
  f2.position.set(stepsF1 * tread1 + landW - sw / 2, landH, landW / 2);
  group.add(f2);

  const run1 = stepsF1 * tread1;
  const run2 = stepsF2 * tread2;
  const totalRise = landH + run2;

  const run1Dim = makeDimLine([0, 20, sw / 2 + 140], [run1, 20, sw / 2 + 140], `Run 1: ${run1.toFixed(0)} mm`);
  group.add(run1Dim);

  const landingDim = makeDimLine([run1 + 10, 20, sw / 2 + 140], [run1 + landW - 10, 20, sw / 2 + 140], `Landing: ${landW.toFixed(0)} mm`);
  group.add(landingDim);

  const run2Dim = makeDimLine(
    [run1 + landW + 20, landH, landW / 2 + 90],
    [run1 + landW + 20, totalRise, landW / 2 + 90],
    `Run 2: ${run2.toFixed(0)} mm`,
    new THREE.Vector3(80, 0, 0)
  );
  group.add(run2Dim);

  const riseDim = makeDimLine([run1 + landW + 120, 0, 0], [run1 + landW + 120, totalRise, 0], `Height: ${totalRise.toFixed(0)} mm`);
  group.add(riseDim);

  const widthDim = makeDimLine([run1 + landW + 120, 20, -sw / 2], [run1 + landW + 120, 20, sw / 2], `Width: ${sw.toFixed(0)} mm`, new THREE.Vector3(60, 0, 0));
  group.add(widthDim);

  group.position.set(-(stepsF1 * tread1 + landW / 2), 0, -sw / 2);
  return group;
}

function buildUShaped(result, mats) {
  const { stepsPerFlight, riser, tread, stairWidth: sw, landingDepth: ld, wellGap } = result;
  const group = new THREE.Group();
  const halfW = sw / 2 + wellGap / 2;

  const f1 = buildFlight(stepsPerFlight, riser, tread, sw, mats, 0, -halfW);
  group.add(f1);

  const landH = stepsPerFlight * riser;
  const landW = ld;
  const land  = buildLanding(landW, sw * 2 + wellGap, landH, mats);
  land.position.x = stepsPerFlight * tread + landW / 2;
  group.add(land);

  const f2 = buildFlight(stepsPerFlight, riser, tread, sw, mats);
  f2.rotation.y = Math.PI;
  f2.position.set(stepsPerFlight * tread, landH, halfW);
  group.add(f2);

  const flightRun = stepsPerFlight * tread;
  const totalRise = stepsPerFlight * riser;

  const flightDim = makeDimLine([0, 20, -halfW - 40], [flightRun, 20, -halfW - 40], `Flight 1: ${flightRun.toFixed(0)} mm`);
  group.add(flightDim);

  const flight2Dim = makeDimLine([flightRun, 20, halfW + 140], [0, 20, halfW + 140], `Flight 2: ${flightRun.toFixed(0)} mm`);
  group.add(flight2Dim);

  const landingDim = makeDimLine([flightRun + 10, 20, -halfW - 40], [flightRun + landW - 10, 20, -halfW - 40], `Landing: ${landW.toFixed(0)} mm`);
  group.add(landingDim);

  const riseDim = makeDimLine([flightRun + landW + 120, 0, 0], [flightRun + landW + 120, totalRise, 0], `Height: ${totalRise.toFixed(0)} mm`);
  group.add(riseDim);

  const widthDim = makeDimLine([flightRun + landW + 120, 20, -sw / 2], [flightRun + landW + 120, 20, sw / 2], `Width: ${sw.toFixed(0)} mm`, new THREE.Vector3(60, 0, 0));
  group.add(widthDim);

  group.position.set(-(stepsPerFlight * tread) / 2, 0, 0);
  return group;
}

function buildSpiral(result, mats) {
  const { nSteps, riser, degPerStep, outerRadius: or, innerRadius: ir } = result;
  const group  = new THREE.Group();
  const TTHICK = Math.min(40, riser * 0.22);

  const poleH = nSteps * riser + 200;
  const pole  = new THREE.Mesh(new THREE.CylinderGeometry(ir * 0.9, ir * 0.9, poleH, 16), mats.pole);
  pole.position.y = poleH / 2;
  group.add(pole);

  for (let i = 0; i < nSteps; i++) {
    const angle  = (i * degPerStep) * Math.PI / 180;
    const height = i * riser + riser / 2;
    const arcAngle = degPerStep * Math.PI / 180 * 1.02;
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

  const totalRise = nSteps * riser;
  const heightDim = makeDimLine([or + 120, 0, 0], [or + 120, totalRise, 0], `Height: ${totalRise.toFixed(0)} mm`);
  group.add(heightDim);

  const diameterDim = makeDimLine([-or, 20, -or - 120], [or, 20, -or - 120], `Outer Ø: ${(or * 2).toFixed(0)} mm`);
  group.add(diameterDim);

  group.position.set(0, 0, 0);
  return group;
}

function buildGeometry(result, mats) {
  if (!result) return null;
  switch (result.type) {
    case "lshaped": return buildLShaped(result, mats);
    case "ushaped": return buildUShaped(result, mats);
    case "spiral":  return buildSpiral(result, mats);
    default:        return buildStraight(result, mats);
  }
}

function fitCameraToObject(camera, object, orb) {
  if (!camera || !object || !orb) return;
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) return;

  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const halfHeight = size.y * 0.5;
  const halfWidth = size.x * 0.5;
  const vFov = camera.fov * (Math.PI / 180);
  const distY = halfHeight / Math.tan(vFov / 2);
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
  const distX = halfWidth / Math.tan(hFov / 2);
  const distance = Math.max(distX, distY) * 1.32;

  orb.target.copy(center);
  orb.r = Math.max(400, distance, size.length() * 0.4);
  orb.minR = Math.max(200, Math.min(orb.r * 0.3, distance * 0.2));
  orb.maxR = Math.max(orb.r * 5, 7000, size.length() * 3);
  camera.updateProjectionMatrix();
}

function buildInfoLines(result) {
  if (!result) return [];

  const common = [
    `${result.nSteps} steps`,
    `${result.riser.toFixed(0)}R × ${(result.tread || result.tread1 || result.innerTread || 0).toFixed(0)}T mm`,
    `${result.angle.toFixed(1)}°`,
  ];

  switch (result.type) {
    case "lshaped":
      return [
        "3D MODEL · L-SHAPED",
        common.join(" · "),
        `Run 1 ${result.run1.toFixed(0)} mm · Run 2 ${result.run2.toFixed(0)} mm · Landing ${result.landingDepth.toFixed(0)} mm`,
      ];
    case "ushaped":
      return [
        "3D MODEL · U-SHAPED",
        common.join(" · "),
        `Flight ${result.flightRun.toFixed(0)} mm · Landing ${result.landingDepth.toFixed(0)} mm · Width ${result.stairWidth.toFixed(0)} mm`,
      ];
    case "spiral":
      return [
        "3D MODEL · SPIRAL",
        common.join(" · "),
        `Outer Ø ${(result.outerRadius * 2).toFixed(0)} mm · Inner Ø ${(result.innerRadius * 2).toFixed(0)} mm · ${result.turnsTotal.toFixed(1)} turns`,
      ];
    default:
      return [
        "3D MODEL · STRAIGHT",
        common.join(" · "),
        `Run ${result.totalRun.toFixed(0)} mm · Rise ${result.totalRise.toFixed(0)} mm · Width ${result.stairWidth.toFixed(0)} mm`,
      ];
  }
}

function ModelInfoPanel({ result }) {
  if (!result) return null;
  const lines = buildInfoLines(result);

  return (
    <div
      style={{
        position: "absolute",
        top: 12,
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: 240,
        maxWidth: 460,
        padding: "8px 12px",
        borderRadius: 8,
        border: "1px solid #2A6EA8",
        background: "rgba(6,22,40,0.88)",
        pointerEvents: "none",
        textAlign: "center",
        zIndex: 2,
      }}
    >
      {lines.map((line, idx) => (
        <div
          key={`${idx}-${line}`}
          style={{
            fontFamily: "monospace",
            color: idx === 0 ? "#82C4FF" : "#C7E7FF",
            fontSize: idx === 0 ? 10 : 9,
            lineHeight: 1.45,
            letterSpacing: idx === 0 ? "0.04em" : "normal",
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

export default function Model3D({ result, captureRef }) {
  const mountRef = useRef(null);
  const sceneRef = useRef({});

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = el.clientWidth  || 640;
    const H = el.clientHeight || 480;

    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
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
    const fill = new THREE.DirectionalLight(0x4477CC, 0.4);
    fill.position.set(-800, 600, -500);
    scene.add(fill);

    const grid = new THREE.GridHelper(5000, 50, 0x0D2A3E, 0x091929);
    grid.position.y = -1;
    scene.add(grid);

    const orb = {
      theta: 0.55,
      phi: 1.05,
      r: 2400,
      minR: 400,
      maxR: 7000,
      target: new THREE.Vector3(0, 300, 0),
      dragging: false,
      px: 0,
      py: 0,
    };

    const updateCam = () => {
      camera.position.set(
        orb.target.x + orb.r * Math.sin(orb.phi) * Math.sin(orb.theta),
        orb.target.y + orb.r * Math.cos(orb.phi) + 120,
        orb.target.z + orb.r * Math.sin(orb.phi) * Math.cos(orb.theta)
      );
      camera.lookAt(orb.target);
    };
    updateCam();

    const onDown  = e => { orb.dragging = true;  orb.px = e.clientX; orb.py = e.clientY; renderer.domElement.style.cursor = "grabbing"; };
    const onUp    = ()  => { orb.dragging = false; renderer.domElement.style.cursor = "grab"; };
    const onMove  = e => {
      if (!orb.dragging) return;
      orb.theta -= (e.clientX - orb.px) * 0.006;
      orb.phi    = Math.max(0.05, Math.min(Math.PI * 0.48, orb.phi + (e.clientY - orb.py) * 0.006));
      orb.px = e.clientX; orb.py = e.clientY;
      updateCam();
    };
    const onWheel = e => {
      orb.r = Math.max(orb.minR, Math.min(orb.maxR, orb.r + e.deltaY * 0.8));
      updateCam();
    };
    const onResize = () => {
      const W = el.clientWidth, H = el.clientHeight;
      camera.aspect = W / H; camera.updateProjectionMatrix();
      renderer.setSize(W, H);
      fitCameraToObject(camera, scene.getObjectByName('stairs'), orb);
      updateCam();
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

    if (captureRef) captureRef.current = () => renderer.domElement.toDataURL('image/png');

    return () => {
      if (captureRef) captureRef.current = null;
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
    const { scene, camera, orb, updateCam, mats } = sceneRef.current;
    if (!scene || !camera) return;

    const old = scene.getObjectByName("stairs");
    if (old) {
      old.traverse(o => {
        if (o.isMesh) {
          o.geometry.dispose();
          const materials = Array.isArray(o.material) ? o.material : [o.material];
          materials.forEach(m => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        }
        if (o.isSprite && o.material) {
          if (o.material.map) o.material.map.dispose();
          o.material.dispose();
        }
      });
      scene.remove(old);
    }

    if (!result) return;

    const group = buildGeometry(result, mats);
    if (!group) return;
    group.name = "stairs";
    scene.add(group);

    fitCameraToObject(camera, group, orb);
    updateCam();
  }, [result]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", background: "#06111C" }}>
      <ModelInfoPanel result={result} />
      <div
        ref={mountRef}
        style={{ width: "100%", height: "100%", cursor: "grab", background: "#06111C" }}
      />
    </div>
  );
}
