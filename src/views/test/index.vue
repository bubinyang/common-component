<template>
  <!-- <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select> -->
  <section class="test">
    {{ widthVal }}
    <div class="x6-graph-scroller" />
  </section>

</template>
<script>
import Vue from 'vue';
export default {
  name: 'Test',
  data() {
    return {
      value: 'red',
      options: [{ label: '红色', value: 'red' }, { label: '蓝色', value: 'blue' }],
      widthVal: ''
    };
  },
  mounted() {
    this.widthVal = document.querySelector('body').getBoundingClientRect().width;
    // const Component = Vue.extend({
    //   data: function() {
    //     return {
    //       value1: '',
    //       cities: ['上海', '北京', '广州', '深圳']
    //     };
    //   },
    //   template: '<el-date-picker v-model="value1" type="date" placeholder="选择日期1"></el-date-picker>111'

    // });

    // const markedComponent = new Component().$mount();
    // const stageContainEl = document.querySelector('.test');
    // stageContainEl.appendChild(markedComponent.$el);
  }
};
</script>
<style lang="scss">
body{

}
.test{
  width: 100%;
  height: 100%;
  border: 1px solid;
  overflow: hidden;
   .x6-graph-scroller{
  width: 1920px; height: 1080px;
   }
}

</style>
