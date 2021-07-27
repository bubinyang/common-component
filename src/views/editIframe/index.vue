<template>
  <section id="stageContain">
    <div class="logContain" v-if="tools" />
  </section>
</template>

<script>
import { strToJson } from '@/utils';
import Vue from 'vue';

export default {
  name: 'Test',
  data() {
    return {
      tools:false
    };
  },
  mounted() {
    const logEl = document.querySelector('.logContain');
    function setConsole(message) {
      logEl.innerHTML += message + '<br />';
    }

    window.addEventListener('message', function(messageEvent) {
      const { obj, template, type } = messageEvent.data;
      let objUpdate = null;
      // if for the tools，replace the console method，render info to Element
      // hide create of code
      if (type === 'tools') {
        console.log = setConsole;
        objUpdate = `{created(){
          ${obj}
        }}`;
        this.tools=true
      } else {
        objUpdate = obj;
        this.tools=false
      }

      const jscode = (objUpdate || '{}').replace(/([\n\r]+)/g, '');
      const templateNode = `<div>${template || ''}</div>`;
      const Component = Vue.extend({
        ...strToJson(jscode),
        template: templateNode
      });

      const markedComponent = new Component().$mount();
      const stageContainEl = document.querySelector('#stageContain');
      stageContainEl.appendChild(markedComponent.$el);
    });
  }
};
</script>
<style lang="scss">
  #stageContain{
    height: 100%;
    position: relative;
    .logContain{position: absolute;top:0;bottom: 0;right: 0;left: 0;}
  }
</style>
