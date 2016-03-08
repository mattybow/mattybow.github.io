import THREE from 'three';
import React, {Component} from 'react';
import {render} from 'react-dom';

class ThreeDemo extends Component{
  componentDidMount(){
    var camera, scene, renderer;
			var mesh;

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 400;

				scene = new THREE.Scene();
        
				var geometry = new THREE.BoxGeometry( 20, 20, 200 );
				var material = new THREE.MeshBasicMaterial();

				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				mesh.rotation.x += 0.005;
				mesh.rotation.y += 0.01;

				renderer.render( scene, camera );

			}
  }
  render(){
    return <div>hello</div>
  }
}

render(<ThreeDemo/>, document.getElementById('root'));
