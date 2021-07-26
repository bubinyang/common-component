<template>
  <div>
    <div id="container" />
  </div>

</template>

<script>
// import fbxSrc from '../../../assets/3d.fbx'
// import OrbitControls from 'three-orbitcontrols'
import * as THREE from 'three'
export default {
  name: 'ThreeLangrunda',
  props: {
    color: {
      type: String,
      default: 'pink'
    },
    msg: {
      type: String,
      default: 'Hello World!'
    }
  },
  data() {
    return {
      
    }
  },
  mounted() {
   // this.initialize()
  },
  methods: {

    // initialize() {

    //   var scene = new THREE.Scene()

    //   var loader = new THREE.FBXLoader()
    //   loader.load(fbxSrc, function(mesh) {
    //     mesh.position.y += 100
    //     scene.add(mesh)
    //   })
    // }
  }
}
</script>

<style lang="scss">

</style>

