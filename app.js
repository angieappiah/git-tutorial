let container;
let camera;
let renderer;
let scene;
let house;

function init() {
    container = document.querySelector('.scene')

    scene = new THREE.Scene
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 20);

    const ambient = new THREE.AmbientLight(0x404040, 5);
    scene.add(ambient);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement);


    let loader = new THREE.GLTFLoader();
    loader.load("./house/scene.gltf", function (gltf) {
        scene.add(gltf.scene)
        console.log(gltf);

        renderer.render(scene, camera);

    })



}