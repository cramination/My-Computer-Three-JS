
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { lightPosition } from 'three/src/nodes/TSL.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { film } from 'three/examples/jsm/tsl/display/FilmNode.js'
import { RGBELoader } from 'three/examples/jsm/Addons.js'
import { thickness } from 'three/tsl'


//scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(1, .5, 1)


new RGBELoader()
.load("public/autumn_field_4k.hdr", function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
});





//renderer
const renderer = new THREE.WebGLRenderer();

function onWindowResize() {
  // Get the new window dimensions
  const width = window.innerWidth;
  const height = window.innerHeight;
renderer.setSize( width, height );

camera.aspect = width / height;

camera.updateProjectionMatrix();
}

window.addEventListener('resize', onWindowResize);
onWindowResize();

document.body.appendChild( renderer.domElement );

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = .7;

//light



//Controls
const controls = new OrbitControls( camera, renderer.domElement );

controls.target.set(1, .5, 3.6)
controls.maxDistance = 4;
controls.enablePan = false
controls.minDistance = .5


camera.position.z = 8;
camera.position.x = 3;
camera.position.y = 1;


/*const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );*/


//GTLFloader

const video =  document.getElementById('film');
const video2 =  document.getElementById('film2');
const video3 =  document.getElementById('film3');
const video4 =  document.getElementById('film4');
const video5 =  document.getElementById('film5');
const texture = new
THREE.VideoTexture(video);
const texture2 = new
THREE.VideoTexture(video2);
const texture3 = new
THREE.VideoTexture(video3);
const texture4 = new
THREE.VideoTexture(video4);
const texture5 = new
THREE.VideoTexture(video5);




let comp
let animated

