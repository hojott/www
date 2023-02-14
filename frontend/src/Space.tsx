import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import './Space.css'

function Space() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#space')!
    });

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    camera.position.setZ(30);

    const sky_geometry = new THREE.SphereGeometry( 100, 32, 16 );
    const sky_texture = new THREE.TextureLoader().load('src/assets/space.jpg');
    const sky_material = new THREE.MeshStandardMaterial( { map: sky_texture, side: THREE.DoubleSide } );
    const sky = new THREE.Mesh( sky_geometry, sky_material );
    scene.add(sky);

    const earth_geometry = new THREE.SphereGeometry( 10, 32, 16 );
    const earth_texture = new THREE.TextureLoader().load('src/assets/earth.jpg');
    const earth_material = new THREE.MeshStandardMaterial( { map: earth_texture } );
    const earth = new THREE.Mesh( earth_geometry, earth_material );
    scene.add(earth);

    const moon_geometry = new THREE.SphereGeometry( 3, 12, 12 );
    const moon_texture = new THREE.TextureLoader().load('src/assets/moon.jpg');
    const moon_material = new THREE.MeshStandardMaterial( { map: moon_texture} );
    const moon = new THREE.Mesh( moon_geometry, moon_material );
    moon.position.set(-30, 20, 5)
    scene.add(moon);

    const sunLight = new THREE.PointLight(0xFFFFFF);
    sunLight.position.set(20, 5, 5);
    scene.add(sunLight);

    /*const moonLight = new THREE.PointLight(0xFFFFFF);
    moonLight.position.set(-60, 30, 20);
    scene.add(moonLight);*/

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
        requestAnimationFrame( animate );

        earth.rotation.x += 0.01
        earth.rotation.y += 0.08
        earth.rotation.z += 0.02

        const [x, y, z] = [0, 0, 0]
        moon.getWorldPosition([x, y, z])
        moon.position.setX(1)

        controls.update();

        renderer.render( scene, camera );
    }

    animate()
}

export default Space