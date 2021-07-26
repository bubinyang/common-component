<!--
名称:左右布局模板
详情:
左右布局模板，必须配合ContainLayout(上下布局)进行使用。容器side-layout-component高度固定且滚动
prop:
layoutStyle 决定模板的高度
-->
<template>
  <div :style="[layoutStyle]" class="side-layout-component">

    <div v-if="$slots.side" class="side">
      <slot name="side" />
    </div>
    <div class="content-contain">

      <slot name="main" />

    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SideLayout',
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
    return {};
  },
  computed: {
    layoutStyle() {
      return {
        height: `calc(${this.containHeight})`
      };
    }
  },
  methods: {}
};
</script>

<style  lang="scss">

$sideWidth:250px;
.side-layout-component{
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
  .side{
    width:$sideWidth;
    margin-right: 10px;
    height: 100%;
    border:1px solid
  }
  .content-contain{
    flex: 1;
    overflow: auto;
    border-radius: 4px;
    border:1px solid
  }
}

</style>
