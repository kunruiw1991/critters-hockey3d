(function () {
  'use strict';

  // =========================================================================
  // 1. SMILING CRITTERS ROSTER & 8 NEON AIR HOCKEY STADIUMS WITH DISTINCT THEMES
  // =========================================================================
  const CRITTERS = [
    { id: 'dogday',     emoji: '🐶', badge: '☀️', icon: 'icons/dogday.jpg',     color: 0xff9922, glow: '#ffaa33', speed: 1.06, power: 1.10, speedPips: 3, powerPips: 3, spinPips: 3 },
    { id: 'catnap',     emoji: '🐱', badge: '🌙', icon: 'icons/catnap.jpg',     color: 0xa855f7, glow: '#c084fc', speed: 1.10, power: 1.05, speedPips: 3, powerPips: 2, spinPips: 4 },
    { id: 'picky',      emoji: '🐷', badge: '🍎', icon: 'icons/picky.jpg',      color: 0xff4d94, glow: '#ff7ab8', speed: 1.02, power: 1.14, speedPips: 2, powerPips: 4, spinPips: 3 },
    { id: 'craftycorn', emoji: '🦄', badge: '🌈', icon: 'icons/craftycorn.jpg', color: 0x00e5ff, glow: '#55f2ff', speed: 1.12, power: 1.04, speedPips: 4, powerPips: 2, spinPips: 4 },
    { id: 'kickin',     emoji: '🐥', badge: '⚡', icon: 'icons/kickin.jpg',     color: 0xffdd00, glow: '#ffee44', speed: 1.13, power: 1.08, speedPips: 4, powerPips: 3, spinPips: 3 },
    { id: 'bobby',      emoji: '🐻', badge: '❤️', icon: 'icons/bobby.jpg',      color: 0xff3355, glow: '#ff6680', speed: 1.05, power: 1.12, speedPips: 2, powerPips: 4, spinPips: 3 },
    { id: 'hoppy',      emoji: '🐰', badge: '🥕', icon: 'icons/hoppy.jpg',      color: 0x10b981, glow: '#34d399', speed: 1.15, power: 1.02, speedPips: 4, powerPips: 2, spinPips: 4 },
    { id: 'bubba',      emoji: '🐘', badge: '💡', icon: 'icons/bubba.jpg',      color: 0x3b82f6, glow: '#60a5fa', speed: 1.00, power: 1.15, speedPips: 2, powerPips: 4, spinPips: 4 }
  ];

  const STAGES = [
    {
      id: 1, emoji: '🌙', hazardIcons: '🚀🏒', rivalId: 'catnap', duration: 45,
      rinkColor: 0x1e1552, railColor: 0x00f0ff, accentColor: 0xc084fc,
      bumpers: [], spinners: [],
      boostPads: [{ x: 0, z: 4.8 }],
      aiSpeed: 8.5, maxPucks: 2,
      theme: {
        motif: 'moon',
        bgColor: 0x0d0728, fogColor: 0x160c3e, iceCenter: '#271b68',
        hemiSky: 0x99bbff, hemiGround: 0x26124d,
        envColors: [0x60a5fa, 0xc084fc, 0x38bdf8],
        spinnerHub: 0xc084fc, spinnerBlade: 0x00f0ff, boostColor: 0x38bdf8, puckColor: 0x00f5ff
      }
    },
    {
      id: 2, emoji: '☀️', hazardIcons: '🟣🚀', rivalId: 'dogday', duration: 45,
      rinkColor: 0x381924, railColor: 0xffaa00, accentColor: 0xff5533,
      bumpers: [{ x: -4.4, z: 0, r: 1.05 }], spinners: [],
      boostPads: [{ x: -5.4, z: 5.5 }, { x: 5.4, z: 5.5 }],
      aiSpeed: 10.8, maxPucks: 2,
      theme: {
        motif: 'sun',
        bgColor: 0x240d14, fogColor: 0x36141d, iceCenter: '#4e221c',
        hemiSky: 0xffdd88, hemiGround: 0x441810,
        envColors: [0xfbbf24, 0xf97316, 0xfef08a],
        spinnerHub: 0xffaa00, spinnerBlade: 0xff5500, boostColor: 0xfacc15, puckColor: 0xffbb00
      }
    },
    {
      id: 3, emoji: '🍎', hazardIcons: '🟣🟣🚀', rivalId: 'picky', duration: 48,
      rinkColor: 0x3b1230, railColor: 0xff4da6, accentColor: 0xa3e635,
      bumpers: [{ x: -4.4, z: 0, r: 1.0 }, { x: 4.4, z: 0, r: 1.0 }], spinners: [],
      boostPads: [{ x: -5.4, z: 5.5 }, { x: 5.4, z: -5.5 }],
      aiSpeed: 12.2, maxPucks: 2,
      theme: {
        motif: 'apple',
        bgColor: 0x22081c, fogColor: 0x380d2d, iceCenter: '#52163b',
        hemiSky: 0xff99cc, hemiGround: 0x3a0c28,
        envColors: [0xf43f5e, 0xa3e635, 0xfb7185],
        spinnerHub: 0xa3e635, spinnerBlade: 0xff4da6, boostColor: 0xa3e635, puckColor: 0xff55aa
      }
    },
    {
      id: 4, emoji: '🌈', hazardIcons: '🌀🟣🚀', rivalId: 'craftycorn', duration: 48,
      rinkColor: 0x102e4a, railColor: 0x00ffcc, accentColor: 0xff66cc,
      bumpers: [{ x: -4.6, z: 0.4, r: 1.05 }],
      spinners: [{ x: 0, z: -4.6 }],
      boostPads: [{ x: 5.4, z: 5.2 }, { x: -5.4, z: -5.2 }],
      aiSpeed: 13.2, maxPucks: 3,
      theme: {
        motif: 'rainbow',
        bgColor: 0x071a30, fogColor: 0x0d2847, iceCenter: '#163d64',
        hemiSky: 0x7dd3fc, hemiGround: 0x1e293b,
        envColors: [0x2dd4bf, 0xf472b6, 0xfacc15],
        spinnerHub: 0xfacc15, spinnerBlade: 0xf472b6, boostColor: 0x2dd4bf, puckColor: 0x38bdf8
      }
    },
    {
      id: 5, emoji: '🐥', hazardIcons: '🌀🟣🟣', rivalId: 'kickin', duration: 50,
      rinkColor: 0x2e2410, railColor: 0xffee00, accentColor: 0x00e5ff,
      bumpers: [{ x: -4.8, z: -2.2, r: 0.95 }, { x: 4.8, z: 2.2, r: 0.95 }],
      spinners: [{ x: 0, z: -4.6 }],
      boostPads: [{ x: -5.6, z: 5.8 }, { x: 5.6, z: -5.8 }],
      aiSpeed: 14.2, maxPucks: 3,
      theme: {
        motif: 'lightning',
        bgColor: 0x1c1506, fogColor: 0x2e230a, iceCenter: '#423314',
        hemiSky: 0xfef08a, hemiGround: 0x3b2f12,
        envColors: [0xfacc15, 0x38bdf8, 0xfde047],
        spinnerHub: 0x38bdf8, spinnerBlade: 0xfacc15, boostColor: 0xfde047, puckColor: 0xffee00
      }
    },
    {
      id: 6, emoji: '❤️', hazardIcons: '🌀🌀🚀', rivalId: 'bobby', duration: 50,
      rinkColor: 0x3a1028, railColor: 0xff3366, accentColor: 0xffb703,
      bumpers: [{ x: -4.8, z: 0, r: 1.0 }, { x: 4.8, z: 0, r: 1.0 }],
      spinners: [{ x: 0, z: -4.2 }, { x: 0, z: 4.2 }],
      boostPads: [{ x: -5.6, z: 6.2 }, { x: 5.6, z: 6.2 }, { x: 0, z: 0 }],
      aiSpeed: 15.4, maxPucks: 3,
      theme: {
        motif: 'heart',
        bgColor: 0x240718, fogColor: 0x380c26, iceCenter: '#541436',
        hemiSky: 0xffb3c6, hemiGround: 0x400d2a,
        envColors: [0xfb7185, 0xfbbf24, 0xf43f5e],
        spinnerHub: 0xfbbf24, spinnerBlade: 0xff3366, boostColor: 0xff758f, puckColor: 0xff4d79
      }
    },
    {
      id: 7, emoji: '🐰', hazardIcons: '🌀🌀🟣', rivalId: 'hoppy', duration: 52,
      rinkColor: 0x0e3328, railColor: 0x10ff99, accentColor: 0xf97316,
      bumpers: [{ x: -4.8, z: -2.2, r: 0.95 }, { x: 4.8, z: 2.2, r: 0.95 }],
      spinners: [{ x: 0, z: -4.2 }, { x: 0, z: 4.2 }],
      boostPads: [{ x: -5.8, z: 6.4 }, { x: 5.8, z: 6.4 }, { x: -5.8, z: -6.4 }],
      aiSpeed: 16.3, maxPucks: 3,
      theme: {
        motif: 'carrot',
        bgColor: 0x061f18, fogColor: 0x0b3026, iceCenter: '#134e3a',
        hemiSky: 0x6ee7b7, hemiGround: 0x064e3b,
        envColors: [0x10b981, 0xf97316, 0x34d399],
        spinnerHub: 0xf97316, spinnerBlade: 0x10ff99, boostColor: 0x34d399, puckColor: 0x10ff99
      }
    },
    {
      id: 8, emoji: '👑', hazardIcons: '🌀🌀⭐', rivalId: 'bubba', duration: 55,
      rinkColor: 0x18144a, railColor: 0x38bdf8, accentColor: 0xffdd00,
      bumpers: [{ x: -5.0, z: 0, r: 1.0 }, { x: 5.0, z: 0, r: 1.0 }],
      spinners: [{ x: 0, z: -4.2 }, { x: 0, z: 4.2 }],
      boostPads: [{ x: -5.8, z: 6.4 }, { x: 5.8, z: 6.4 }, { x: -5.8, z: -6.4 }, { x: 5.8, z: -6.4 }],
      aiSpeed: 17.2, maxPucks: 4,
      theme: {
        motif: 'crown',
        bgColor: 0x0b0829, fogColor: 0x151044, iceCenter: '#251e6b',
        hemiSky: 0x93c5fd, hemiGround: 0x1e1b4b,
        envColors: [0x38bdf8, 0xfacc15, 0x818cf8],
        spinnerHub: 0xffdd00, spinnerBlade: 0x38bdf8, boostColor: 0xfacc15, puckColor: 0x60a5fa
      }
    }
  ];

  // Rink dimensions in 3D world units
  const RINK = {
    halfW: 9.0,      // X: -9 to +9 (width 18)
    halfL: 14.0,     // Z: -14 (Rival Goal) to +14 (Player Goal) (length 28)
    goalHalfW: 3.35, // Goal slot opening X: -3.35 to +3.35 (width 6.7)
    postR: 0.32,     // Goal post radius at (±3.35, ±14.0)
    malletR: 1.25,
    puckR: 0.72,
    spinnerR: 1.85,
    spinnerBladeHalfW: 0.21,
    boostR: 1.15
  };

  const GOAL_POSTS = [
    { x: -RINK.goalHalfW, z: -RINK.halfL, r: RINK.postR },
    { x:  RINK.goalHalfW, z: -RINK.halfL, r: RINK.postR },
    { x: -RINK.goalHalfW, z:  RINK.halfL, r: RINK.postR },
    { x:  RINK.goalHalfW, z:  RINK.halfL, r: RINK.postR }
  ];

  function validateStageLayout() {
    const issues = [];
    const clearance = 2 * RINK.puckR;
    STAGES.forEach((st) => {
      for (let i = 0; i < st.bumpers.length; i++) {
        for (let j = i + 1; j < st.bumpers.length; j++) {
          const a = st.bumpers[i];
          const b = st.bumpers[j];
          const d = Math.hypot(a.x - b.x, a.z - b.z);
          if (d < a.r + b.r + clearance) {
            issues.push(`Stage ${st.id}: bumper ${i} overlaps bumper ${j} (d=${d.toFixed(2)})`);
          }
        }
      }
      st.bumpers.forEach((b, bIdx) => {
        st.spinners.forEach((sp, sIdx) => {
          const d = Math.hypot(b.x - sp.x, b.z - sp.z);
          if (d < b.r + RINK.spinnerR + clearance) {
            issues.push(`Stage ${st.id}: bumper ${bIdx} overlaps spinner ${sIdx} (d=${d.toFixed(2)})`);
          }
        });
      });
      for (let i = 0; i < st.spinners.length; i++) {
        for (let j = i + 1; j < st.spinners.length; j++) {
          const a = st.spinners[i];
          const b = st.spinners[j];
          const d = Math.hypot(a.x - b.x, a.z - b.z);
          if (d < 2 * RINK.spinnerR + clearance) {
            issues.push(`Stage ${st.id}: spinner ${i} overlaps spinner ${j} (d=${d.toFixed(2)})`);
          }
        }
      }
      st.boostPads.forEach((pad, pIdx) => {
        st.bumpers.forEach((b, bIdx) => {
          const d = Math.hypot(pad.x - b.x, pad.z - b.z);
          if (d < RINK.boostR + b.r + 0.2) {
            issues.push(`Stage ${st.id}: boostPad ${pIdx} overlaps bumper ${bIdx} (d=${d.toFixed(2)})`);
          }
        });
      });
    });
    return { valid: issues.length === 0, issues };
  }

  function getCritterById(id) {
    return CRITTERS.find((c) => c.id === id) || CRITTERS[0];
  }

  function getStageById(id) {
    return STAGES.find((s) => s.id === id) || STAGES[0];
  }

  function resolveRival(stage, playerId) {
    const raw = getCritterById(stage ? stage.rivalId : 'catnap');
    if (raw.id !== playerId) return raw;
    return CRITTERS.find((c) => c.id !== playerId) || CRITTERS[1];
  }

  const STORAGE_KEY = 'critters_hockey3d_save_v1';
  let saveData = {
    selectedCritter: 'dogday',
    selectedStage: 1,
    unlockedStage: 1,
    stageStars: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }
  };

  function loadSave() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          saveData.selectedCritter = parsed.selectedCritter || 'dogday';
          saveData.selectedStage = parsed.selectedStage || 1;
          saveData.unlockedStage = Math.max(1, Math.min(8, parsed.unlockedStage || 1));
          if (parsed.stageStars) {
            for (let i = 1; i <= 8; i++) {
              saveData.stageStars[i] = Math.max(0, Math.min(3, parsed.stageStars[i] || 0));
            }
          }
        }
      }
    } catch (e) {}
  }

  function writeSave() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    } catch (e) {}
  }

  loadSave();

  // =========================================================================
  // 2. SYNTHESIZED WEB AUDIO API SOUND ENGINE
  // =========================================================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.muted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    }

    tone(freq, type, duration, vol = 0.16, slideTo = null) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(freq, now);
        if (slideTo) {
          osc.frequency.exponentialRampToValueAtTime(Math.max(40, slideTo), now + duration);
        }
        gain.gain.setValueAtTime(vol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + duration);
      } catch (e) {}
    }

    hitMallet(power = 1) {
      const base = 240 + Math.min(300, power * 16);
      this.tone(base, 'triangle', 0.11, 0.22, base * 1.65);
      this.tone(base * 0.5, 'sine', 0.14, 0.18, 90);
    }

    hitWall() {
      this.tone(520, 'sine', 0.08, 0.14, 320);
    }

    hitPost() {
      this.tone(880, 'triangle', 0.16, 0.22, 440);
    }

    hitBumper() {
      this.tone(680, 'triangle', 0.14, 0.20, 1080);
    }

    coinArrive() {
      this.tone(987.77, 'sine', 0.12, 0.18, 1318.5);
    }

    starSpawn() {
      this.tone(1046.5, 'sine', 0.14, 0.16, 1567.98);
      setTimeout(() => this.tone(1318.5, 'triangle', 0.18, 0.15, 1975.53), 65);
    }

    matchLaunch() {
      this.tone(784, 'triangle', 0.14, 0.20, 1174.66);
      [440, 554.37, 659.25, 880].forEach((f, idx) => {
        setTimeout(() => this.tone(f, 'triangle', 0.18, 0.18, f * 1.04), 60 + idx * 55);
      });
    }

    feverChime() {
      const notes = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];
      notes.forEach((f, idx) => {
        setTimeout(() => this.tone(f, 'triangle', 0.20, 0.22, f * 1.12), idx * 55);
      });
    }

    powerPedal(kind) {
      if (kind === 'vortex') {
        this.tone(320, 'sawtooth', 0.28, 0.16, 880);
      } else if (kind === 'fire') {
        this.tone(180, 'sawtooth', 0.25, 0.24, 920);
        this.tone(440, 'triangle', 0.22, 0.20, 1120);
      } else {
        this.tone(280, 'sine', 0.30, 0.20, 660);
      }
    }

    goalScored(isPlayer) {
      if (isPlayer) {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
          setTimeout(() => this.tone(f, 'triangle', 0.22, 0.22, f * 1.05), idx * 75);
        });
      } else {
        [340, 260, 190].forEach((f, idx) => {
          setTimeout(() => this.tone(f, 'sawtooth', 0.20, 0.16, f * 0.85), idx * 90);
        });
      }
    }

    fanfare(win) {
      if (win) {
        [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((n, idx) => {
          setTimeout(() => this.tone(n, 'triangle', 0.26, 0.22, n * 1.03), idx * 90);
        });
      } else {
        // Descending sawtooth sad trombone with pitch-bend slide on the final note
        const sadNotes = [
          { f: 392.0, dur: 0.22, slide: 375.0 },
          { f: 369.99, dur: 0.22, slide: 352.0 },
          { f: 349.23, dur: 0.22, slide: 332.0 },
          { f: 329.63, dur: 0.52, slide: 196.0 }
        ];
        sadNotes.forEach((n, idx) => {
          setTimeout(() => this.tone(n.f, 'sawtooth', n.dur, 0.20, n.slide), idx * 145);
        });
      }
    }
  }

  const sfx = new SoundEngine();

  // =========================================================================
  // 3. THREE.JS R161 SCENE, CAMERA, LIGHTING, SHADOWS & PER-STAGE PMREM CACHE
  // =========================================================================
  const container = document.getElementById('webgl-container');

  function showWebGLFallback() {
    if (!container) return;
    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:64px;background:#12082e;color:#fff;">
        🖥️❌🎮
      </div>
    `;
  }

  if (typeof window.THREE === 'undefined') {
    showWebGLFallback();
    return;
  }

  let renderer = null;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  } catch (err) {
    showWebGLFallback();
    return;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d0728);
  scene.fog = new THREE.Fog(0x160c3e, 55, 135);

  const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.5, 190);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const maxAnisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy() || 1);
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const stageEnvCache = {};
  function getOrBuildStageEnvironment(stage) {
    const sid = stage.id;
    if (stageEnvCache[sid]) return stageEnvCache[sid];

    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(stage.theme.bgColor);
    const panelGeo = new THREE.PlaneGeometry(20, 20);
    const cols = stage.theme.envColors || [0x55d8ff, 0xd946ef, 0xfacc15];

    const topMat = new THREE.MeshBasicMaterial({ color: cols[0], side: THREE.DoubleSide });
    const leftMat = new THREE.MeshBasicMaterial({ color: cols[1], side: THREE.DoubleSide });
    const rightMat = new THREE.MeshBasicMaterial({ color: cols[2], side: THREE.DoubleSide });

    const topPanel = new THREE.Mesh(panelGeo, topMat);
    topPanel.position.set(0, 15, 0);
    topPanel.rotation.x = Math.PI / 2;
    envScene.add(topPanel);

    const leftPanel = new THREE.Mesh(panelGeo, leftMat);
    leftPanel.position.set(-15, 4, 0);
    leftPanel.rotation.y = Math.PI / 2;
    envScene.add(leftPanel);

    const rightPanel = new THREE.Mesh(panelGeo, rightMat);
    rightPanel.position.set(15, 4, 0);
    rightPanel.rotation.y = Math.PI / 2;
    envScene.add(rightPanel);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const tex = pmrem.fromScene(envScene, 0.04).texture;
    stageEnvCache[sid] = tex;

    panelGeo.dispose();
    topMat.dispose();
    leftMat.dispose();
    rightMat.dispose();
    pmrem.dispose();
    return tex;
  }

  renderer.domElement.addEventListener('webglcontextrestored', () => {
    Object.keys(stageEnvCache).forEach((k) => {
      if (stageEnvCache[k]) stageEnvCache[k].dispose();
      delete stageEnvCache[k];
    });
    const st = getStageById(state.stageId);
    scene.environment = getOrBuildStageEnvironment(st);
  });

  const hemiLight = new THREE.HemisphereLight(0x99bbff, 0x26124d, 0.95);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
  dirLight.position.set(10, 24, 14);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.set(2048, 2048);
  dirLight.shadow.camera.left = -17;
  dirLight.shadow.camera.right = 17;
  dirLight.shadow.camera.top = 15;
  dirLight.shadow.camera.bottom = -15;
  dirLight.shadow.camera.near = 5;
  dirLight.shadow.camera.far = 60;
  dirLight.shadow.bias = -0.0004;
  dirLight.shadow.normalBias = 0.02;
  dirLight.shadow.camera.updateProjectionMatrix();
  scene.add(dirLight);

  const stadiumPointLight1 = new THREE.PointLight(0x00f0ff, 28, 48, 1);
  stadiumPointLight1.position.set(-8, 8, 6);
  scene.add(stadiumPointLight1);

  const stadiumPointLight2 = new THREE.PointLight(0xff44aa, 28, 48, 1);
  stadiumPointLight2.position.set(8, 8, -6);
  scene.add(stadiumPointLight2);

  function createSoftShadowTexture() {
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 8, 64, 64, 60);
    g.addColorStop(0.0, 'rgba(0, 0, 0, 0.58)');
    g.addColorStop(0.55, 'rgba(0, 0, 0, 0.26)');
    g.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }
  const sharedContactShadowTex = createSoftShadowTexture();

  function createCritterFallbackTexture(critter) {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = critter.glow || '#ffaa33';
    ctx.beginPath();
    ctx.arc(128, 128, 124, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.font = '130px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(critter.emoji, 128, 136);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = maxAnisotropy;
    return tex;
  }

  const portraitTextures = {};
  const playBtnEl = document.getElementById('btn-start-match');
  if (playBtnEl) playBtnEl.style.opacity = '0.85';

  const loadingManager = new THREE.LoadingManager(
    () => {
      if (playBtnEl) playBtnEl.style.opacity = '1';
    },
    undefined,
    () => {
      if (playBtnEl) playBtnEl.style.opacity = '1';
    }
  );

  const texLoader = new THREE.TextureLoader(loadingManager);
  CRITTERS.forEach((c) => {
    portraitTextures[c.id] = createCritterFallbackTexture(c);
    texLoader.load(
      c.icon,
      (loadedTex) => {
        loadedTex.colorSpace = THREE.SRGBColorSpace;
        loadedTex.anisotropy = maxAnisotropy;
        const oldFallback = portraitTextures[c.id];
        portraitTextures[c.id] = loadedTex;
        if (oldFallback && oldFallback !== loadedTex) oldFallback.dispose();
        refreshLoadedPortraits();
      },
      undefined,
      () => {}
    );
  });

  function drawStageIceMotif(ctx, stage, w2pxX, w2pxZ, PX) {
    const motif = stage.theme.motif;
    ctx.save();
    const spots = [
      { x: -5.2, z: -8.6 }, { x: 5.2, z: -8.6 },
      { x: -5.2, z:  8.6 }, { x: 5.2, z:  8.6 },
      { x: 0.0,  z:  0.0 }
    ];

    spots.forEach((pt, idx) => {
      const cx = w2pxX(pt.x);
      const cz = w2pxZ(pt.z);
      const scale = idx === 4 ? 1.35 : 0.85;
      const r = 1.15 * PX * scale;

      ctx.save();
      ctx.translate(cx, cz);
      ctx.globalAlpha = idx === 4 ? 0.34 : 0.26;

      if (motif === 'moon') {
        ctx.fillStyle = '#c084fc';
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(r * 0.38, -r * 0.18, r * 0.82, 0, Math.PI * 2);
        ctx.fill();
      } else if (motif === 'sun') {
        ctx.fillStyle = '#fbbf24';
        for (let ray = 0; ray < 12; ray++) {
          ctx.rotate(Math.PI / 6);
          ctx.beginPath();
          ctx.moveTo(0, -r * 1.25);
          ctx.lineTo(r * 0.22, -r * 0.65);
          ctx.lineTo(-r * 0.22, -r * 0.65);
          ctx.closePath();
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.62, 0, Math.PI * 2);
        ctx.fill();
      } else if (motif === 'apple') {
        ctx.fillStyle = '#ff4da6';
        ctx.beginPath();
        ctx.arc(-r * 0.28, 0, r * 0.65, 0, Math.PI * 2);
        ctx.arc(r * 0.28, 0, r * 0.65, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#a3e635';
        ctx.beginPath();
        ctx.ellipse(r * 0.2, -r * 0.72, r * 0.32, r * 0.16, -0.4, 0, Math.PI * 2);
        ctx.fill();
      } else if (motif === 'rainbow') {
        const rainbowCols = ['#ff3366', '#ffaa00', '#ffee00', '#00ffaa', '#00ccff'];
        rainbowCols.forEach((col, cIdx) => {
          ctx.strokeStyle = col;
          ctx.lineWidth = 7;
          ctx.beginPath();
          ctx.arc(0, r * 0.3, r * (1.05 - cIdx * 0.16), Math.PI, Math.PI * 2);
          ctx.stroke();
        });
      } else if (motif === 'lightning') {
        ctx.fillStyle = '#ffee00';
        ctx.beginPath();
        ctx.moveTo(r * 0.2, -r);
        ctx.lineTo(-r * 0.55, r * 0.08);
        ctx.lineTo(r * 0.05, r * 0.08);
        ctx.lineTo(-r * 0.25, r);
        ctx.lineTo(r * 0.55, -r * 0.12);
        ctx.lineTo(-r * 0.05, -r * 0.12);
        ctx.closePath();
        ctx.fill();
      } else if (motif === 'heart') {
        ctx.fillStyle = '#ff3366';
        ctx.beginPath();
        ctx.arc(-r * 0.35, -r * 0.2, r * 0.45, Math.PI, 0);
        ctx.arc(r * 0.35, -r * 0.2, r * 0.45, Math.PI, 0);
        ctx.lineTo(0, r * 0.85);
        ctx.closePath();
        ctx.fill();
      } else if (motif === 'carrot') {
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.moveTo(-r * 0.45, -r * 0.55);
        ctx.lineTo(r * 0.45, -r * 0.55);
        ctx.lineTo(0, r * 0.95);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#10ff99';
        ctx.beginPath();
        ctx.arc(0, -r * 0.72, r * 0.32, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = '#ffdd00';
        ctx.beginPath();
        ctx.moveTo(-r * 0.8, r * 0.5);
        ctx.lineTo(-r * 0.9, -r * 0.45);
        ctx.lineTo(-r * 0.35, 0);
        ctx.lineTo(0, -r * 0.65);
        ctx.lineTo(r * 0.35, 0);
        ctx.lineTo(r * 0.9, -r * 0.45);
        ctx.lineTo(r * 0.8, r * 0.5);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    });
    ctx.restore();
  }

  function createRinkMarkingsTexture(stage) {
    const PX = 48;
    const W = Math.round(RINK.halfW * 2 * PX);
    const H = Math.round(RINK.halfL * 2 * PX);
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const w2pxX = (wx) => (wx + RINK.halfW) * PX;
    const w2pxZ = (wz) => (wz + RINK.halfL) * PX;

    const hexBg = '#' + stage.rinkColor.toString(16).padStart(6, '0');
    const hexRail = '#' + stage.railColor.toString(16).padStart(6, '0');
    const hexAcc = '#' + stage.accentColor.toString(16).padStart(6, '0');

    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, hexBg);
    grad.addColorStop(0.5, stage.theme.iceCenter || '#271b68');
    grad.addColorStop(1, hexBg);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    drawStageIceMotif(ctx, stage, w2pxX, w2pxZ, PX);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.14)';
    for (let wz = -RINK.halfL + 1; wz <= RINK.halfL - 1; wz += 1.0) {
      for (let wx = -RINK.halfW + 1; wx <= RINK.halfW - 1; wx += 1.0) {
        ctx.beginPath();
        ctx.arc(w2pxX(wx), w2pxZ(wz), 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.strokeStyle = hexRail;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, w2pxZ(0));
    ctx.lineTo(W, w2pxZ(0));
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.26)';
    ctx.lineWidth = 5;
    [-5.5, 5.5].forEach((wz) => {
      ctx.beginPath();
      ctx.moveTo(0, w2pxZ(wz));
      ctx.lineTo(W, w2pxZ(wz));
      ctx.stroke();
    });

    ctx.strokeStyle = hexAcc;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(w2pxX(0), w2pxZ(0), 2.4 * PX, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(w2pxX(0), w2pxZ(0), 0.55 * PX, 0, Math.PI * 2);
    ctx.fillStyle = hexRail;
    ctx.fill();

    const creaseR = RINK.goalHalfW * PX;
    ctx.fillStyle = 'rgba(0, 240, 255, 0.10)';
    ctx.strokeStyle = hexRail;
    ctx.lineWidth = 7;

    ctx.beginPath();
    ctx.arc(w2pxX(0), w2pxZ(-RINK.halfL), creaseR, 0, Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(w2pxX(0), w2pxZ(RINK.halfL), creaseR, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = maxAnisotropy;
    return tex;
  }

  // =========================================================================
  // 4. REUSABLE 3D GROUPS, MALLETS, PUCKS, SHOCKWAVES, STAR COINS & INSTANCED SPARKS
  // =========================================================================
  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  const stageGroup = new THREE.Group();
  worldGroup.add(stageGroup);

  let currentRinkTexture = null;

  function clearGroupDeep(group) {
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if (child.children && child.children.length) {
        clearGroupDeep(child);
      }
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    }
  }

  function createCritterMalletMesh(critter) {
    const g = new THREE.Group();

    const shadowGeo = new THREE.PlaneGeometry(RINK.malletR * 2.55, RINK.malletR * 2.55);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: sharedContactShadowTex,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      fog: false
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(-0.08, 0.02, -0.10);
    g.add(shadow);

    const ringGeo = new THREE.CylinderGeometry(RINK.malletR, RINK.malletR * 1.04, 0.52, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: critter.color,
      emissive: critter.color,
      emissiveIntensity: 0.34,
      metalness: 0.62,
      roughness: 0.24
    });
    const baseCyl = new THREE.Mesh(ringGeo, ringMat);
    baseCyl.position.y = 0.26;
    baseCyl.castShadow = true;
    baseCyl.receiveShadow = true;
    g.add(baseCyl);

    const collarGeo = new THREE.CylinderGeometry(RINK.malletR * 0.84, RINK.malletR * 0.92, 0.24, 32);
    const collarMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.82,
      roughness: 0.18
    });
    const collar = new THREE.Mesh(collarGeo, collarMat);
    collar.position.y = 0.54;
    collar.castShadow = true;
    g.add(collar);

    const medalGroup = new THREE.Group();
    medalGroup.position.y = 0.98;

    const medalGeo = new THREE.CircleGeometry(1.12, 32);
    const medalMat = new THREE.MeshBasicMaterial({
      map: portraitTextures[critter.id],
      toneMapped: false,
      fog: false
    });
    const medal = new THREE.Mesh(medalGeo, medalMat);
    medalGroup.add(medal);

    const medalRingGeo = new THREE.RingGeometry(1.06, 1.24, 32);
    const medalRingMat = new THREE.MeshBasicMaterial({
      color: critter.color,
      side: THREE.DoubleSide,
      toneMapped: false,
      fog: false
    });
    const medalRing = new THREE.Mesh(medalRingGeo, medalRingMat);
    medalRing.position.z = 0.02;
    medalGroup.add(medalRing);

    g.add(medalGroup);

    const auraGeo = new THREE.RingGeometry(RINK.malletR * 1.08, RINK.malletR * 1.45, 32);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
      toneMapped: false,
      fog: false,
      blending: THREE.AdditiveBlending
    });
    const aura = new THREE.Mesh(auraGeo, auraMat);
    aura.rotation.x = -Math.PI / 2;
    aura.position.y = 0.08;
    g.add(aura);

    g.userData = { critterId: critter.id, ringMat, medalGroup, medalMat, medalRingMat, aura, auraMat };
    return g;
  }

  const playerMalletMesh = createCritterMalletMesh(CRITTERS[0]);
  const rivalMalletMesh = createCritterMalletMesh(CRITTERS[1]);
  worldGroup.add(playerMalletMesh);
  worldGroup.add(rivalMalletMesh);

  function updateMalletCritter(mesh, critter) {
    const ud = mesh.userData;
    ud.critterId = critter.id;
    ud.ringMat.color.setHex(critter.color);
    ud.ringMat.emissive.setHex(critter.color);
    ud.medalRingMat.color.setHex(critter.color);
    ud.medalMat.map = portraitTextures[critter.id];
    ud.medalMat.needsUpdate = true;
  }

  let playerArchPostMat = null;
  let rivalArchPostMat = null;
  let playerJumboPicMat = null;
  let rivalJumboPicMat = null;
  let jumbotronPlayerId = 'dogday';
  let jumbotronRivalId = 'catnap';

  function refreshLoadedPortraits() {
    if (playerMalletMesh && playerMalletMesh.userData) {
      const pid = playerMalletMesh.userData.critterId;
      playerMalletMesh.userData.medalMat.map = portraitTextures[pid];
      playerMalletMesh.userData.medalMat.needsUpdate = true;
    }
    if (rivalMalletMesh && rivalMalletMesh.userData) {
      const rid = rivalMalletMesh.userData.critterId;
      rivalMalletMesh.userData.medalMat.map = portraitTextures[rid];
      rivalMalletMesh.userData.medalMat.needsUpdate = true;
    }
    if (playerJumboPicMat) {
      playerJumboPicMat.map = portraitTextures[jumbotronPlayerId];
      playerJumboPicMat.needsUpdate = true;
    }
    if (rivalJumboPicMat) {
      rivalJumboPicMat.map = portraitTextures[jumbotronRivalId];
      rivalJumboPicMat.needsUpdate = true;
    }
  }

  // 3D Swirling Vortex Portal / Attractor Ring Mesh (Pedal 1: Vortex at Rival Goal Mouth)
  const vortexPortalMesh = new THREE.Group();
  vortexPortalMesh.position.set(0, 0.08, -RINK.halfL + 0.8);
  vortexPortalMesh.visible = false;

  const vortexOuterGeo = new THREE.RingGeometry(1.45, 2.35, 36);
  const vortexOuterMat = new THREE.MeshBasicMaterial({
    color: 0xd884ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    toneMapped: false,
    fog: false,
    blending: THREE.AdditiveBlending
  });
  const vortexOuterRing = new THREE.Mesh(vortexOuterGeo, vortexOuterMat);
  vortexOuterRing.rotation.x = -Math.PI / 2;
  vortexPortalMesh.add(vortexOuterRing);

  const vortexInnerGeo = new THREE.RingGeometry(0.55, 1.18, 6);
  const vortexInnerMat = new THREE.MeshBasicMaterial({
    color: 0x00f5ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
    toneMapped: false,
    fog: false,
    blending: THREE.AdditiveBlending
  });
  const vortexInnerRing = new THREE.Mesh(vortexInnerGeo, vortexInnerMat);
  vortexInnerRing.rotation.x = -Math.PI / 2;
  vortexInnerRing.position.y = 0.03;
  vortexPortalMesh.add(vortexInnerRing);

  const vortexCoreGeo = new THREE.CircleGeometry(0.48, 24);
  const vortexCoreMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    toneMapped: false,
    fog: false,
    blending: THREE.AdditiveBlending
  });
  const vortexCoreDisc = new THREE.Mesh(vortexCoreGeo, vortexCoreMat);
  vortexCoreDisc.rotation.x = -Math.PI / 2;
  vortexCoreDisc.position.y = 0.05;
  vortexPortalMesh.add(vortexCoreDisc);
  vortexPortalMesh.userData = {
    outerRing: vortexOuterRing,
    outerMat: vortexOuterMat,
    innerRing: vortexInnerRing,
    innerMat: vortexInnerMat,
    coreDisc: vortexCoreDisc,
    coreMat: vortexCoreMat
  };
  worldGroup.add(vortexPortalMesh);

  // 3D Giant Goal Shield Mesh with Unlit Additive Neon Border & Crest (Pedal 3: Shield)
  const goalShieldMesh = new THREE.Group();
  goalShieldMesh.position.set(0, 0.8, RINK.halfL - 0.5);
  goalShieldMesh.visible = false;

  const shieldGeo = new THREE.BoxGeometry(RINK.goalHalfW * 2.1, 1.6, 0.45);
  const shieldMat = new THREE.MeshStandardMaterial({
    color: 0x00f7ff,
    emissive: 0x00e5ff,
    emissiveIntensity: 0.85,
    transparent: true,
    opacity: 0.0,
    roughness: 0.12,
    metalness: 0.4,
    toneMapped: false,
    fog: false
  });
  const shieldCoreMesh = new THREE.Mesh(shieldGeo, shieldMat);
  goalShieldMesh.add(shieldCoreMesh);

  const shieldRimGeo = new THREE.BoxGeometry(RINK.goalHalfW * 2.16, 1.72, 0.52);
  const shieldRimMat = new THREE.MeshBasicMaterial({
    color: 0x66ffff,
    wireframe: true,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
    toneMapped: false,
    fog: false,
    blending: THREE.AdditiveBlending
  });
  const shieldRimMesh = new THREE.Mesh(shieldRimGeo, shieldRimMat);
  goalShieldMesh.add(shieldRimMesh);

  const shieldCrestGeo = new THREE.RingGeometry(0.45, 0.72, 6);
  const shieldCrestMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    toneMapped: false,
    fog: false,
    blending: THREE.AdditiveBlending
  });
  const shieldCrestRing = new THREE.Mesh(shieldCrestGeo, shieldCrestMat);
  shieldCrestRing.position.set(0, 0.05, -0.26);
  goalShieldMesh.add(shieldCrestRing);
  goalShieldMesh.userData = {
    coreMesh: shieldCoreMesh,
    coreMat: shieldMat,
    rimMesh: shieldRimMesh,
    rimMat: shieldRimMat,
    crestRing: shieldCrestRing,
    crestMat: shieldCrestMat
  };
  let shieldFlashTimer = 0;
  worldGroup.add(goalShieldMesh);

  // Pre-allocated Puck Pool (with 3D Hop Y, Spin Velocity & Hit Cooldowns)
  const MAX_PUCK_POOL = 5;
  const puckPool = [];
  const sharedPuckShadowGeo = new THREE.PlaneGeometry(RINK.puckR * 2.6, RINK.puckR * 2.6);
  const sharedPuckBodyGeo = new THREE.CylinderGeometry(RINK.puckR, RINK.puckR, 0.34, 28);
  const sharedPuckTopGeo = new THREE.CircleGeometry(RINK.puckR * 0.72, 24);
  const sharedPuckGlowGeo = new THREE.RingGeometry(RINK.puckR * 1.02, RINK.puckR * 1.38, 24);

  for (let i = 0; i < MAX_PUCK_POOL; i++) {
    const pGroup = new THREE.Group();

    const sMat = new THREE.MeshBasicMaterial({
      map: sharedContactShadowTex,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      fog: false
    });
    const sMesh = new THREE.Mesh(sharedPuckShadowGeo, sMat);
    sMesh.rotation.x = -Math.PI / 2;
    sMesh.position.set(-0.06, 0.02, -0.08);
    pGroup.add(sMesh);

    const puckBodyGroup = new THREE.Group();
    pGroup.add(puckBodyGroup);

    const bMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x00c8ff,
      emissiveIntensity: 0.42,
      metalness: 0.68,
      roughness: 0.22
    });
    const bMesh = new THREE.Mesh(sharedPuckBodyGeo, bMat);
    bMesh.position.y = 0.18;
    bMesh.castShadow = true;
    bMesh.receiveShadow = true;
    puckBodyGroup.add(bMesh);

    const tMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false, fog: false });
    const tMesh = new THREE.Mesh(sharedPuckTopGeo, tMat);
    tMesh.rotation.x = -Math.PI / 2;
    tMesh.position.y = 0.36;
    puckBodyGroup.add(tMesh);

    const gMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      toneMapped: false,
      fog: false,
      blending: THREE.AdditiveBlending
    });
    const gMesh = new THREE.Mesh(sharedPuckGlowGeo, gMat);
    gMesh.rotation.x = -Math.PI / 2;
    gMesh.position.y = 0.05;
    puckBodyGroup.add(gMesh);

    pGroup.visible = false;
    worldGroup.add(pGroup);

    puckPool.push({
      active: false,
      x: 0,
      y: 0,
      z: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      spinVel: 5.0,
      hitCooldownP: 0,
      hitCooldownR: 0,
      trailTimer: 0,
      kind: 'normal',
      points: 1,
      lastTouchedBy: 'player',
      mesh: pGroup,
      bodyGroup: puckBodyGroup,
      bodyMat: bMat,
      topMat: tMat,
      glowMat: gMat
    });
  }

  // =========================================================================
  // 4b. TACTILE IMPACT LAYER:
  //   1) 160-Slot Additive InstancedMesh Sparks (with 30 Goal-Reserved Slots + Floor Bounce)
  //   2) 10 Additive 3D Shockwave Rings + Goal Light Pillar
  //   3) 24 3D Flying Star Coins (Arc + Homing to HUD Score Pill)
  // =========================================================================
  const SPARK_TOTAL = 160;
  const SPARK_GENERAL_LIMIT = 130;
  const sharedSparkGeo = new THREE.OctahedronGeometry(0.24, 0);
  const instancedSparkMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
    fog: false
  });
  const sparkInstancedMesh = new THREE.InstancedMesh(sharedSparkGeo, instancedSparkMat, SPARK_TOTAL);
  sparkInstancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  worldGroup.add(sparkInstancedMesh);

  const sparkData = [];
  const dummyMatrix = new THREE.Matrix4();
  const dummyPos = new THREE.Vector3();
  const dummyQuat = new THREE.Quaternion();
  const dummyScale = new THREE.Vector3();
  const dummyColor = new THREE.Color();

  for (let i = 0; i < SPARK_TOTAL; i++) {
    sparkData.push({
      active: false,
      life: 0,
      maxLife: 0.45,
      x: 0, y: -100, z: 0,
      vx: 0, vy: 0, vz: 0,
      baseSize: 1.0
    });
    dummyScale.setScalar(0);
    dummyMatrix.compose(dummyPos.set(0, -100, 0), dummyQuat, dummyScale);
    sparkInstancedMesh.setMatrixAt(i, dummyMatrix);
    sparkInstancedMesh.setColorAt(i, dummyColor.setHex(0x00f5ff));
  }
  sparkInstancedMesh.instanceMatrix.needsUpdate = true;
  if (sparkInstancedMesh.instanceColor) sparkInstancedMesh.instanceColor.needsUpdate = true;

  let nextGeneralSparkIdx = 0;
  let nextGoalSparkIdx = SPARK_GENERAL_LIMIT;

  function spawnSparkBurst(x, z, colorHex = 0x00f5ff, count = 10, isGoal = false) {
    dummyColor.setHex(colorHex);
    for (let c = 0; c < count; c++) {
      let idx;
      if (isGoal) {
        idx = nextGoalSparkIdx;
        nextGoalSparkIdx = SPARK_GENERAL_LIMIT + ((nextGoalSparkIdx - SPARK_GENERAL_LIMIT + 1) % (SPARK_TOTAL - SPARK_GENERAL_LIMIT));
      } else {
        idx = nextGeneralSparkIdx;
        nextGeneralSparkIdx = (nextGeneralSparkIdx + 1) % SPARK_GENERAL_LIMIT;
      }

      const sp = sparkData[idx];
      sp.active = true;
      sp.life = 0;
      sp.maxLife = (isGoal ? 0.52 : 0.34) + Math.random() * 0.24;
      const angle = Math.random() * Math.PI * 2;
      const spd = (isGoal ? 7 : 4) + Math.random() * (isGoal ? 15 : 11);
      sp.x = x;
      sp.y = 0.35;
      sp.z = z;
      sp.vx = Math.cos(angle) * spd;
      sp.vy = (isGoal ? 6 : 3.5) + Math.random() * 7.5;
      sp.vz = Math.sin(angle) * spd;
      sp.baseSize = (isGoal ? 1.15 : 0.75) + Math.random() * 0.65;

      sparkInstancedMesh.setColorAt(idx, dummyColor);
    }
    if (sparkInstancedMesh.instanceColor) sparkInstancedMesh.instanceColor.needsUpdate = true;
  }

  // Shockwave Ring Pool + Goal Light Pillar
  const SHOCKWAVE_POOL_SIZE = 10;
  const shockwavePool = [];
  const sharedShockwaveGeo = new THREE.RingGeometry(0.78, 1.0, 48);
  for (let i = 0; i < SHOCKWAVE_POOL_SIZE; i++) {
    const swMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
      fog: false
    });
    const swMesh = new THREE.Mesh(sharedShockwaveGeo, swMat);
    swMesh.rotation.x = -Math.PI / 2;
    swMesh.position.y = 0.06;
    swMesh.visible = false;
    worldGroup.add(swMesh);
    shockwavePool.push({
      active: false,
      life: 0,
      maxLife: 0.36,
      startScale: 0.8,
      endScale: 4.2,
      mesh: swMesh,
      mat: swMat
    });
  }
  let nextShockwaveIdx = 0;

  function spawnShockwaveRing(x, z, colorHex = 0x00f5ff, endScale = 4.2, maxLife = 0.36) {
    const sw = shockwavePool[nextShockwaveIdx];
    nextShockwaveIdx = (nextShockwaveIdx + 1) % SHOCKWAVE_POOL_SIZE;
    sw.active = true;
    sw.life = 0;
    sw.maxLife = maxLife;
    sw.startScale = 0.75;
    sw.endScale = endScale;
    sw.mat.color.setHex(colorHex);
    sw.mat.opacity = 0.92;
    sw.mesh.position.set(x, 0.06, z);
    sw.mesh.scale.setScalar(sw.startScale);
    sw.mesh.visible = true;
  }

  // Goal Light Pillar Mesh
  const goalPillarGeo = new THREE.CylinderGeometry(2.4, 2.8, 9.5, 28, 1, true);
  const goalPillarMat = new THREE.MeshBasicMaterial({
    color: 0x00ffaa,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
    fog: false
  });
  const goalPillarMesh = new THREE.Mesh(goalPillarGeo, goalPillarMat);
  goalPillarMesh.visible = false;
  worldGroup.add(goalPillarMesh);
  let goalPillarTimer = 0;

  // 3D Flying Star Coins Pool (24 Sprites with Golden Star CanvasTexture)
  function createStarCoinTexture() {
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 6, 64, 64, 58);
    grad.addColorStop(0, 'rgba(255, 250, 160, 1.0)');
    grad.addColorStop(0.55, 'rgba(255, 195, 0, 0.92)');
    grad.addColorStop(1, 'rgba(255, 140, 0, 0.0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(64, 64, 58, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '78px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⭐', 64, 68);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }
  const sharedStarCoinTex = createStarCoinTexture();
  const STAR_COIN_POOL_SIZE = 24;
  const starCoinPool = [];

  for (let i = 0; i < STAR_COIN_POOL_SIZE; i++) {
    const scMat = new THREE.SpriteMaterial({
      map: sharedStarCoinTex,
      transparent: true,
      opacity: 1,
      depthTest: false,
      toneMapped: false,
      fog: false
    });
    const sprite = new THREE.Sprite(scMat);
    sprite.scale.set(1.65, 1.65, 1);
    sprite.visible = false;
    worldGroup.add(sprite);
    starCoinPool.push({
      active: false,
      age: 0,
      arcDuration: 0.35,
      homeDuration: 0.42,
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0,
      startX: 0, startY: 0, startZ: 0,
      toPlayerHud: true,
      sprite
    });
  }
  let nextStarCoinIdx = 0;
  const scratchHudWorld = new THREE.Vector3();

  function getHudScoreWorldTarget(forPlayer = true) {
    const el = document.getElementById(forPlayer ? 'hud-player-goals' : 'hud-rival-goals');
    let ndcX = forPlayer ? -0.08 : 0.08;
    let ndcY = 0.86;
    if (el) {
      const r = el.getBoundingClientRect();
      if (r.width > 0) {
        ndcX = ((r.left + r.width * 0.5) / Math.max(1, window.innerWidth)) * 2 - 1;
        ndcY = -((r.top + r.height * 0.5) / Math.max(1, window.innerHeight)) * 2 + 1;
      }
    }
    scratchHudWorld.set(ndcX, ndcY, 0.5).unproject(camera);
    scratchHudWorld.sub(camera.position).normalize().multiplyScalar(16).add(camera.position);
    return scratchHudWorld;
  }

  function spawnFlyingStarCoins(x, z, count = 2, forPlayer = true) {
    for (let i = 0; i < count; i++) {
      const coin = starCoinPool[nextStarCoinIdx];
      nextStarCoinIdx = (nextStarCoinIdx + 1) % STAR_COIN_POOL_SIZE;
      coin.active = true;
      coin.age = -i * 0.06;
      coin.x = x + (Math.random() - 0.5) * 1.2;
      coin.y = 0.8;
      coin.z = z;
      const spreadAngle = -Math.PI * 0.5 + (Math.random() - 0.5) * 1.2;
      const hSpd = 3.5 + Math.random() * 4.5;
      coin.vx = Math.cos(spreadAngle) * hSpd;
      coin.vy = 6.8 + Math.random() * 2.8;
      coin.vz = Math.sin(spreadAngle) * hSpd * (forPlayer ? 1 : -1);
      coin.toPlayerHud = forPlayer;
      coin.sprite.position.set(coin.x, coin.y, coin.z);
      coin.sprite.scale.setScalar(1.65);
      coin.sprite.visible = true;
    }
  }

  // =========================================================================
  // 5. BUILD 3D NEON STADIUM RINK, SIDE JUMBOTRONS, STAND PROPS & OBSTACLES
  // =========================================================================
  let stageBumpers = [];
  let stageSpinners = [];
  let stageBoostPads = [];

  function createStageMotifBadgeTexture(stage) {
    const c = document.createElement('canvas');
    c.width = 192;
    c.height = 192;
    const ctx = c.getContext('2d');
    const hexAcc = '#' + stage.accentColor.toString(16).padStart(6, '0');
    const hexRail = '#' + stage.railColor.toString(16).padStart(6, '0');
    ctx.fillStyle = hexAcc;
    ctx.beginPath();
    ctx.arc(96, 96, 88, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = hexRail;
    ctx.stroke();
    ctx.font = '102px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(stage.emoji, 96, 104);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function buildStadium3D(stage) {
    clearGroupDeep(stageGroup);
    if (currentRinkTexture) {
      currentRinkTexture.dispose();
      currentRinkTexture = null;
    }

    stageBumpers = [];
    stageSpinners = [];
    stageBoostPads = [];

    scene.background.setHex(stage.theme.bgColor);
    scene.fog.color.setHex(stage.theme.fogColor);
    hemiLight.color.setHex(stage.theme.hemiSky);
    hemiLight.groundColor.setHex(stage.theme.hemiGround);
    scene.environment = getOrBuildStageEnvironment(stage);

    currentRinkTexture = createRinkMarkingsTexture(stage);

    const iceGeo = new THREE.PlaneGeometry(RINK.halfW * 2, RINK.halfL * 2);
    const iceMat = new THREE.MeshStandardMaterial({
      map: currentRinkTexture,
      roughness: 0.25,
      metalness: 0.14
    });
    const iceMesh = new THREE.Mesh(iceGeo, iceMat);
    iceMesh.rotation.x = -Math.PI / 2;
    iceMesh.receiveShadow = true;
    stageGroup.add(iceMesh);

    const baseGeo = new THREE.BoxGeometry(RINK.halfW * 2 + 1.4, 1.2, RINK.halfL * 2 + 1.4);
    const baseMat = new THREE.MeshStandardMaterial({
      color: stage.theme.bgColor,
      metalness: 0.65,
      roughness: 0.32
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.62;
    baseMesh.receiveShadow = true;
    stageGroup.add(baseMesh);

    const railMat = new THREE.MeshStandardMaterial({
      color: stage.railColor,
      emissive: stage.railColor,
      emissiveIntensity: 0.35,
      metalness: 0.72,
      roughness: 0.22
    });

    const sideLen = RINK.halfL * 2 + 0.6;
    const sideGeo = new THREE.BoxGeometry(0.65, 0.9, sideLen);

    const leftWall = new THREE.Mesh(sideGeo, railMat);
    leftWall.position.set(-RINK.halfW - 0.32, 0.45, 0);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    stageGroup.add(leftWall);

    const rightWall = new THREE.Mesh(sideGeo, railMat);
    rightWall.position.set(RINK.halfW + 0.32, 0.45, 0);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    stageGroup.add(rightWall);

    const wingW = RINK.halfW - RINK.goalHalfW;
    const wingGeo = new THREE.BoxGeometry(wingW, 0.9, 0.65);
    const wingCenterX = RINK.goalHalfW + wingW / 2;

    [-1, 1].forEach((zDir) => {
      [-1, 1].forEach((xDir) => {
        const wMesh = new THREE.Mesh(wingGeo, railMat);
        wMesh.position.set(xDir * wingCenterX, 0.45, zDir * (RINK.halfL + 0.32));
        wMesh.castShadow = true;
        wMesh.receiveShadow = true;
        stageGroup.add(wMesh);
      });
    });

    const rivalCritter = resolveRival(stage, state.playerCritterId);
    const playerCritter = getCritterById(state.playerCritterId);

    rivalArchPostMat = new THREE.MeshStandardMaterial({
      color: rivalCritter.color,
      emissive: rivalCritter.color,
      emissiveIntensity: 0.45,
      metalness: 0.78,
      roughness: 0.2
    });

    playerArchPostMat = new THREE.MeshStandardMaterial({
      color: playerCritter.color,
      emissive: playerCritter.color,
      emissiveIntensity: 0.45,
      metalness: 0.78,
      roughness: 0.2
    });

    [
      { z: -RINK.halfL, mat: rivalArchPostMat },
      { z: RINK.halfL, mat: playerArchPostMat }
    ].forEach((archInfo) => {
      const postGeo = new THREE.CylinderGeometry(RINK.postR, RINK.postR, 2.2, 16);
      [-RINK.goalHalfW, RINK.goalHalfW].forEach((px) => {
        const post = new THREE.Mesh(postGeo, archInfo.mat);
        post.position.set(px, 1.1, archInfo.z);
        post.castShadow = true;
        post.receiveShadow = true;
        stageGroup.add(post);
      });

      const barGeo = new THREE.BoxGeometry(RINK.goalHalfW * 2 + 0.6, 0.34, 0.34);
      const crossbar = new THREE.Mesh(barGeo, archInfo.mat);
      crossbar.position.set(0, 2.2, archInfo.z);
      crossbar.castShadow = true;
      stageGroup.add(crossbar);
    });

    jumbotronPlayerId = playerCritter.id;
    jumbotronRivalId = rivalCritter.id;

    const jumboFrameGeo = new THREE.BoxGeometry(5.2, 5.2, 0.4);
    const jumboPicGeo = new THREE.PlaneGeometry(4.4, 4.4);

    const rivalJumboGroup = new THREE.Group();
    rivalJumboGroup.position.set(12.6, 3.4, -3.8);
    rivalJumboGroup.rotation.y = -0.35;

    const rFrameMat = new THREE.MeshStandardMaterial({
      color: stage.theme.bgColor,
      emissive: stage.accentColor,
      emissiveIntensity: 0.42,
      metalness: 0.78,
      roughness: 0.22
    });
    const rFrame = new THREE.Mesh(jumboFrameGeo, rFrameMat);
    rFrame.castShadow = true;
    rivalJumboGroup.add(rFrame);

    rivalJumboPicMat = new THREE.MeshBasicMaterial({
      map: portraitTextures[rivalCritter.id],
      toneMapped: false,
      fog: false
    });
    const rPic = new THREE.Mesh(jumboPicGeo, rivalJumboPicMat);
    rPic.position.z = 0.24;
    rivalJumboGroup.add(rPic);
    stageGroup.add(rivalJumboGroup);

    const playerJumboGroup = new THREE.Group();
    playerJumboGroup.position.set(-12.6, 3.4, 2.2);
    playerJumboGroup.rotation.y = 0.35;

    const pFrameMat = new THREE.MeshStandardMaterial({
      color: stage.theme.bgColor,
      emissive: stage.railColor,
      emissiveIntensity: 0.42,
      metalness: 0.78,
      roughness: 0.22
    });
    const pFrame = new THREE.Mesh(jumboFrameGeo, pFrameMat);
    pFrame.castShadow = true;
    playerJumboGroup.add(pFrame);

    playerJumboPicMat = new THREE.MeshBasicMaterial({
      map: portraitTextures[playerCritter.id],
      toneMapped: false,
      fog: false
    });
    const pPic = new THREE.Mesh(jumboPicGeo, playerJumboPicMat);
    pPic.position.z = 0.24;
    playerJumboGroup.add(pPic);
    stageGroup.add(playerJumboGroup);

    const motifBadgeTex = createStageMotifBadgeTexture(stage);
    const pillarGeo = new THREE.CylinderGeometry(0.45, 0.65, 2.8, 16);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: stage.railColor,
      emissive: stage.accentColor,
      emissiveIntensity: 0.35,
      metalness: 0.75,
      roughness: 0.25
    });
    const totemGeo = new THREE.CircleGeometry(1.35, 24);
    const totemMat = new THREE.MeshBasicMaterial({
      map: motifBadgeTex,
      side: THREE.DoubleSide,
      toneMapped: false,
      fog: false
    });

    [
      { x: -12.2, z: -9.5, ry: 0.3 },
      { x: -12.2, z:  9.5, ry: 0.3 },
      { x:  12.2, z: -10.5, ry: -0.3 },
      { x:  12.2, z:  8.5, ry: -0.3 }
    ].forEach((pos) => {
      const pMesh = new THREE.Mesh(pillarGeo, pillarMat);
      pMesh.position.set(pos.x, 1.4, pos.z);
      pMesh.castShadow = true;
      stageGroup.add(pMesh);

      const tMesh = new THREE.Mesh(totemGeo, totemMat);
      tMesh.position.set(pos.x, 3.6, pos.z);
      tMesh.rotation.y = pos.ry;
      stageGroup.add(tMesh);
    });

    stage.bumpers.forEach((bDef) => {
      const bGroup = new THREE.Group();
      bGroup.position.set(bDef.x, 0, bDef.z);

      const bCylGeo = new THREE.CylinderGeometry(bDef.r, bDef.r * 1.08, 0.75, 24);
      const bCylMat = new THREE.MeshStandardMaterial({
        color: stage.accentColor,
        emissive: stage.accentColor,
        emissiveIntensity: 0.45,
        metalness: 0.7,
        roughness: 0.2
      });
      const bCyl = new THREE.Mesh(bCylGeo, bCylMat);
      bCyl.position.y = 0.38;
      bCyl.castShadow = true;
      bCyl.receiveShadow = true;
      bGroup.add(bCyl);

      const capGeo = new THREE.CircleGeometry(bDef.r * 0.8, 24);
      const capMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false, fog: false });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.rotation.x = -Math.PI / 2;
      cap.position.y = 0.77;
      bGroup.add(cap);

      stageGroup.add(bGroup);
      stageBumpers.push({ x: bDef.x, z: bDef.z, r: bDef.r, mesh: bGroup, pulse: 0 });
    });

    stage.spinners.forEach((spDef, s) => {
      const spinGroup = new THREE.Group();
      spinGroup.position.set(spDef.x, 0.35, spDef.z);

      const hubGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.65, 18);
      const hubMat = new THREE.MeshStandardMaterial({
        color: stage.theme.spinnerHub,
        emissive: stage.theme.spinnerHub,
        emissiveIntensity: 0.4
      });
      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      hubMesh.castShadow = true;
      spinGroup.add(hubMesh);

      const barGeo = new THREE.BoxGeometry(RINK.spinnerR * 2, 0.35, RINK.spinnerBladeHalfW * 2);
      const barMat = new THREE.MeshStandardMaterial({
        color: stage.theme.spinnerBlade,
        emissive: stage.theme.spinnerBlade,
        emissiveIntensity: 0.45
      });
      const barMesh = new THREE.Mesh(barGeo, barMat);
      barMesh.castShadow = true;
      spinGroup.add(barMesh);

      stageGroup.add(spinGroup);
      stageSpinners.push({
        x: spDef.x,
        z: spDef.z,
        radius: RINK.spinnerR,
        bladeHalfW: RINK.spinnerBladeHalfW,
        angle: s * 1.5,
        speed: (s % 2 === 0 ? 1 : -1) * 2.5,
        wobble: 0,
        mesh: spinGroup
      });
    });

    stage.boostPads.forEach((pc) => {
      const padGeo = new THREE.RingGeometry(0.65, RINK.boostR, 6);
      const padMat = new THREE.MeshBasicMaterial({
        color: stage.theme.boostColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.82,
        toneMapped: false,
        fog: false
      });
      const padMesh = new THREE.Mesh(padGeo, padMat);
      padMesh.rotation.x = -Math.PI / 2;
      padMesh.position.set(pc.x, 0.03, pc.z);
      stageGroup.add(padMesh);
      stageBoostPads.push({ x: pc.x, z: pc.z, r: RINK.boostR, mesh: padMesh });
    });

    stadiumPointLight1.color.setHex(stage.railColor);
    stadiumPointLight2.color.setHex(stage.accentColor);
  }

  // =========================================================================
  // 6. GAME STATE, TRAUMA CAMERA SHAKE, HIT-STOP & KNOCKBACK SPRINGS
  // =========================================================================
  const state = {
    mode: 'menu',
    playerCritterId: saveData.selectedCritter,
    stageId: saveData.selectedStage,
    cameraPreset: 0,
    timeRemaining: 45,
    playerGoals: 0,
    rivalGoals: 0,
    fever: 0,
    feverActiveTimer: 0,
    trauma: 0,
    hitStopTimer: 0,
    starSpawnTimer: 6.5,

    player: {
      x: 0,
      z: 9.5,
      targetX: 0,
      targetZ: 9.5,
      vx: 0,
      vz: 0,
      recoilX: 0,
      recoilZ: 0,
      recoilVX: 0,
      recoilVZ: 0
    },
    rival: {
      x: 0,
      z: -10.5,
      vx: 0,
      vz: 0,
      recoilX: 0,
      recoilZ: 0,
      recoilVX: 0,
      recoilVZ: 0
    },

    pedals: {
      vortex: { cd: 0, maxCd: 7.0, activeTimer: 0, duration: 2.8 },
      fire:   { cd: 0, maxCd: 5.5, activeTimer: 0, duration: 3.4 },
      shield: { cd: 0, maxCd: 9.0, activeTimer: 0, duration: 4.5 }
    },

    leaderboard: [],
    lastResultRank: 1,
    lastResultStars: 3
  };

  function addTrauma(amount) {
    state.trauma = Math.min(1.0, state.trauma + amount);
  }

  function applyKnockbackSpring(entity, dirX, dirZ, impulseMag) {
    entity.recoilVX += dirX * impulseMag;
    entity.recoilVZ += dirZ * impulseMag;
  }

  function stepRecoilSpring(entity, dt) {
    const omega = 20.0;
    const zeta = 0.38;
    const ax = -omega * omega * entity.recoilX - 2 * zeta * omega * entity.recoilVX;
    const az = -omega * omega * entity.recoilZ - 2 * zeta * omega * entity.recoilVZ;
    entity.recoilVX += ax * dt;
    entity.recoilVZ += az * dt;
    entity.recoilX = Math.max(-0.55, Math.min(0.55, entity.recoilX + entity.recoilVX * dt));
    entity.recoilZ = Math.max(-0.55, Math.min(0.55, entity.recoilZ + entity.recoilVZ * dt));
  }

  function initTournamentLeaderboard(stage) {
    const playerCritter = getCritterById(state.playerCritterId);
    const rivalCritter = resolveRival(stage, playerCritter.id);
    const sid = stage ? stage.id : 1;

    const others = CRITTERS.filter((c) => c.id !== playerCritter.id && c.id !== rivalCritter.id).slice(0, 3);
    const baseRate = sid === 1 ? 12.5 : Math.max(5.0, 10.6 - sid * 0.65);

    state.leaderboard = [
      { id: playerCritter.id, critter: playerCritter, isPlayer: true, isRival: false, score: 0, simTimer: 0, lastScoredAt: 0 },
      { id: rivalCritter.id, critter: rivalCritter, isPlayer: false, isRival: true, score: 0, simTimer: 0, lastScoredAt: 0 },
      ...others.map((c, idx) => ({
        id: c.id,
        critter: c,
        isPlayer: false,
        isRival: false,
        score: sid === 1 ? 0 : (idx === 0 && sid >= 3 ? 1 : 0),
        simRate: baseRate + idx * 2.2 + Math.random() * 1.4,
        simTimer: (sid === 1 ? 8.5 : 3.4) + idx * 1.8,
        lastScoredAt: 0
      }))
    ];
    renderLiveLeaderboard();
  }

  function getSortedLeaderboard() {
    return [...state.leaderboard].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.isPlayer) return -1;
      if (b.isPlayer) return 1;
      return 0;
    });
  }

  function renderLiveLeaderboard() {
    const dock = document.getElementById('live-leaderboard');
    if (!dock) return;
    const sorted = getSortedLeaderboard();
    const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
    const nowMs = performance.now();

    dock.innerHTML = sorted
      .map((entry, idx) => {
        const qualClass = idx < 3 ? 'top-qual' : 'danger-zone';
        const playerClass = entry.isPlayer ? 'is-player' : '';
        const scoredClass = entry.lastScoredAt && (nowMs - entry.lastScoredAt < 650) ? 'just-scored' : '';
        return `
          <div class="lb-row ${qualClass} ${playerClass} ${scoredClass}" data-critter="${entry.id}" data-rank="${idx + 1}">
            <span class="lb-medal">${medals[idx]}</span>
            <img class="lb-avatar" src="${entry.critter.icon}" alt="" />
            <span class="lb-pts">🏒 ${entry.score}</span>
          </div>
        `;
      })
      .join('');
  }

  // =========================================================================
  // 7. PUCK SPAWNING, POWER PEDALS & GOAL SCORING
  // =========================================================================
  function resetAllPucks() {
    puckPool.forEach((p) => {
      p.active = false;
      p.mesh.visible = false;
    });
  }

  function spawnPuck(kind = 'normal', x = 0, z = 0, vx = 0, vz = 0) {
    const slot = puckPool.find((p) => !p.active);
    if (!slot) return null;

    const stage = getStageById(state.stageId);
    const stagePuckCol = (stage && stage.theme && stage.theme.puckColor) || 0x00f5ff;

    slot.active = true;
    slot.kind = kind;
    slot.x = x;
    slot.y = 0;
    slot.z = z;
    slot.vx = vx || (Math.random() - 0.5) * 7;
    slot.vy = kind === 'fire' ? 2.8 : 1.2;
    slot.vz = vz || (Math.random() < 0.5 ? 8.5 : -8.5);
    slot.spinVel = 6.0;
    slot.hitCooldownP = 0;
    slot.hitCooldownR = 0;
    slot.trailTimer = 0;
    slot.points = kind === 'star' ? 2 : 1;

    if (kind === 'star') {
      slot.bodyMat.color.setHex(0xffdd00);
      slot.bodyMat.emissive.setHex(0xffaa00);
      slot.glowMat.color.setHex(0xffee44);
      slot.topMat.color.setHex(0xfff6aa);
      sfx.starSpawn();
    } else if (kind === 'fire') {
      slot.bodyMat.color.setHex(0xff4400);
      slot.bodyMat.emissive.setHex(0xff2200);
      slot.glowMat.color.setHex(0xff8800);
      slot.topMat.color.setHex(0xffdd88);
    } else {
      slot.bodyMat.color.setHex(stagePuckCol);
      slot.bodyMat.emissive.setHex(stagePuckCol);
      slot.glowMat.color.setHex(stagePuckCol);
      slot.topMat.color.setHex(0xffffff);
    }

    slot.mesh.position.set(x, 0, z);
    slot.bodyGroup.position.y = 0;
    slot.mesh.visible = true;
    spawnSparkBurst(x, z, kind === 'star' ? 0xffdd00 : stagePuckCol, 8, false);
    spawnShockwaveRing(x, z, kind === 'star' ? 0xffdd00 : stagePuckCol, 3.2, 0.30);
    return slot;
  }

  function ensureActivePuck() {
    const activeCount = puckPool.filter((p) => p.active).length;
    if (activeCount === 0) {
      spawnPuck('normal', 0, 1.8, (Math.random() - 0.5) * 6, -9.5);
    }
  }

  function showFloatingPopup(text, color = '#ffea00', xPct = 50, yPct = 44) {
    const host = document.getElementById('floating-popups');
    if (!host) return;
    const el = document.createElement('div');
    el.className = 'popup-badge';
    el.style.left = xPct + '%';
    el.style.top = yPct + '%';
    el.style.color = color;
    el.textContent = text;
    host.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 950);
  }

  function flashScreen(rgba) {
    const el = document.getElementById('fx-flash');
    if (!el) return;
    el.style.background = rgba;
    el.style.opacity = '0.75';
    setTimeout(() => {
      el.style.opacity = '0';
    }, 150);
  }

  function addFever(amount) {
    if (state.feverActiveTimer > 0) return;
    state.fever = Math.min(100, state.fever + amount);
    if (state.fever >= 100) {
      state.fever = 100;
      state.feverActiveTimer = 6.5;
      document.getElementById('fever-vignette').classList.add('active');
      showFloatingPopup('🌈⭐🏒⭐🌈', '#ffea00', 50, 34);
      sfx.feverChime();
      spawnPuck('star', -2.6, 2.5, 2.2, -16.5);
      spawnPuck('star', 2.6, 2.5, -2.2, -16.5);
    }
    updateHudDom();
  }

  function triggerPedal(kind) {
    if (state.mode !== 'playing') return false;
    const p = state.pedals[kind];
    if (!p || p.cd > 0) return false;

    const playerCritter = getCritterById(state.playerCritterId);
    p.cd = p.maxCd;
    p.activeTimer = p.duration;
    sfx.powerPedal(kind);

    if (kind === 'vortex') {
      showFloatingPopup('🌪️🎯🏒', '#d884ff', 38, 52);
      addTrauma(0.35);
      const openGoalX = state.rival.x >= 0 ? -RINK.goalHalfW * 0.58 : RINK.goalHalfW * 0.58;
      vortexPortalMesh.position.set(openGoalX, 0.08, -RINK.halfL + 0.8);
      vortexPortalMesh.visible = true;
      vortexPortalMesh.scale.setScalar(1.0);
      spawnShockwaveRing(openGoalX, -RINK.halfL + 0.8, 0xd884ff, 4.8, 0.38);
      spawnSparkBurst(openGoalX, -RINK.halfL + 0.8, 0x00f5ff, 16, false);
      ensureActivePuck();
      puckPool.forEach((puck) => {
        if (puck.active) {
          const dx = openGoalX - puck.x;
          const dz = -RINK.halfL - puck.z;
          const len = Math.hypot(dx, dz) || 1;
          puck.vx = (dx / len) * 23.5;
          puck.vz = (dz / len) * 23.5;
          puck.spinVel = 22.0;
          spawnSparkBurst(puck.x, puck.z, 0xc084fc, 14, false);
          spawnShockwaveRing(puck.x, puck.z, 0xc084fc, 4.2, 0.35);
        }
      });
    } else if (kind === 'fire') {
      showFloatingPopup('⚡🔥🏒', '#ffae00', 50, 48);
      addTrauma(0.62);
      state.hitStopTimer = 0.055;
      applyKnockbackSpring(state.player, 0, 1, 5.5);
      ensureActivePuck();
      const fireLaunchSpeed = 35.0 * playerCritter.power;
      puckPool.forEach((puck) => {
        if (puck.active) {
          puck.kind = 'fire';
          puck.points = 2;
          puck.bodyMat.color.setHex(0xff4400);
          puck.bodyMat.emissive.setHex(0xff2200);
          puck.glowMat.color.setHex(0xffaa00);
          const aimX = (Math.random() - 0.5) * (RINK.goalHalfW * 0.8);
          const dx = aimX - puck.x;
          const dz = -RINK.halfL - puck.z;
          const len = Math.hypot(dx, dz) || 1;
          puck.vx = (dx / len) * fireLaunchSpeed;
          puck.vz = (dz / len) * fireLaunchSpeed;
          puck.vy = 3.4;
          puck.spinVel = 28.0;
          spawnSparkBurst(puck.x, puck.z, 0xff6600, 18, false);
          spawnShockwaveRing(puck.x, puck.z, 0xff6600, 4.8, 0.38);
        }
      });
    } else if (kind === 'shield') {
      showFloatingPopup('🛡️✨🥅', '#00f7ff', 62, 52);
      addTrauma(0.28);
      goalShieldMesh.visible = true;
      goalShieldMesh.scale.set(1, 1, 1);
      shieldMat.opacity = 0.78;
      goalShieldMesh.userData.rimMat.opacity = 0.95;
      goalShieldMesh.userData.crestMat.opacity = 0.98;
      shieldFlashTimer = 0.22;
      spawnShockwaveRing(0, RINK.halfL - 0.8, 0x00f7ff, 4.6, 0.38);
    }

    updatePedalsDom();
    return true;
  }

  function onGoalScored(byPlayer, puck) {
    const pts = (puck ? puck.points : 1) * (state.feverActiveTimer > 0 ? 2 : 1);
    const gx = puck ? puck.x : 0;
    const gz = puck ? puck.z : (byPlayer ? -RINK.halfL : RINK.halfL);
    const fxColor = byPlayer ? 0x00ffaa : 0xff3366;

    if (puck) {
      puck.active = false;
      puck.mesh.visible = false;
    }

    addTrauma(0.85);
    state.hitStopTimer = 0.065;
    spawnSparkBurst(gx, gz, fxColor, 28, true);
    spawnShockwaveRing(gx, gz, fxColor, 5.4, 0.42);
    setTimeout(() => {
      spawnShockwaveRing(gx, gz, 0xffea00, 4.4, 0.36);
    }, 90);

    goalPillarMat.color.setHex(fxColor);
    goalPillarMat.opacity = 0.85;
    goalPillarMesh.position.set(gx * 0.4, 4.75, byPlayer ? -RINK.halfL : RINK.halfL);
    goalPillarMesh.visible = true;
    goalPillarTimer = 0.45;

    spawnFlyingStarCoins(gx, gz, pts, byPlayer);
    sfx.goalScored(byPlayer);

    if (byPlayer) {
      state.playerGoals += pts;
      const pEntry = state.leaderboard.find((e) => e.isPlayer);
      if (pEntry) {
        pEntry.score = state.playerGoals;
        pEntry.lastScoredAt = performance.now();
      }
      addFever(28);
      flashScreen('rgba(0, 255, 170, 0.36)');
      showFloatingPopup(pts > 1 ? `🥅 +${pts} ⭐🔥` : '🥅 +1 ⭐', '#00ffaa', 50, 40);
    } else {
      state.rivalGoals += 1;
      const rEntry = state.leaderboard.find((e) => e.isRival);
      if (rEntry) {
        rEntry.score = state.rivalGoals;
        rEntry.lastScoredAt = performance.now();
      }
      flashScreen('rgba(255, 50, 100, 0.34)');
      showFloatingPopup('💥🥅', '#ff4d88', 50, 42);
    }

    renderLiveLeaderboard();
    updateHudDom();

    setTimeout(() => {
      if (state.mode === 'playing') {
        ensureActivePuck();
      }
    }, 260);
  }

  // =========================================================================
  // 8. SUB-STEPPED 3D AIR HOCKEY PHYSICS, RELATIVE-VELOCITY IMPULSES & AI
  // =========================================================================
  const keysDown = {};

  function resolveMalletObstacleCollisions(malletObj) {
    for (let i = 0; i < stageBumpers.length; i++) {
      const b = stageBumpers[i];
      const dx = malletObj.x - b.x;
      const dz = malletObj.z - b.z;
      const d = Math.hypot(dx, dz);
      const minD = b.r + RINK.malletR + 0.05;
      if (d < minD && d > 0.0001) {
        malletObj.x = b.x + (dx / d) * minD;
        malletObj.z = b.z + (dz / d) * minD;
      }
    }
    for (let i = 0; i < stageSpinners.length; i++) {
      const sp = stageSpinners[i];
      const dx = malletObj.x - sp.x;
      const dz = malletObj.z - sp.z;
      const d = Math.hypot(dx, dz);
      const minD = sp.radius + RINK.malletR + 0.05;
      if (d < minD && d > 0.0001) {
        malletObj.x = sp.x + (dx / d) * minD;
        malletObj.z = sp.z + (dz / d) * minD;
      }
    }
  }

  function resolveMalletPuckHit(p, mallet, isPlayer, powerMult, fireActive, stage) {
    const hitDist = RINK.malletR + RINK.puckR;
    const dx = p.x - mallet.x;
    const dz = p.z - mallet.z;
    const dist = Math.hypot(dx, dz);
    if (dist >= hitDist || dist <= 0.0001) return;

    const nx = dx / dist;
    const nz = dz / dist;

    p.x = mallet.x + nx * (hitDist + 0.03);
    p.z = mallet.z + nz * (hitDist + 0.03);

    const vrx = p.vx - mallet.vx;
    const vrz = p.vz - mallet.vz;
    const vrDotN = vrx * nx + vrz * nz;

    if (vrDotN < 0) {
      const e = 0.92 * powerMult * (fireActive ? 1.38 : 1.0);
      p.vx = mallet.vx + vrx - (1 + e) * vrDotN * nx;
      p.vz = mallet.vz + vrz - (1 + e) * vrDotN * nz;
    }

    const inFrontArc = isPlayer ? (nz < -0.3) : (nz > 0.3);
    if (inFrontArc) {
      const goalZ = isPlayer ? -RINK.halfL : RINK.halfL;
      const toGoalX = 0 - p.x;
      const toGoalZ = goalZ - p.z;
      const gLen = Math.hypot(toGoalX, toGoalZ) || 1;
      const curSpd = Math.max(15.5 * powerMult * (fireActive ? 1.35 : 1.0), Math.hypot(p.vx, p.vz));
      const dirX = (p.vx / (Math.hypot(p.vx, p.vz) || 1)) * 0.75 + (toGoalX / gLen) * 0.25;
      const dirZ = (p.vz / (Math.hypot(p.vx, p.vz) || 1)) * 0.75 + (toGoalZ / gLen) * 0.25;
      const dLen = Math.hypot(dirX, dirZ) || 1;
      p.vx = (dirX / dLen) * curSpd;
      p.vz = (dirZ / dLen) * curSpd;
    }

    const newRelN = (p.vx - mallet.vx) * nx + (p.vz - mallet.vz) * nz;
    if (newRelN < 5.0) {
      const boost = 5.0 - newRelN;
      p.vx += nx * boost;
      p.vz += nz * boost;
    }

    const tx = -nz;
    const tz = nx;
    const vTang = vrx * tx + vrz * tz;
    p.spinVel = Math.max(-32, Math.min(32, p.spinVel + vTang * 0.65));

    if (isPlayer && fireActive) {
      p.kind = 'fire';
      p.points = 2;
      p.bodyMat.color.setHex(0xff4400);
      p.bodyMat.emissive.setHex(0xff2200);
      p.glowMat.color.setHex(0xffaa00);
      p.vy = Math.max(p.vy, 3.2);
      state.hitStopTimer = Math.max(state.hitStopTimer, 0.05);
    } else {
      p.vy = Math.max(p.vy, Math.min(2.2, Math.hypot(p.vx, p.vz) * 0.06));
    }

    const cdKey = isPlayer ? 'hitCooldownP' : 'hitCooldownR';
    if (p[cdKey] <= 0) {
      p[cdKey] = 0.09;
      const impactSpd = Math.hypot(p.vx, p.vz);
      const playerCritter = getCritterById(state.playerCritterId);
      const hitCol = isPlayer ? (fireActive ? 0xff6600 : playerCritter.color) : stage.accentColor;

      sfx.hitMallet(impactSpd * (isPlayer ? 1.0 : 0.8));
      addTrauma(0.16 + Math.min(0.28, (impactSpd / 28) * 0.24));
      applyKnockbackSpring(mallet, -nx, -nz, (isPlayer ? 3.2 : 5.5) * Math.min(1.5, impactSpd / 20));
      spawnSparkBurst(p.x, p.z, hitCol, isPlayer && fireActive ? 16 : 10, false);
      spawnShockwaveRing(p.x, p.z, hitCol, 2.2 + Math.min(2.4, impactSpd * 0.08), 0.32);

      if (isPlayer) {
        addFever(6);
      }
    }
  }

  function stepPhysics(rawDt) {
    let dt = rawDt;
    if (state.hitStopTimer > 0) {
      state.hitStopTimer = Math.max(0, state.hitStopTimer - rawDt);
      dt = rawDt * 0.10;
    }

    const stage = getStageById(state.stageId);
    const playerCritter = getCritterById(state.playerCritterId);

    const kbSpeed = 16.5 * playerCritter.speed;
    if (keysDown['ArrowLeft'] || keysDown['KeyA']) state.player.targetX -= kbSpeed * dt;
    if (keysDown['ArrowRight'] || keysDown['KeyD']) state.player.targetX += kbSpeed * dt;
    if (keysDown['ArrowUp'] || keysDown['KeyW']) state.player.targetZ -= kbSpeed * dt;
    if (keysDown['ArrowDown'] || keysDown['KeyS']) state.player.targetZ += kbSpeed * dt;

    const minX = -RINK.halfW + RINK.malletR + 0.1;
    const maxX = RINK.halfW - RINK.malletR - 0.1;
    const minPlayerZ = RINK.malletR + 0.2;
    const maxPlayerZ = RINK.halfL - RINK.malletR - 0.15;

    state.player.targetX = Math.max(minX, Math.min(maxX, state.player.targetX));
    state.player.targetZ = Math.max(minPlayerZ, Math.min(maxPlayerZ, state.player.targetZ));

    const prevPX = state.player.x;
    const prevPZ = state.player.z;
    const dxPTarget = state.player.targetX - state.player.x;
    const dzPTarget = state.player.targetZ - state.player.z;
    const distPTarget = Math.hypot(dxPTarget, dzPTarget);
    const maxTouchStep = 24.0 * playerCritter.speed * dt;
    if (distPTarget > maxTouchStep && distPTarget > 0.0001) {
      state.player.x += (dxPTarget / distPTarget) * maxTouchStep;
      state.player.z += (dzPTarget / distPTarget) * maxTouchStep;
    } else {
      const lerpFactor = Math.min(1, dt * 22 * playerCritter.speed);
      state.player.x += dxPTarget * lerpFactor;
      state.player.z += dzPTarget * lerpFactor;
    }

    resolveMalletObstacleCollisions(state.player);
    state.player.x = Math.max(minX, Math.min(maxX, state.player.x));
    state.player.z = Math.max(minPlayerZ, Math.min(maxPlayerZ, state.player.z));

    state.player.vx = (state.player.x - prevPX) / Math.max(0.001, dt);
    state.player.vz = (state.player.z - prevPZ) / Math.max(0.001, dt);

    stepRecoilSpring(state.player, rawDt);
    playerMalletMesh.position.set(
      state.player.x + state.player.recoilX,
      0,
      state.player.z + state.player.recoilZ
    );

    let threatPuck = null;
    let bestThreatScore = -9999;
    puckPool.forEach((p) => {
      if (!p.active) return;
      const score = -p.z + (p.vz < 0 ? 8 : 0);
      if (score > bestThreatScore) {
        bestThreatScore = score;
        threatPuck = p;
      }
    });

    // Calibrated Stage 1–8 AI Goalie Behavior:
    // - Stage 1: gentle lateral weave + wider reaction window for an easy 3-star win
    // - Stages 2–8: smart crease-guard clamping in deep corners + active counter-lunges on Stages 3–8
    const nowSec = performance.now() * 0.001;
    let aiTargetX = Math.sin(nowSec * 2.1) * (stage.id === 1 ? 2.35 : 1.15);
    let aiTargetZ = -RINK.halfL + 3.0;
    let aiStepBoost = 1.0;

    if (threatPuck) {
      if (stage.id === 1) {
        const trackRatio = threatPuck.z < -2.5 ? 0.65 : 0.35;
        aiTargetX = threatPuck.x * trackRatio + Math.sin(nowSec * 2.4) * 1.45;
        aiTargetX = Math.max(-(RINK.goalHalfW + 0.5), Math.min(RINK.goalHalfW + 0.5, aiTargetX));
        aiTargetZ = threatPuck.z < -3.5 ? Math.max(-RINK.halfL + 2.5, Math.min(-3.2, threatPuck.z - 0.8)) : -RINK.halfL + 3.1;
      } else {
        const inDeepCorner = threatPuck.z < -7.2 && Math.abs(threatPuck.x) > RINK.goalHalfW + 0.8;
        const maxCreaseX = inDeepCorner ? (RINK.goalHalfW + 0.8) : (RINK.halfW - 1.8);
        aiTargetX = Math.max(-maxCreaseX, Math.min(maxCreaseX, threatPuck.x));

        const inCounterSlot = stage.id >= 3 && threatPuck.z < -5.5 && threatPuck.z > -12.4 && Math.abs(threatPuck.x) <= RINK.goalHalfW + 1.8;
        if (inCounterSlot) {
          aiTargetZ = Math.max(-RINK.halfL + 2.4, Math.min(-2.2, threatPuck.z + 0.45));
          aiStepBoost = 1.0 + (stage.id - 2) * 0.045;
        } else if (threatPuck.z < -1.2 && !inDeepCorner) {
          aiTargetZ = Math.max(-RINK.halfL + 2.2, Math.min(-2.0, threatPuck.z - 0.6));
        } else {
          aiTargetZ = -RINK.halfL + 2.9;
        }
      }
    }

    const prevRX = state.rival.x;
    const prevRZ = state.rival.z;
    const maxAiStep = stage.aiSpeed * aiStepBoost * dt;
    const dxAi = aiTargetX - state.rival.x;
    const dzAi = aiTargetZ - state.rival.z;
    const distAi = Math.hypot(dxAi, dzAi);
    if (distAi > maxAiStep && distAi > 0.001) {
      state.rival.x += (dxAi / distAi) * maxAiStep;
      state.rival.z += (dzAi / distAi) * maxAiStep;
    } else {
      state.rival.x = aiTargetX;
      state.rival.z = aiTargetZ;
    }

    resolveMalletObstacleCollisions(state.rival);
    state.rival.x = Math.max(minX, Math.min(maxX, state.rival.x));
    state.rival.z = Math.max(-RINK.halfL + RINK.malletR + 0.15, Math.min(-RINK.malletR - 0.2, state.rival.z));

    state.rival.vx = (state.rival.x - prevRX) / Math.max(0.001, dt);
    state.rival.vz = (state.rival.z - prevRZ) / Math.max(0.001, dt);

    stepRecoilSpring(state.rival, rawDt);
    rivalMalletMesh.position.set(
      state.rival.x + state.rival.recoilX,
      0,
      state.rival.z + state.rival.recoilZ
    );

    stageSpinners.forEach((sp) => {
      sp.angle += sp.speed * dt;
      sp.mesh.rotation.y = sp.angle;
      if (sp.wobble > 0) {
        sp.wobble = Math.max(0, sp.wobble - rawDt * 4.5);
        sp.mesh.rotation.z = Math.sin(sp.angle * 6) * sp.wobble * 0.22;
      } else {
        sp.mesh.rotation.z = 0;
      }
    });
    stageBumpers.forEach((b) => {
      if (b.pulse > 0) {
        b.pulse = Math.max(0, b.pulse - rawDt * 4.2);
        const xzScale = 1 + b.pulse * 0.28;
        const yScale = 1 - b.pulse * 0.30;
        b.mesh.scale.set(xzScale, yScale, xzScale);
      } else {
        b.mesh.scale.set(1, 1, 1);
      }
    });

    puckPool.forEach((p) => {
      if (!p.active) return;
      if (p.hitCooldownP > 0) p.hitCooldownP = Math.max(0, p.hitCooldownP - rawDt);
      if (p.hitCooldownR > 0) p.hitCooldownR = Math.max(0, p.hitCooldownR - rawDt);

      if (p.y > 0 || p.vy > 0) {
        p.y += p.vy * dt;
        p.vy -= 15.0 * dt;
        if (p.y <= 0) {
          p.y = 0;
          if (Math.abs(p.vy) > 1.2) {
            p.vy = -p.vy * 0.42;
          } else {
            p.vy = 0;
          }
        }
      }

      if (p.kind === 'fire') {
        p.trailTimer -= rawDt;
        if (p.trailTimer <= 0) {
          p.trailTimer = 0.035;
          spawnSparkBurst(p.x, p.z, 0xff5500, 2, false);
        }
      }
    });

    const SUBSTEPS = 4;
    const subDt = dt / SUBSTEPS;
    const minPuckX = -RINK.halfW + RINK.puckR;
    const maxPuckX = RINK.halfW - RINK.puckR;
    const minPuckZ = -RINK.halfL + RINK.puckR;
    const maxPuckZ = RINK.halfL - RINK.puckR;
    const fireActive = state.pedals.fire.activeTimer > 0;

    for (let step = 0; step < SUBSTEPS; step++) {
      for (let i = 0; i < puckPool.length; i++) {
        const p1 = puckPool[i];
        if (!p1.active) continue;
        for (let j = i + 1; j < puckPool.length; j++) {
          const p2 = puckPool[j];
          if (!p2.active) continue;
          const dx = p2.x - p1.x;
          const dz = p2.z - p1.z;
          const dist = Math.hypot(dx, dz);
          const minDist = RINK.puckR * 2;
          if (dist < minDist && dist > 0.0001) {
            const nx = dx / dist;
            const nz = dz / dist;
            const overlap = (minDist - dist) * 0.52;
            p1.x -= nx * overlap;
            p1.z -= nz * overlap;
            p2.x += nx * overlap;
            p2.z += nz * overlap;

            const kx = p1.vx - p2.vx;
            const kz = p1.vz - p2.vz;
            const pImpulse = kx * nx + kz * nz;
            if (pImpulse > 0) {
              const e = 0.96;
              p1.vx -= pImpulse * e * nx;
              p1.vz -= pImpulse * e * nz;
              p2.vx += pImpulse * e * nx;
              p2.vz += pImpulse * e * nz;
              if (step === 0 && pImpulse > 4.0) {
                sfx.hitWall();
                spawnSparkBurst((p1.x + p2.x) * 0.5, (p1.z + p2.z) * 0.5, 0xffea00, 6, false);
              }
            }
          }
        }
      }

      for (let i = 0; i < puckPool.length; i++) {
        const p = puckPool[i];
        if (!p.active) continue;

        if (state.pedals.vortex.activeTimer > 0) {
          const openCornerX = state.rival.x >= 0 ? -RINK.goalHalfW * 0.58 : RINK.goalHalfW * 0.58;
          const toGoalX = openCornerX - p.x;
          const toGoalZ = -RINK.halfL - p.z;
          const distG = Math.hypot(toGoalX, toGoalZ) || 1;
          p.vx += (toGoalX / distG) * 34 * subDt;
          p.vz += (toGoalZ / distG) * 34 * subDt;
        }

        p.x += p.vx * subDt;
        p.z += p.vz * subDt;

        p.vx *= 1 - 0.11 * subDt;
        p.vz *= 1 - 0.11 * subDt;

        if (p.x < minPuckX) {
          p.x = minPuckX;
          p.vx = Math.abs(p.vx) * 0.98;
          if (step === 0) {
            sfx.hitWall();
            spawnSparkBurst(p.x, p.z, stage.railColor, 5, false);
          }
        } else if (p.x > maxPuckX) {
          p.x = maxPuckX;
          p.vx = -Math.abs(p.vx) * 0.98;
          if (step === 0) {
            sfx.hitWall();
            spawnSparkBurst(p.x, p.z, stage.railColor, 5, false);
          }
        }

        for (let gpIdx = 0; gpIdx < GOAL_POSTS.length; gpIdx++) {
          const gp = GOAL_POSTS[gpIdx];
          const dxGP = p.x - gp.x;
          const dzGP = p.z - gp.z;
          const dGP = Math.hypot(dxGP, dzGP);
          const minGP = gp.r + RINK.puckR;
          if (dGP < minGP && dGP > 0.0001) {
            const nx = dxGP / dGP;
            const nz = dzGP / dGP;
            p.x = gp.x + nx * (minGP + 0.02);
            p.z = gp.z + nz * (minGP + 0.02);
            const vn = p.vx * nx + p.vz * nz;
            if (vn < 0) {
              p.vx -= 1.92 * vn * nx;
              p.vz -= 1.92 * vn * nz;
            }
            if (step === 0) {
              sfx.hitPost();
              addTrauma(0.16);
              spawnSparkBurst(p.x, p.z, 0xffffff, 8, false);
              spawnShockwaveRing(p.x, p.z, 0xffffff, 2.8, 0.28);
            }
          }
        }

        if (p.z <= minPuckZ) {
          if (Math.abs(p.x) < RINK.goalHalfW - RINK.puckR * 0.45) {
            if (p.z <= -RINK.halfL - 0.15) {
              onGoalScored(true, p);
              continue;
            }
          } else {
            p.z = minPuckZ;
            p.vz = Math.abs(p.vz) * 0.96;
            if (step === 0) {
              sfx.hitWall();
              spawnSparkBurst(p.x, p.z, stage.railColor, 5, false);
            }
          }
        }

        if (p.z >= maxPuckZ) {
          const shieldActive = state.pedals.shield.activeTimer > 0;
          if (Math.abs(p.x) < RINK.goalHalfW - RINK.puckR * 0.45 && !shieldActive) {
            if (p.z >= RINK.halfL + 0.15) {
              onGoalScored(false, p);
              continue;
            }
          } else {
            p.z = maxPuckZ;
            p.vz = -Math.abs(p.vz) * (shieldActive ? 1.28 : 0.96);
            if (step === 0) {
              sfx.hitWall();
              if (shieldActive) {
                addTrauma(0.24);
                spawnShockwaveRing(p.x, p.z, 0x00f7ff, 3.8, 0.34);
              }
              spawnSparkBurst(p.x, p.z, shieldActive ? 0x00f7ff : stage.railColor, 8, false);
            }
          }
        }

        resolveMalletPuckHit(p, state.player, true, playerCritter.power, fireActive, stage);
        resolveMalletPuckHit(p, state.rival, false, 1.0, false, stage);

        for (let bIdx = 0; bIdx < stageBumpers.length; bIdx++) {
          const b = stageBumpers[bIdx];
          const dxB = p.x - b.x;
          const dzB = p.z - b.z;
          const bDist = Math.hypot(dxB, dzB);
          const minBDist = b.r + RINK.puckR;
          if (bDist < minBDist && bDist > 0.0001) {
            const nx = dxB / bDist;
            const nz = dzB / bDist;
            p.x = b.x + nx * (minBDist + 0.03);
            p.z = b.z + nz * (minBDist + 0.03);

            const vn = p.vx * nx + p.vz * nz;
            if (vn < 0) {
              const e = 1.05;
              p.vx -= (1 + e) * vn * nx;
              p.vz -= (1 + e) * vn * nz;
            }
            const newSpd = Math.hypot(p.vx, p.vz) || 1;
            const targetSpd = Math.min(28, Math.max(15.5, newSpd * 1.15));
            p.vx = (p.vx / newSpd) * targetSpd;
            p.vz = (p.vz / newSpd) * targetSpd;

            b.pulse = 1.0;
            if (step === 0) {
              sfx.hitBumper();
              addTrauma(0.18);
              spawnSparkBurst(p.x, p.z, stage.accentColor, 10, false);
              spawnShockwaveRing(b.x, b.z, stage.accentColor, 3.4, 0.32);
            }
          }
        }

        for (let sIdx = 0; sIdx < stageSpinners.length; sIdx++) {
          const sp = stageSpinners[sIdx];
          const dirX = Math.cos(sp.angle);
          const dirZ = -Math.sin(sp.angle);
          const relX = p.x - sp.x;
          const relZ = p.z - sp.z;

          const sProj = Math.max(-sp.radius, Math.min(sp.radius, relX * dirX + relZ * dirZ));
          const closestX = sp.x + dirX * sProj;
          const closestZ = sp.z + dirZ * sProj;

          const dxC = p.x - closestX;
          const dzC = p.z - closestZ;
          const distC = Math.hypot(dxC, dzC);
          const minCapDist = (Math.abs(sProj) < 0.55 ? 0.55 : sp.bladeHalfW) + RINK.puckR;

          if (distC < minCapDist && distC > 0.0001) {
            const nx = dxC / distC;
            const nz = dzC / distC;
            p.x = closestX + nx * (minCapDist + 0.03);
            p.z = closestZ + nz * (minCapDist + 0.03);

            const bladeVX = -Math.sin(sp.angle) * sp.speed * sProj * 2.4;
            const bladeVZ = -Math.cos(sp.angle) * sp.speed * sProj * 2.4;

            const vrx = p.vx - bladeVX;
            const vrz = p.vz - bladeVZ;
            const vrDotN = vrx * nx + vrz * nz;
            if (vrDotN < 0) {
              p.vx = bladeVX + vrx - 1.95 * vrDotN * nx;
              p.vz = bladeVZ + vrz - 1.95 * vrDotN * nz;
            }
            const outN = (p.vx - bladeVX) * nx + (p.vz - bladeVZ) * nz;
            if (outN < 6.0) {
              p.vx += nx * (6.0 - outN);
              p.vz += nz * (6.0 - outN);
            }

            sp.wobble = 1.0;
            if (step === 0) {
              sfx.hitBumper();
              addTrauma(0.18);
              spawnSparkBurst(p.x, p.z, stage.theme.spinnerBlade, 9, false);
              spawnShockwaveRing(p.x, p.z, stage.theme.spinnerBlade, 3.0, 0.30);
            }
          }
        }

        for (let padIdx = 0; padIdx < stageBoostPads.length; padIdx++) {
          const pad = stageBoostPads[padIdx];
          if (Math.hypot(p.x - pad.x, p.z - pad.z) < pad.r) {
            p.vx *= 1.04;
            p.vz *= 1.04;
          }
        }

        const maxSpd = p.kind === 'fire' ? 40.0 : p.kind === 'star' ? 31.0 : 28.0;
        const curSpd = Math.hypot(p.vx, p.vz);
        if (curSpd > maxSpd) {
          p.vx = (p.vx / curSpd) * maxSpd;
          p.vz = (p.vz / curSpd) * maxSpd;
        } else if (curSpd < 7.8) {
          const dirZ = p.vz >= 0 ? 1 : -1;
          p.vz = dirZ * 8.5;
        }

        // Anti-stuck guardrail: break horizontal side-wall loops and recover out-of-bounds pucks
        if (Math.abs(p.vz) < 2.5) {
          p.stallTimer = (p.stallTimer || 0) + subDt;
          if (p.stallTimer > 1.0) {
            p.stallTimer = 0;
            const nudgeDirZ = p.z > 0 ? -1 : 1;
            p.vz = nudgeDirZ * 11.5;
            p.vx += (0 - p.x) * 1.2;
          }
        } else {
          p.stallTimer = 0;
        }

        if (!Number.isFinite(p.x) || !Number.isFinite(p.z) || Math.abs(p.x) > RINK.halfW + 2 || Math.abs(p.z) > RINK.halfL + 2) {
          p.x = 0;
          p.z = 0;
          p.vx = (Math.random() - 0.5) * 8;
          p.vz = -11.0;
        }
      }
    }

    puckPool.forEach((p) => {
      if (p.active) {
        p.mesh.position.set(p.x, 0, p.z);
        p.bodyGroup.position.y = p.y;
        p.bodyGroup.rotation.y += p.spinVel * rawDt;
      }
    });
  }

  // =========================================================================
  // 9. POINTER RAYCASTING ONTO RINK PLANE & KEYBOARD CONTROLS
  // =========================================================================
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();
  const rinkPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const intersectPt = new THREE.Vector3();
  let isPointerDragging = false;

  function clearInputState() {
    isPointerDragging = false;
    Object.keys(keysDown).forEach((k) => {
      keysDown[k] = false;
    });
  }

  function updateMalletFromClientXY(clientX, clientY) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerNdc, camera);
    if (raycaster.ray.intersectPlane(rinkPlane, intersectPt)) {
      state.player.targetX = intersectPt.x;
      state.player.targetZ = intersectPt.z;
    }
  }

  renderer.domElement.addEventListener('pointerdown', (e) => {
    sfx.init();
    isPointerDragging = true;
    updateMalletFromClientXY(e.clientX, e.clientY);
  });

  window.addEventListener('pointermove', (e) => {
    if (state.mode === 'playing' && (isPointerDragging || e.pointerType === 'mouse')) {
      updateMalletFromClientXY(e.clientX, e.clientY);
    }
  });

  window.addEventListener('pointerup', () => {
    isPointerDragging = false;
  });

  window.addEventListener('pointercancel', clearInputState);
  window.addEventListener('blur', clearInputState);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearInputState();
  });

  window.addEventListener('keydown', (e) => {
    keysDown[e.code] = true;
    if (state.mode === 'playing') {
      if (e.code === 'Digit1' || e.code === 'Numpad1') triggerPedal('vortex');
      if (e.code === 'Digit2' || e.code === 'Numpad2' || e.code === 'Space') {
        e.preventDefault();
        triggerPedal('fire');
      }
      if (e.code === 'Digit3' || e.code === 'Numpad3') triggerPedal('shield');
    }
  });

  window.addEventListener('keyup', (e) => {
    keysDown[e.code] = false;
  });

  // =========================================================================
  // 10. UI & OVERLAYS (CHUNKY VISUAL STAT BARS, STAGE HAZARD ICONS & PODIUM)
  // =========================================================================
  let menuDomInitialized = false;

  function renderMenuGrids() {
    const critterGrid = document.getElementById('critter-grid');
    const stageGrid = document.getElementById('stage-grid');
    const totalStarsEl = document.getElementById('menu-total-stars');

    const totalStars = Object.values(saveData.stageStars).reduce((a, b) => a + b, 0);
    if (totalStarsEl) totalStarsEl.textContent = `${totalStars} / 24`;

    if (!menuDomInitialized && critterGrid && stageGrid) {
      menuDomInitialized = true;

      critterGrid.innerHTML = CRITTERS.map((c) => {
        const sel = c.id === state.playerCritterId ? 'selected' : '';
        const spdPct = Math.round((c.speedPips / 4) * 100);
        const pwrPct = Math.round((c.powerPips / 4) * 100);
        const spnPct = Math.round(((c.spinPips || 3) / 4) * 100);
        return `
          <div class="critter-card ${sel}" data-critter-id="${c.id}">
            <img src="${c.icon}" alt="" />
            <span class="critter-badge">${c.emoji}${c.badge}</span>
            <div class="critter-stats">
              <div class="stat-bar-row">
                <span class="stat-bar-icon">⚡</span>
                <div class="stat-bar-track"><div class="stat-bar-fill speed-bar" style="width:${spdPct}%"></div></div>
              </div>
              <div class="stat-bar-row">
                <span class="stat-bar-icon">💥</span>
                <div class="stat-bar-track"><div class="stat-bar-fill power-bar" style="width:${pwrPct}%"></div></div>
              </div>
              <div class="stat-bar-row">
                <span class="stat-bar-icon">🌀</span>
                <div class="stat-bar-track"><div class="stat-bar-fill spin-bar" style="width:${spnPct}%"></div></div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      critterGrid.querySelectorAll('.critter-card').forEach((card) => {
        card.addEventListener('click', () => {
          sfx.hitWall();
          selectCritter(card.getAttribute('data-critter-id'));
        });
      });

      stageGrid.innerHTML = STAGES.map((st) => {
        const rival = resolveRival(st, state.playerCritterId);
        return `
          <div class="stage-card" data-stage-id="${st.id}">
            <div class="stage-top-row">
              <span>${st.emoji}</span>
              <span>${st.id}</span>
              <img class="stage-rival-avatar" src="${rival.icon}" alt="" />
            </div>
            <div class="stage-hazard-pill">${st.hazardIcons || '🚀🏒'}</div>
            <div class="stage-stars"></div>
          </div>
        `;
      }).join('');

      stageGrid.querySelectorAll('.stage-card').forEach((card) => {
        card.addEventListener('click', () => {
          const sid = parseInt(card.getAttribute('data-stage-id'), 10);
          if (sid <= saveData.unlockedStage) {
            sfx.hitWall();
            selectStage(sid);
          }
        });
      });
    }

    if (critterGrid) {
      critterGrid.querySelectorAll('.critter-card').forEach((card) => {
        const cid = card.getAttribute('data-critter-id');
        card.classList.toggle('selected', cid === state.playerCritterId);
      });
    }

    if (stageGrid) {
      stageGrid.querySelectorAll('.stage-card').forEach((card) => {
        const sid = parseInt(card.getAttribute('data-stage-id'), 10);
        const st = getStageById(sid);
        const unlocked = sid <= saveData.unlockedStage;
        card.classList.toggle('selected', sid === state.stageId);
        card.classList.toggle('locked', !unlocked);

        const rival = resolveRival(st, state.playerCritterId);
        const avatarImg = card.querySelector('.stage-rival-avatar');
        if (avatarImg && avatarImg.getAttribute('src') !== rival.icon) {
          avatarImg.setAttribute('src', rival.icon);
        }

        const stars = saveData.stageStars[sid] || 0;
        const starStr = unlocked ? '⭐'.repeat(stars) + '☆'.repeat(3 - stars) : '🔒';
        const starsEl = card.querySelector('.stage-stars');
        if (starsEl) starsEl.textContent = starStr;
      });
    }
  }

  function selectCritter(critterId) {
    const found = CRITTERS.find((c) => c.id === critterId);
    if (!found) return false;
    state.playerCritterId = found.id;
    saveData.selectedCritter = found.id;
    writeSave();

    const stage = getStageById(state.stageId);
    const rival = resolveRival(stage, found.id);

    updateMalletCritter(playerMalletMesh, found);
    updateMalletCritter(rivalMalletMesh, rival);

    if (playerArchPostMat) {
      playerArchPostMat.color.setHex(found.color);
      playerArchPostMat.emissive.setHex(found.color);
    }
    if (rivalArchPostMat) {
      rivalArchPostMat.color.setHex(rival.color);
      rivalArchPostMat.emissive.setHex(rival.color);
    }
    jumbotronPlayerId = found.id;
    jumbotronRivalId = rival.id;
    if (playerJumboPicMat) {
      playerJumboPicMat.map = portraitTextures[found.id];
      playerJumboPicMat.needsUpdate = true;
    }
    if (rivalJumboPicMat) {
      rivalJumboPicMat.map = portraitTextures[rival.id];
      rivalJumboPicMat.needsUpdate = true;
    }

    renderMenuGrids();
    updateHudDom();
    return true;
  }

  function selectStage(stageId, rebuild3D = true) {
    const st = STAGES.find((s) => s.id === stageId);
    if (!st) return false;
    state.stageId = st.id;
    saveData.selectedStage = st.id;
    writeSave();
    if (rebuild3D) {
      const rival = resolveRival(st, state.playerCritterId);
      updateMalletCritter(rivalMalletMesh, rival);
      buildStadium3D(st);
    }
    renderMenuGrids();
    updateHudDom();
    return true;
  }

  function updateHudDom() {
    const stage = getStageById(state.stageId);
    const playerCritter = getCritterById(state.playerCritterId);
    const rivalCritter = resolveRival(stage, playerCritter.id);

    document.getElementById('hud-stage-emoji').textContent = stage.emoji;
    document.getElementById('hud-stage-num').textContent = `${stage.id}/8`;
    document.getElementById('hud-player-img').src = playerCritter.icon;
    document.getElementById('hud-rival-img').src = rivalCritter.icon;
    document.getElementById('hud-player-goals').textContent = String(state.playerGoals);
    document.getElementById('hud-rival-goals').textContent = String(state.rivalGoals);

    const sec = Math.max(0, Math.ceil(state.timeRemaining));
    document.getElementById('hud-timer-sec').textContent = String(sec);
    const pct = Math.max(0, Math.min(100, (state.timeRemaining / stage.duration) * 100));
    document.getElementById('hud-timer-fill').style.width = `${pct}%`;

    const feverPct = state.feverActiveTimer > 0
      ? (state.feverActiveTimer / 6.5) * 100
      : state.fever;
    document.getElementById('fever-bar-fill').style.width = `${Math.max(0, Math.min(100, feverPct))}%`;

    const feverPill = document.getElementById('fever-meter-pill');
    if (feverPill) {
      feverPill.classList.toggle('fever-ready', state.feverActiveTimer > 0 || state.fever >= 50);
    }

    // Real-time Mallet Swing Speed / Slapshot Power Gauge
    const swingFill = document.getElementById('swing-power-fill');
    if (swingFill) {
      const malletSpd = Math.hypot(state.player.vx, state.player.vz);
      const fireBoost = state.pedals.fire.activeTimer > 0 ? 45 : 0;
      const swingPct = Math.max(16, Math.min(100, Math.round((malletSpd / 24) * 85 + fireBoost)));
      swingFill.style.width = `${swingPct}%`;
    }
  }

  const feverRainbowColor = new THREE.Color();

  function updatePedalsDom() {
    const CIRC = 176;
    ['vortex', 'fire', 'shield'].forEach((k) => {
      const p = state.pedals[k];
      const btn = document.getElementById(`pedal-${k}`);
      const ring = document.getElementById(`ring-${k}`);
      if (!btn || !ring) return;
      if (p.activeTimer > 0) {
        btn.classList.remove('cooling');
        btn.classList.remove('ready');
        btn.classList.add('active-fire');
        const activeRatio = 1 - p.activeTimer / Math.max(0.1, p.duration);
        ring.style.stroke = '#ffea00';
        ring.style.strokeDashoffset = String(Math.round(CIRC * activeRatio));
      } else if (p.cd > 0) {
        btn.classList.add('cooling');
        btn.classList.remove('ready');
        btn.classList.remove('active-fire');
        const ratio = p.cd / p.maxCd;
        ring.style.stroke = '#00ffcc';
        ring.style.strokeDashoffset = String(Math.round(CIRC * ratio));
      } else {
        btn.classList.remove('cooling');
        btn.classList.add('ready');
        btn.classList.remove('active-fire');
        ring.style.stroke = '#00ffcc';
        ring.style.strokeDashoffset = '0';
      }
    });
  }

  function resetTransientFX(stage) {
    shockwavePool.forEach((sw) => {
      sw.active = false;
      sw.mesh.visible = false;
    });
    starCoinPool.forEach((c) => {
      c.active = false;
      c.sprite.visible = false;
    });
    goalPillarTimer = 0;
    goalPillarMesh.visible = false;
    vortexPortalMesh.visible = false;
    goalShieldMesh.visible = false;
    shieldMat.opacity = 0;
    shieldFlashTimer = 0;
    const popupsHost = document.getElementById('floating-popups');
    if (popupsHost) popupsHost.innerHTML = '';
    if (stage) {
      stadiumPointLight1.color.setHex(stage.railColor);
      stadiumPointLight2.color.setHex(stage.accentColor);
    }
    if (playerMalletMesh && playerMalletMesh.userData && playerMalletMesh.userData.auraMat) {
      playerMalletMesh.userData.auraMat.color.setHex(0xffaa00);
      playerMalletMesh.userData.auraMat.opacity = 0;
    }
  }

  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      fitCameraToRink(state.cameraPreset);
    }, 80);
  });

  function startStage(stageId = state.stageId) {
    const stage = getStageById(stageId);
    state.stageId = stage.id;
    state.mode = 'playing';
    state.timeRemaining = stage.duration;
    state.playerGoals = 0;
    state.rivalGoals = 0;
    state.fever = 0;
    state.feverActiveTimer = 0;
    state.trauma = 0;
    state.hitStopTimer = 0;
    state.starSpawnTimer = 5.5;
    document.getElementById('fever-vignette').classList.remove('active');

    Object.values(state.pedals).forEach((p) => {
      p.cd = 0;
      p.activeTimer = 0;
    });
    clearInputState();
    resetTransientFX(stage);

    state.player.x = 0;
    state.player.z = 9.5;
    state.player.targetX = 0;
    state.player.targetZ = 9.5;
    state.player.recoilX = 0;
    state.player.recoilZ = 0;
    state.player.recoilVX = 0;
    state.player.recoilVZ = 0;

    state.rival.x = 0;
    state.rival.z = -10.5;
    state.rival.recoilX = 0;
    state.rival.recoilZ = 0;
    state.rival.recoilVX = 0;
    state.rival.recoilVZ = 0;

    const playerCritter = getCritterById(state.playerCritterId);
    const rivalCritter = resolveRival(stage, playerCritter.id);
    updateMalletCritter(playerMalletMesh, playerCritter);
    updateMalletCritter(rivalMalletMesh, rivalCritter);

    buildStadium3D(stage);
    initTournamentLeaderboard(stage);

    resetAllPucks();
    spawnPuck('normal', 0, 1.5, (Math.random() - 0.5) * 6, -11.5);

    document.getElementById('overlay-menu').classList.remove('active');
    document.getElementById('overlay-result').classList.remove('active');

    fitCameraToRink(state.cameraPreset);
    updateHudDom();
    updatePedalsDom();
  }

  function finishMatch(forcedRank = null) {
    state.mode = 'result';
    state.feverActiveTimer = 0;
    document.getElementById('fever-vignette').classList.remove('active');
    clearInputState();
    resetTransientFX(getStageById(state.stageId));

    if (typeof forcedRank === 'number' && forcedRank >= 1 && forcedRank <= 5) {
      const pEntry = state.leaderboard.find((e) => e.isPlayer);
      const others = state.leaderboard.filter((e) => !e.isPlayer);
      others.forEach((o, idx) => {
        o.score = (5 - idx) * 3;
      });
      if (pEntry) {
        if (forcedRank === 1) pEntry.score = 20;
        else if (forcedRank === 2) pEntry.score = 13;
        else if (forcedRank === 3) pEntry.score = 10;
        else if (forcedRank === 4) pEntry.score = 7;
        else pEntry.score = 1;
        state.playerGoals = pEntry.score;
      }
      renderLiveLeaderboard();
    }

    const sorted = getSortedLeaderboard();
    const playerIdx = sorted.findIndex((e) => e.isPlayer);
    const rank = playerIdx >= 0 ? playerIdx + 1 : 5;
    const qualified = rank <= 3;
    const starsEarned = rank === 1 ? 3 : rank === 2 ? 2 : rank === 3 ? 1 : 0;

    state.lastResultRank = rank;
    state.lastResultStars = starsEarned;

    if (qualified) {
      saveData.stageStars[state.stageId] = Math.max(saveData.stageStars[state.stageId] || 0, starsEarned);
      if (state.stageId < 8 && saveData.unlockedStage <= state.stageId) {
        saveData.unlockedStage = state.stageId + 1;
      }
      writeSave();
      spawnSparkBurst(0, 0, 0xffea00, 26, true);
      spawnShockwaveRing(0, 0, 0x00ffaa, 6.2, 0.45);
    }

    sfx.fanfare(qualified);

    const resultOverlay = document.getElementById('overlay-result');
    const resultCard = resultOverlay ? resultOverlay.querySelector('.result-card') : null;
    if (resultCard) {
      resultCard.classList.toggle('victory-mode', qualified);
      resultCard.classList.toggle('defeat-mode', !qualified);
    }

    const crownBanner = document.getElementById('result-crown-banner');
    const starsRow = document.getElementById('result-stars-row');
    const podiumStage = document.getElementById('podium-stage');
    const runnersRow = document.getElementById('runners-up-row');
    const retryBtn = document.getElementById('btn-result-retry');
    const nextBtn = document.getElementById('btn-result-next');

    crownBanner.textContent = rank === 1 ? '👑🏆👑' : qualified ? '🏆🎉' : '💔😿';
    starsRow.textContent = qualified ? '⭐'.repeat(starsEarned) + '☆'.repeat(3 - starsEarned) : '☆☆☆';

    const podiumOrder = [
      { entry: sorted[1], rank: 2, medal: '🥈', stars: '⭐⭐' },
      { entry: sorted[0], rank: 1, medal: '🥇', stars: '⭐⭐⭐' },
      { entry: sorted[2], rank: 3, medal: '🥉', stars: '⭐' }
    ];

    podiumStage.innerHTML = podiumOrder
      .map((p) => {
        if (!p.entry) return '';
        const pCls = p.entry.isPlayer ? 'is-player' : '';
        const crownHtml = p.rank === 1 ? '<div class="podium-crown">👑</div>' : '';
        return `
          <div class="podium-col rank-${p.rank} ${pCls}" data-podium-rank="${p.rank}">
            ${crownHtml}
            <img class="podium-avatar" src="${p.entry.critter.icon}" alt="" />
            <div class="podium-plinth">
              <div class="podium-medal">${p.medal}</div>
              <div class="podium-stars">${p.stars}</div>
              <div class="podium-pts">🏒 ${p.entry.score}</div>
            </div>
          </div>
        `;
      })
      .join('');

    runnersRow.innerHTML = sorted
      .slice(3, 5)
      .map((r, idx) => {
        const rRank = idx + 4;
        const pCls = r.isPlayer ? 'is-player' : '';
        return `
          <div class="runner-pill ${pCls}" data-podium-rank="${rRank}">
            <span>${rRank === 4 ? '4️⃣' : '5️⃣'}</span>
            <img src="${r.critter.icon}" alt="" />
            <span>🏒 ${r.score}</span>
            <span class="runner-sad">💔😢</span>
          </div>
        `;
      })
      .join('');

    if (qualified) {
      nextBtn.disabled = false;
      nextBtn.style.display = 'flex';
      if (retryBtn) retryBtn.classList.remove('retry-focus');
    } else {
      nextBtn.disabled = true;
      nextBtn.style.display = 'none';
      if (retryBtn) retryBtn.classList.add('retry-focus');
    }

    if (resultOverlay) resultOverlay.classList.add('active');
    renderMenuGrids();
  }

  // =========================================================================
  // 11. HUD-AWARE CAMERA FRAMING, POST-LOOKAT TRAUMA SHAKE & RENDER LOOP
  // =========================================================================
  const PRESET_RIGS = [
    { dirY: 33.0, dirZ: 22.0, lookZ: 2.8, followX: 0.16, followLookX: 0.08 },
    { dirY: 28.5, dirZ: 21.5, lookZ: 3.2, followX: 0.24, followLookX: 0.12 },
    { dirY: 39.0, dirZ: 13.5, lookZ: 2.0, followX: 0.06, followLookX: 0.03 }
  ];

  const fittedCamBase = { x: 0, y: 33.0, z: 24.8, lookX: 0, lookY: 0, lookZ: 2.8 };
  const smoothCamPos = new THREE.Vector3(0, 33.0, 24.8);
  const scratchCamTarget = new THREE.Vector3();
  const scratchCorner = new THREE.Vector3();

  const RINK_BOUNDS_CORNERS = [
    [-9.65, 0.0, -14.65], [9.65, 0.0, -14.65],
    [-9.65, 2.3, -14.65], [9.65, 2.3, -14.65],
    [-9.65, 0.0,  14.65], [9.65, 0.0,  14.65],
    [-9.65, 2.3,  14.65], [9.65, 2.3,  14.65]
  ];

  function fitCameraToRink(presetIdx = state.cameraPreset) {
    const rig = PRESET_RIGS[presetIdx % PRESET_RIGS.length] || PRESET_RIGS[0];
    const vw = Math.max(320, window.innerWidth);
    const vh = Math.max(320, window.innerHeight);
    const aspect = vw / vh;

    const baseFov = aspect < 1.0 ? Math.min(68, Math.round(48 / Math.max(0.66, aspect * 0.92))) : 48;
    camera.fov = baseFov;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();

    let ndcTopMax = 0.82;
    let ndcBottomMin = -0.66;

    const topEl = document.getElementById('hud-top');
    if (topEl) {
      const tr = topEl.getBoundingClientRect();
      if (tr.height > 0 && tr.bottom < vh * 0.4) {
        ndcTopMax = Math.min(0.86, 1.0 - ((tr.bottom + 8) / vh) * 2.0);
      }
    }

    const botEl = document.getElementById('hud-bottom');
    if (botEl && vh > 500) {
      const br = botEl.getBoundingClientRect();
      if (br.height > 0 && br.top > vh * 0.5) {
        ndcBottomMin = Math.max(-0.74, 1.0 - ((br.top - 10) / vh) * 2.0);
      }
    } else if (vh <= 500) {
      ndcBottomMin = -0.88;
    }

    const ndcXMax = aspect < 0.75 ? 0.93 : 0.90;

    let lo = 0.70;
    let hi = 2.55;
    const lookVec = new THREE.Vector3(0, 0, rig.lookZ);

    for (let iter = 0; iter < 14; iter++) {
      const mid = (lo + hi) * 0.5;
      camera.position.set(0, rig.dirY * mid, rig.lookZ + rig.dirZ * mid);
      camera.lookAt(lookVec);
      camera.updateMatrixWorld(true);

      let fits = true;
      for (let c = 0; c < RINK_BOUNDS_CORNERS.length; c++) {
        const pt = RINK_BOUNDS_CORNERS[c];
        scratchCorner.set(pt[0], pt[1], pt[2]).project(camera);
        if (
          Math.abs(scratchCorner.x) > ndcXMax ||
          scratchCorner.y > ndcTopMax ||
          scratchCorner.y < ndcBottomMin
        ) {
          fits = false;
          break;
        }
      }
      if (fits) {
        hi = mid;
      } else {
        lo = mid;
      }
    }

    const finalScale = hi;
    fittedCamBase.x = 0;
    fittedCamBase.y = rig.dirY * finalScale;
    fittedCamBase.z = rig.lookZ + rig.dirZ * finalScale;
    fittedCamBase.lookX = 0;
    fittedCamBase.lookY = 0;
    fittedCamBase.lookZ = rig.lookZ;

    smoothCamPos.set(fittedCamBase.x, fittedCamBase.y, fittedCamBase.z);
    camera.position.copy(smoothCamPos);
    camera.lookAt(fittedCamBase.lookX, fittedCamBase.lookY, fittedCamBase.lookZ);

    const camDist = Math.hypot(fittedCamBase.y, fittedCamBase.z - fittedCamBase.lookZ);
    scene.fog.near = camDist * 1.15;
    scene.fog.far = camDist * 2.45;
  }

  // UI Event Listeners
  document.getElementById('btn-start-match').addEventListener('click', () => {
    sfx.init();
    sfx.matchLaunch();
    startStage(state.stageId);
  });

  document.getElementById('btn-home').addEventListener('click', () => {
    sfx.hitWall();
    state.mode = 'menu';
    renderMenuGrids();
    document.getElementById('overlay-result').classList.remove('active');
    document.getElementById('overlay-menu').classList.add('active');
  });

  document.getElementById('fever-meter-pill').addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.mode !== 'playing') return;
    if (state.fever >= 40) {
      addFever(100);
    } else {
      addFever(25);
      spawnShockwaveRing(state.player.x, state.player.z, 0xffea00, 3.5, 0.30);
      sfx.coinArrive();
    }
  });

  document.getElementById('btn-cam').addEventListener('click', () => {
    state.cameraPreset = (state.cameraPreset + 1) % 3;
    fitCameraToRink(state.cameraPreset);
    sfx.hitWall();
  });

  document.getElementById('btn-audio').addEventListener('click', () => {
    sfx.muted = !sfx.muted;
    document.getElementById('btn-audio').textContent = sfx.muted ? '🔇' : '🔊';
  });

  ['vortex', 'fire', 'shield'].forEach((k) => {
    const btn = document.getElementById(`pedal-${k}`);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerPedal(k);
      });
    }
  });

  document.getElementById('btn-result-menu').addEventListener('click', () => {
    sfx.hitWall();
    state.mode = 'menu';
    renderMenuGrids();
    document.getElementById('overlay-result').classList.remove('active');
    document.getElementById('overlay-menu').classList.add('active');
  });

  document.getElementById('btn-result-retry').addEventListener('click', () => {
    sfx.hitMallet(8);
    startStage(state.stageId);
  });

  document.getElementById('btn-result-next').addEventListener('click', () => {
    if (state.lastResultRank > 3) return;
    sfx.hitMallet(12);
    const nextId = state.stageId < 8 ? state.stageId + 1 : 1;
    selectStage(nextId, false);
    startStage(nextId);
  });

  window.addEventListener('resize', () => {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    fitCameraToRink(state.cameraPreset);
  });

  let lastTime = performance.now();

  function updateCamera(dt, elapsed) {
    const rig = PRESET_RIGS[state.cameraPreset % PRESET_RIGS.length] || PRESET_RIGS[0];
    let targetX = fittedCamBase.x;
    let targetY = fittedCamBase.y;
    let targetZ = fittedCamBase.z;
    let lookX = fittedCamBase.lookX;
    let lookY = fittedCamBase.lookY;
    let lookZ = fittedCamBase.lookZ;

    if (state.mode === 'menu') {
      targetX = Math.sin(elapsed * 0.35) * 2.2;
    } else {
      targetX = state.player.x * rig.followX;
      lookX = state.player.x * rig.followLookX;
    }

    scratchCamTarget.set(targetX, targetY, targetZ);
    smoothCamPos.lerp(scratchCamTarget, Math.min(1, dt * 8));
    camera.position.copy(smoothCamPos);
    camera.lookAt(lookX, lookY, lookZ);

    if (state.trauma > 0) {
      state.trauma = Math.max(0, state.trauma - dt * 1.55);
      const motionMult = prefersReducedMotion ? 0.5 : 1.0;
      const s = state.trauma * state.trauma * motionMult;
      const n1 = Math.sin(elapsed * 145.0) * 0.65 + Math.cos(elapsed * 93.0) * 0.35;
      const n2 = Math.cos(elapsed * 158.0) * 0.65 + Math.sin(elapsed * 107.0) * 0.35;
      const n3 = Math.sin(elapsed * 172.0) * 0.65 + Math.cos(elapsed * 119.0) * 0.35;

      camera.position.x += n1 * s * 0.65;
      camera.position.y += n2 * s * 0.55;
      camera.rotateY(0.008 * s * n1);
      camera.rotateX(0.008 * s * n2);
      camera.rotateZ(0.013 * s * n3);
    }

    if (playerMalletMesh.userData.medalGroup) {
      playerMalletMesh.userData.medalGroup.quaternion.copy(camera.quaternion);
    }
    if (rivalMalletMesh.userData.medalGroup) {
      rivalMalletMesh.userData.medalGroup.quaternion.copy(camera.quaternion);
    }
  }

  function animate(now) {
    requestAnimationFrame(animate);
    const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
    lastTime = now;
    const elapsed = now * 0.001;

    if (state.mode === 'playing') {
      const stage = getStageById(state.stageId);

      state.timeRemaining -= dt;
      if (state.timeRemaining <= 0) {
        state.timeRemaining = 0;
        updateHudDom();
        finishMatch();
        return;
      }

      ['vortex', 'fire', 'shield'].forEach((k) => {
        const p = state.pedals[k];
        if (p.cd > 0) p.cd = Math.max(0, p.cd - dt);
        if (p.activeTimer > 0) {
          p.activeTimer = Math.max(0, p.activeTimer - dt);
          if (k === 'vortex' && p.activeTimer === 0) {
            vortexPortalMesh.visible = false;
          }
          if (k === 'shield' && p.activeTimer === 0) {
            goalShieldMesh.visible = false;
            shieldMat.opacity = 0;
          }
        }
      });

      // Pedal 1 (Vortex): 3D Swirling Attractor Portal animation at open rival goal corner
      if (state.pedals.vortex.activeTimer > 0) {
        vortexPortalMesh.visible = true;
        const openCornerX = state.rival.x >= 0 ? -RINK.goalHalfW * 0.58 : RINK.goalHalfW * 0.58;
        vortexPortalMesh.position.x += (openCornerX - vortexPortalMesh.position.x) * Math.min(1, dt * 10);
        const vUd = vortexPortalMesh.userData;
        vUd.outerRing.rotation.z = elapsed * 6.5;
        vUd.innerRing.rotation.z = -elapsed * 9.5;
        const vPulse = 1.0 + Math.sin(elapsed * 16) * 0.14;
        vortexPortalMesh.scale.set(vPulse, 1.0, vPulse);
        vUd.outerMat.opacity = 0.72 + Math.sin(elapsed * 20) * 0.22;
        vUd.coreMat.opacity = 0.65 + Math.cos(elapsed * 24) * 0.28;
      }

      // Pedal 3 (Shield): 3D Additive Neon Energy Border & Deflection Flash
      if (state.pedals.shield.activeTimer > 0) {
        goalShieldMesh.visible = true;
        const sUd = goalShieldMesh.userData;
        if (shieldFlashTimer > 0) {
          shieldFlashTimer = Math.max(0, shieldFlashTimer - dt);
        }
        puckPool.forEach((p) => {
          if (p.active && p.z > RINK.halfL - RINK.puckR - 0.55 && p.vz < 0) {
            shieldFlashTimer = 0.25;
          }
        });
        const flashBoost = shieldFlashTimer > 0 ? (shieldFlashTimer / 0.25) : 0;
        shieldMat.opacity = 0.72 + flashBoost * 0.26 + Math.sin(elapsed * 14) * 0.08;
        shieldMat.emissiveIntensity = 0.85 + flashBoost * 1.4;
        sUd.rimMat.opacity = 0.88 + flashBoost * 0.12;
        sUd.crestRing.rotation.z = elapsed * 4.2;
        sUd.crestRing.scale.setScalar(1.0 + flashBoost * 0.35 + Math.sin(elapsed * 12) * 0.08);
        goalShieldMesh.scale.set(1.0 + flashBoost * 0.06, 1.0 + flashBoost * 0.12, 1.0 + flashBoost * 0.18);
      }

      // Pedal 2 (Fire) & Rainbow Fever Mode (🌈): 3D Mallet Aura + 3D Stadium Rainbow Light-Show
      const playerUd = playerMalletMesh.userData;
      if (state.feverActiveTimer > 0) {
        state.feverActiveTimer = Math.max(0, state.feverActiveTimer - dt);
        const hue1 = (elapsed * 1.25) % 1.0;
        const hue2 = (hue1 + 0.5) % 1.0;
        stadiumPointLight1.color.setHSL(hue1, 1.0, 0.56);
        stadiumPointLight2.color.setHSL(hue2, 1.0, 0.56);
        playerUd.auraMat.color.setHSL((elapsed * 1.8) % 1.0, 1.0, 0.58);
        playerUd.auraMat.opacity = 0.82 + Math.sin(elapsed * 22) * 0.16;
        playerUd.aura.scale.setScalar(1.18 + Math.sin(elapsed * 16) * 0.16);

        puckPool.forEach((p, idx) => {
          if (p.active && Math.random() < 0.45) {
            feverRainbowColor.setHSL((elapsed * 2.2 + idx * 0.28) % 1.0, 1.0, 0.58);
            spawnSparkBurst(p.x, p.z, feverRainbowColor.getHex(), 1, false);
          }
        });

        if (state.feverActiveTimer === 0) {
          state.fever = 0;
          document.getElementById('fever-vignette').classList.remove('active');
          stadiumPointLight1.color.setHex(stage.railColor);
          stadiumPointLight2.color.setHex(stage.accentColor);
          playerUd.auraMat.color.setHex(0xffaa00);
        }
      } else if (state.pedals.fire.activeTimer > 0) {
        playerUd.auraMat.color.setHex(0xffaa00);
        playerUd.auraMat.opacity = 0.68 + Math.sin(elapsed * 18) * 0.25;
        playerUd.aura.scale.setScalar(1.12 + Math.sin(elapsed * 14) * 0.14);
      } else {
        playerUd.auraMat.opacity = 0;
      }

      state.starSpawnTimer -= dt;
      if (state.starSpawnTimer <= 0) {
        state.starSpawnTimer = 7.5;
        const activeCount = puckPool.filter((p) => p.active).length;
        if (activeCount < stage.maxPucks) {
          spawnPuck('star', (Math.random() - 0.5) * 6, 0, (Math.random() - 0.5) * 8, -11.5);
          showFloatingPopup('⭐🏒⭐', '#ffea00', 50, 32);
        }
      }

      let lbChanged = false;
      const offRinkCap = stage.id === 1
        ? Math.min(2, Math.max(0, state.playerGoals - 1))
        : state.playerGoals + (stage.id >= 6 ? 2 : 1);
      state.leaderboard.forEach((entry) => {
        if (!entry.isPlayer && !entry.isRival) {
          entry.simTimer -= dt;
          if (entry.simTimer <= 0) {
            entry.simTimer = entry.simRate + Math.random() * 2.5;
            if (entry.score < offRinkCap) {
              entry.score += 1;
              entry.lastScoredAt = now;
              lbChanged = true;
            }
          }
        }
      });
      if (lbChanged) renderLiveLeaderboard();

      stepPhysics(dt);
      updateHudDom();
      updatePedalsDom();
    } else {
      playerMalletMesh.position.set(Math.sin(elapsed * 1.4) * 3.2, 0, 9.2);
      rivalMalletMesh.position.set(Math.cos(elapsed * 1.4) * 3.2, 0, -9.8);
    }

    updateCamera(dt, elapsed);

    let anySparkUpdated = false;
    for (let i = 0; i < SPARK_TOTAL; i++) {
      const sp = sparkData[i];
      if (!sp.active) continue;
      anySparkUpdated = true;
      sp.life += dt;
      if (sp.life >= sp.maxLife) {
        sp.active = false;
        dummyScale.setScalar(0);
        dummyMatrix.compose(dummyPos.set(0, -100, 0), dummyQuat, dummyScale);
        sparkInstancedMesh.setMatrixAt(i, dummyMatrix);
      } else {
        sp.x += sp.vx * dt;
        sp.y += sp.vy * dt;
        sp.z += sp.vz * dt;
        sp.vx *= 1 - 1.8 * dt;
        sp.vz *= 1 - 1.8 * dt;
        sp.vy -= 18.0 * dt;
        if (sp.y < 0.12 && sp.vy < 0) {
          sp.y = 0.12;
          sp.vy = -sp.vy * 0.55;
        }
        const ratio = 1 - sp.life / sp.maxLife;
        dummyPos.set(sp.x, sp.y, sp.z);
        dummyScale.setScalar(sp.baseSize * (0.35 + ratio * 0.85));
        dummyMatrix.compose(dummyPos, dummyQuat, dummyScale);
        sparkInstancedMesh.setMatrixAt(i, dummyMatrix);
      }
    }
    if (anySparkUpdated) {
      sparkInstancedMesh.instanceMatrix.needsUpdate = true;
    }

    for (let i = 0; i < SHOCKWAVE_POOL_SIZE; i++) {
      const sw = shockwavePool[i];
      if (!sw.active) continue;
      sw.life += dt;
      if (sw.life >= sw.maxLife) {
        sw.active = false;
        sw.mesh.visible = false;
      } else {
        const t = sw.life / sw.maxLife;
        const easeOut = 1 - (1 - t) * (1 - t);
        const curScale = sw.startScale + (sw.endScale - sw.startScale) * easeOut;
        sw.mesh.scale.setScalar(curScale);
        sw.mat.opacity = 0.92 * (1 - t);
      }
    }

    if (goalPillarTimer > 0) {
      goalPillarTimer = Math.max(0, goalPillarTimer - dt);
      goalPillarMat.opacity = (goalPillarTimer / 0.45) * 0.82;
      goalPillarMesh.scale.set(1.2 - goalPillarTimer * 0.4, 1.0, 1.2 - goalPillarTimer * 0.4);
      if (goalPillarTimer === 0) goalPillarMesh.visible = false;
    }

    for (let i = 0; i < STAR_COIN_POOL_SIZE; i++) {
      const coin = starCoinPool[i];
      if (!coin.active) continue;
      coin.age += dt;
      if (coin.age < 0) continue;

      if (coin.age <= coin.arcDuration) {
        coin.x += coin.vx * dt;
        coin.y += coin.vy * dt;
        coin.z += coin.vz * dt;
        coin.vy -= 16.0 * dt;
        coin.startX = coin.x;
        coin.startY = coin.y;
        coin.startZ = coin.z;
        coin.sprite.position.set(coin.x, coin.y, coin.z);
        coin.sprite.scale.setScalar(1.65 + Math.sin(coin.age * 24) * 0.22);
      } else if (coin.age <= coin.arcDuration + coin.homeDuration) {
        const ht = (coin.age - coin.arcDuration) / coin.homeDuration;
        const smoothT = ht * ht * (3 - 2 * ht);
        const hudTarget = getHudScoreWorldTarget(coin.toPlayerHud);
        coin.x = coin.startX + (hudTarget.x - coin.startX) * smoothT;
        coin.y = coin.startY + (hudTarget.y - coin.startY) * smoothT;
        coin.z = coin.startZ + (hudTarget.z - coin.startZ) * smoothT;
        coin.sprite.position.set(coin.x, coin.y, coin.z);
        coin.sprite.scale.setScalar(1.7 * (1 - ht * 0.45));
      } else {
        coin.active = false;
        coin.sprite.visible = false;
        sfx.coinArrive();
      }
    }

    renderer.render(scene, camera);
  }

  validateStageLayout();
  const initialStage = getStageById(state.stageId);
  updateMalletCritter(playerMalletMesh, getCritterById(state.playerCritterId));
  updateMalletCritter(rivalMalletMesh, resolveRival(initialStage, state.playerCritterId));
  buildStadium3D(initialStage);
  initTournamentLeaderboard(initialStage);
  renderMenuGrids();
  updateHudDom();
  fitCameraToRink(state.cameraPreset);
  requestAnimationFrame(animate);

  // Expose Public API for Automated Verification & Debugging
  window.CritterHockey3D = {
    state,
    CRITTERS,
    STAGES,
    RINK,
    GOAL_POSTS,
    camera,
    renderer,
    puckPool,
    shockwavePool,
    starCoinPool,
    sparkInstancedMesh,
    vortexPortalMesh,
    goalShieldMesh,
    selectCritter,
    selectStage,
    startStage,
    fitCameraToRink,
    resolveRival,
    validateStageLayout,
    addTrauma,
    triggerPedal,
    scoreGoal: (byPlayer = true) => onGoalScored(byPlayer, puckPool.find((p) => p.active)),
    finishMatch,
    spawnPuck,
    spawnShockwaveRing,
    spawnFlyingStarCoins
  };
})();