const geometry = new THREE.CylinderGeometry( 1, 1, 1, 32 ); 
  const videoTexture = new THREE.VideoTexture(video);
  const videoMaterial =  new THREE.MeshBasicMaterial( {
    map: videoTexture, 
    side: THREE.FrontSide, 
    toneMapped: false,
    transparent: true,
    opacity: 0.9
  } );
  const cylinder = new THREE.Mesh( geometry, videoMaterial ); 
  scene.add( cylinder );
  cylinder.rotation.x += Math.PI / 2;
  cylinder.position.set (.978, .67, 3.564)
  cylinder.scale.set(.115, .13, .115)
  videoTexture.repeat.set(0.6, 0.6);
  videoTexture.offset.set(0.18, 0.18);

 
  const geometry2 = new THREE.CylinderGeometry( 1, 1, 1, 32 ); 
  const videoTexture2 = new THREE.VideoTexture(video3);
  const videoMaterial2 =  new THREE.MeshBasicMaterial( {
    map: videoTexture2,
    side: THREE.FrontSide, 
    toneMapped: false,
    transparent: true,
    opacity: 0.3 
  } );
  const cylinder2 = new THREE.Mesh( geometry2, videoMaterial2 ); 
  scene.add( cylinder2 );
  cylinder2.rotation.x += Math.PI / 2;
  cylinder2.rotation.z += Math.PI / 2;
  cylinder2.position.set (.607, .695, 3.72)
  cylinder2.scale.set(.16, .07, .16)


  const geometry3 = new THREE.CylinderGeometry( 1, 1, 1, 32 ); 
  const videoTexture3 = new THREE.VideoTexture(video3);
  const videoMaterial3 =  new THREE.MeshBasicMaterial( {
    map: videoTexture3, 
    side: THREE.FrontSide, 
    toneMapped: false,
    transparent: true,
    opacity: 0.5
  } );
  const cylinder3 = new THREE.Mesh( geometry3, videoMaterial3 ); 
  scene.add( cylinder3 );
  cylinder3.rotation.x += Math.PI / 2;
  cylinder3.rotation.z += Math.PI / 2;
  cylinder3.position.set (1.71, .73, 3.72)
  cylinder3.scale.set(.16, .07, .16)


  const geometry4 = new THREE.CylinderGeometry( 1, 1, 1, 32 ); 
  const videoTexture4 = new THREE.VideoTexture(video3);
  const videoMaterial4 =  new THREE.MeshBasicMaterial( {
    map: videoTexture4, 
    side: THREE.FrontSide, 
    toneMapped: false,
    transparent: true,
    opacity: 0.5
  } );
  const cylinder4 = new THREE.Mesh( geometry4, videoMaterial4 ); 
  scene.add( cylinder4 );
  cylinder4.rotation.x += Math.PI / 2;
  cylinder4.rotation.z += Math.PI / 2;
  cylinder4.position.set (1.71, .4, 3.72)
  cylinder4.scale.set(.16, .07, .16)
  

  const geometry5 = new THREE.BoxGeometry( 1, 1, 1 ); 
  const videoTexture10 = new THREE.VideoTexture(video5);
  const videoTexture11 = new THREE.VideoTexture(video4);
  const material5 = [
    new THREE.MeshBasicMaterial( {
      map: videoTexture10, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture10, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture11, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture11, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture10, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture10, side: THREE.DoubleSide, toneMapped: false
    } ),
  ];
  const cube = new THREE.Mesh( geometry5, material5 ); 
  cube.position.set (1.203, .69, 3.465)
  cube.scale.set(.029, .35, .029)
  videoTexture10.repeat.set(0.6, 0.6);
  scene.add( cube );



  const geometry6 = new THREE.BoxGeometry( 1, 1, 1 ); 
  const videoTexture7 = new THREE.VideoTexture(video5);
  const videoTexture9 = new THREE.VideoTexture(video4);

  const material6 = [
    new THREE.MeshBasicMaterial( {
      map: videoTexture7, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture7, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture9, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture9, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture7, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture7, side: THREE.DoubleSide, toneMapped: false
    } ),
  ];
  const cube2 = new THREE.Mesh( geometry6, material6 );
  cube2.position.set (1.262, .69, 3.465)
  cube2.scale.set(.029, .35, .029)
  videoTexture7.repeat.set(0.6, 0.6);
  videoTexture7.offset.set(0.52, 0.52);
  scene.add( cube2 );

  

  const geometry7 = new THREE.PlaneGeometry( 1, 1, );
  const videoTexture8 = new THREE.VideoTexture(video5);
  const material7 = new THREE.MeshBasicMaterial( {map: videoTexture8, side: THREE.DoubleSide, toneMapped: false} );
  const plane = new THREE.Mesh( geometry7, material7 );
  plane.position.set (1.366, .219, 3.372)
  plane.scale.set(.03, .205, .02)
  scene.add( plane );


const loader = new GLTFLoader();
loader.load(
	'../public/Computer-caseBAKE.gltf',
	function ( gltf ) {
    comp = gltf.scene
    comp.position.set(-.6, 0, 3.6)
    comp.scale.set(2, 2, 2)
		scene.add( gltf.scene );
  });
    

  loader.load(
    '../public/Computer-wires.gltf',
    function ( gltf ) {
      comp = gltf.scene
      comp.position.set(-.6, 0, 3.6)
      comp.scale.set(2, 2, 2)
      scene.add( gltf.scene );
    });


  

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	-1.0, -1.0,  1.0, // v0
	 1.0, -.5,  1.0, // v1
	 1.0,  .5,  1.0, // v2

	 1.0,  .5,  1.0, // v3
	-1.0,  1.0,  1.0, // v4
	-1.0, -1.0,  1.0  // v5
] );




const glass = new THREE.MeshPhysicalMaterial({
  envMap: scene.background,
  reflectivity: .5
});
glass.color = new THREE.Color(1, 1, 1);
glass.transmission = 0.5;
glass.roughness = 0;
glass.ior = 1


function animate() {
	controls.update();

	renderer.render( scene, camera, );

}


renderer.setAnimationLoop( animate );

