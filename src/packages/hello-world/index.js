
import MoorHelloWorld from './moor-hello-world'

MoorHelloWorld.install = Vue => Vue.component(MoorHelloWorld.name, MoorHelloWorld)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MoorHelloWorld)
}

export default MoorHelloWorld
