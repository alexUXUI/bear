'use strict'

// Set up the scene, camera, and renderer as global variables.
var scene, camera, renderer

// Create the scene and set the scene size.
scene = new THREE.Scene()

// Create a renderer and add it to the DOM.
renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x3399ff)
document.body.appendChild(renderer.domElement)

// Create a camera, zoom it out from the model a bit, and add it to the scene.
camera = new THREE.PerspectiveCamera(145, window.innerWidth/window.innerHeight, 0.1, 20000)
camera.position.set(10,6,10)
scene.add(camera)

// Create a light, set its position, and add it to the scene.
const light = new THREE.PointLight(0xffffff)
light.position.set(-100,200,100)
scene.add(light)

// Add a bear to the scene rawr!
const loader = new THREE.JSONLoader()
loader.load( './js/three/objects/bear.js', (geometry) => {
  let material = new THREE.MeshLambertMaterial({color: 0x985821})
  let mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
})

// Add OrbitControls so that we can pan around with the mouse.
const controls = new THREE.OrbitControls(camera, renderer.domElement)

// Renders the scene and updates the render as needed.
function animate() {
  requestAnimationFrame( animate )
  renderer.render( scene, camera )
  controls.update()
}

animate()
