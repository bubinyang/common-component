<!--
名称:上下布局模板
详情:
上下布局模板，内容框contain-layout-content固定高度且滚动
prop:
layoutStyle 决定模板的高度
-->
<template>
  <div :style="[layoutStyle]" class="contain-layout-component">

    <div v-if="$slots.action" class="contain-layout-action">
      <slot name="action" />
    </div>
    <div class="contain-layout-content">
      <slot v-if="bodyRefresh" name="contain" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContainLayout',
  components: {},
  props: {
    containHeight: {
      type: String,
      default() {
        return '100vh - 118px';
      }
    }
  },
  data() {
    return {
      bodyRefresh: true
    };
  },
  computed: {
    layoutStyle() {
      console.log(this.containHeight);
      return {

        height: `calc(${this.containHeight})`
      };
    }
  },
  activated() {
    this.bodyRefresh = false;
    this.$nextTick(() => {
      this.bodyRefresh = true;
    });
  },
  methods: {
  }
};
</script>

<style  lang="scss">
.contain-layout-component{
  // border: 1px solid #ebeef5;
  background-color: #fff;
  padding: 20px;
  // height: 100%;
  display: flex;
  flex-direction: column;
  .contain-layout-content{
    flex:1;
    overflow: auto;
    display: flex;
  }
}
</style>
