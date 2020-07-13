import HelloWorld from './packages/hello-world/moor-hello-world.vue'
import ThreeLevelCity from './packages/three-level-city/index.vue'
import ThreeDemo from './packages/threeDemo/demo/index.vue'

const components = [
  HelloWorld,
  ThreeLevelCity,
  ThreeDemo
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
