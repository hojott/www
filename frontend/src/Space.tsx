import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './Space.css';

class Space {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;

    sky: CelestialObject;
    earth: CelestialObject;
    moon: CelestialObject;

    sunLight: THREE.PointLight;

    constructor() {

	this.init_scene()

	this.add_objects()
	this.add_lighting()

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    private init_scene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#space')!
        });

        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        this.camera.position.setZ(30);
    }

    private add_objects() {
        this.sky = new CelestialObject( [100, 32, 16], "space.jpg", true );
        this.scene.add(this.sky);

        this.earth = new CelestialObject( [10, 32, 16], "earth.jpg" );
        this.scene.add(this.earth);

        this.moon = new CelestialObject( [3, 12, 12], "moon.jpg" );
        this.moon.position.set(-30, 20, 5);
        this.scene.add(this.moon);
    }

    private add_lighting() {
        this.sunLight = new THREE.PointLight(0xFFFFFF);
        this.sunLight.position.set(20, 5, 5);
        this.scene.add(this.sunLight);

        /*this.moonLight = new THREE.PointLight(0xFFFFFF);
        this.moonLight.position.set(-60, 30, 20);
        scene.add(this.moonLight);*/
    }

    public animate() {
	this.timestamp;
    	if (this.timetstamp == undefined || this.timestamp > Date.now() + 1) {
            requestAnimationFrame( () => this.animate() );

            this.earth.rotation.x += 0.01
            this.earth.rotation.y += 0.08
            this.earth.rotation.z += 0.02
	
	    let orbitRadius = 20; // for example
	    let date;

	    date = Date.now() * 0.001;
	    this.moon.position.set(
	      Math.cos(date) * orbitRadius,
	      0,
	      Math.sin(date) * orbitRadius
            );

            this.controls.update();

            this.renderer.render( this.scene, this.camera );

	    this.timestamp = Date.now();
	}
    }

}

class CelestialObject extends THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial> {

    constructor(geo: [number, number, number], filename: string, doubleside: boolean = false) {
    	const object_geometry = new THREE.SphereGeometry( geo[0], geo[1], geo[2] );
        const object_texture = new THREE.TextureLoader().load('src/assets/'+filename);

        let object_material;
        if (doubleside) {
            object_material = new THREE.MeshStandardMaterial( { map: object_texture, side: THREE.DoubleSide } );
        } else {
            object_material = new THREE.MeshStandardMaterial( { map: object_texture } );
	}

        super( object_geometry, object_material );
    }
    
    public velocity(speed: number, direction: [number, number, number]) {

	const direction_length = Math.sqrt(direction[0]**2 + direction[1]**2 + direction[2]**2);
	const zero_vector = [direction[0]/direction_length, direction[1]/direction_length, direction[2]/direction_length];

	const movement = [zero_vector[0]*speed, zero_vector[1]*speed, zero_vector[2]*speed];
	
	const position = this.getWorldPosition( new THREE.Vector3 );

	this.position.setX( position[0] + movement[0] );
	this.position.setY( position[1] + movement[1] );
	this.position.setZ( position[2] + movement[2] );
    }

}

export default Space;
