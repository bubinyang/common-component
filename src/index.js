// import HelloWorld from './packages/hello-world/index.js';
import HelloWorld from './packages/hello-world/moor-hello-world'
import MoorButton from './packages/button/index.js';
import MoorSelect from './packages/select/index.js';
import MoorInput from './packages/input/index.js';
import MoorSwitch from './packages/switch/index.js';
import ThreeLevelCity from './packages/three-level-city/index.vue'

const components = [
  HelloWorld,
  MoorButton,
  MoorSelect,
  MoorInput,
  MoorSwitch,
  ThreeLevelCity
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HelloWorld,
  MoorButton,
  MoorSelect,
  MoorInput,
  MoorSwitch,
  ThreeLevelCity
}