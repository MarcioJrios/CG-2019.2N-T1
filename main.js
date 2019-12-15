import { BasisTextureLoader } from '/node_modules/three/examples/jsm/loaders/BasisTextureLoader.js';

var scene = new THREE.Scene();

var texture = new THREE.TextureLoader().load( '/Fire.png' );

// immediately use the texture for material creation
var material = new THREE.MeshBasicMaterial( { map: texture } );;
var fire = new THREE.Fire( material );

scene.add( fire );