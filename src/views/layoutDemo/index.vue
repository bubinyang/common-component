<template>
  <div class="layoutDemo">
    <SmallContain :title="'滚动隐藏滚动条'">
      <div class="scroll-contain">
        <div class="scroll-style">
          <div class="content">
            <ul><li v-for="(item,key) in 50" :key="key">通过结构类型组id获取父级需要的参数</li></ul>
          </div>
        </div>
      </div>
    </SmallContain>

  </div>
</template>

<script>
export default {
  name: 'LayoutDemo'
}
</script>
<style lang="scss">
.layoutDemo{
  min-height: 100vh;
  padding: 30px;
  background: #f1f4f5;

  .scroll-contain{
    width: 230px;
    overflow: hidden;
    height:100%;
  }
  .scroll-style{
    // width: 250px;
    // overflow-x: hidden;
    // height:200px;
    // overflow-y: auto;
    position: relative;
    z-index: 1;
    width: 250px;
    height: 300px;
    overflow-x: hidden;

    .content{
  height: 2000px;
    border: 1px solid;
    width: 230px;
    border-right: 0;

    }
  }
  // background:#f1f4f5
}

</style>
