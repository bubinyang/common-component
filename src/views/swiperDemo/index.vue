<!--
 * @Descripttion:
 * @version:
 * @Author: BBY
 * @Date: 2020-12-07 10:43:08
 * @LastEditTime: 2020-12-07 11:03:15
-->
<template>
  <section class="swiperspec-contain">
    <section class="swpierspec-item" style="width:500px">
      1
    </section>
    <section class="swpierspec-item" style="width:500px">
      2
    </section>
    <section class="swpierspec-item" style="width:500px">
      3
    </section>
    <section class="swpierspec-item" style="width:500px">
      4
    </section>
  </section>
</template>

<script>

import { newSwpierSpecial } from '@/utils'
export default {
  name: 'Home',

  data() {
    return {
      styleObj: {

      }
    }
  },
  created() {

  },
  mounted() {
    const delay = [{ name: 1, value: 8000 }]
    newSwpierSpecial('.swiperspec-contain', { delayOptions: delay })
  }
}
</script>
<style lang="scss">
.swiperspec-contain{
  margin:0 auto;
  width:500px;
  height: 500px;
  position:relative;
  display: flex;
  overflow: hidden;
  &>section{
    top:0px;
    left: 0px;
    position: absolute;
    border:1px solid;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    transition-property: transform;
    // flex-shrink: 0;
    &:nth-child(2n){
      background: bisque;
    }
    &:nth-child(2n+1){
     background-color: #d3dce6;
    }

  }
  .is-active{
    z-index: 1;
  }
}
</style>
