import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let currentMount = null;

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    80,
    100/100,
    0.1,
    1000
);
camera.position.z = 60;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer();

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.enableZoom = false;

// Resize
const resize = () => {
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
    camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);

// Textures
const textureLoader = new THREE.TextureLoader();
const map = textureLoader.load('/bricks/earthColors.jpg');
const moonMap = textureLoader.load('/bricks/moonTexture.jpg');
const starsTexture = textureLoader.load('/bricks/stars.jpg');
starsTexture.wrapS = starsTexture.wrapT = THREE.RepeatWrapping;
starsTexture.repeat.set(2, 2);
starsTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

const worldGeometry = new THREE.SphereGeometry( 200, 31 , 31 );
const worldMaterial = new THREE.MeshBasicMaterial ({
    color: 0xffffff ,
    map: starsTexture ,
    side: THREE.BackSide
});

const world = new THREE.Mesh(worldGeometry, worldMaterial);
scene.add(world);

// Earth
const geometry = new THREE.SphereGeometry( 36, 40, 40);
const material = new THREE.MeshStandardMaterial({
    map: map,
    displacementScale: 0
});
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// MoonOrbitCenter
const moonOrbitCenter = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial() );
scene.add( moonOrbitCenter );

// Moon
const MoonGeometry = new THREE.SphereGeometry( 1.8, 64, 32);
const MoonMaterial = new THREE.MeshStandardMaterial({
    map: moonMap,
    displacementScale: 0
});
const MoonSphere = new THREE.Mesh( MoonGeometry, MoonMaterial );
MoonSphere.position.z=50;
moonOrbitCenter.add( MoonSphere );

// Lights
const A0 = new THREE.AmbientLight(
    0xffffff,
    0.1
);
scene.add(A0);

const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    0.7,
);
directionalLight.position.set(40,0,20);
scene.add(directionalLight);

// Render the scene
const animate = () => {
    controls.update();
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
    sphere.rotateOnAxis(new THREE.Vector3(0,1,0),0.002);
    MoonSphere.rotateY(0.009);
    moonOrbitCenter.rotateY(-0.0015);
    starsTexture.offset.x -= 0.0001;
    starsTexture.offset.y -= 0.0001;
};
animate();

// renderer.render(scene,camera);

    // agrega el canvas
export const mountScene = (mountRef) => {
    currentMount = mountRef.current;
    resize();
    currentMount.appendChild(renderer.domElement);
};

export const cleanUpScene = () => {
    // Eliminar los objetos de la escena
    scene.remove(world);
    scene.remove(sphere);
    scene.remove(moonOrbitCenter);

    // Llamar a la función dispose en cada objeto
    worldMaterial.dispose();
    starsTexture.dispose();
    material.dispose();
    map.dispose();
    MoonMaterial.dispose();
    moonMap.dispose();

    // Eliminar el canvas del renderer
    currentMount.removeChild(renderer.domElement);

    // Detener la animación
    cancelAnimationFrame(animate);

    // Eliminar los eventos
    window.removeEventListener("resize", resize);
    controls.dispose();
};