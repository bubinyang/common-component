<template>
  <div id="app">

    <!-- <moor-hello-world :color="color" />-->
    <!-- <three-demo /> -->
    <!-- <three-level-city v-model="value" @chang-district="changDistrict" />

    <LineChart /> -->
    <!-- <section ref="echartRef" class="main-contain">
      <FixBoxWh>
        <LineChart />
      </FixBoxWh>

      <FixBoxWh>
        <CircularChart />
      </FixBoxWh>

      <FixBoxWh>
        <PieChartNightingale />
      </FixBoxWh>

      <FixBoxWh>
        <GagueChart />
      </FixBoxWh>
      <FixBoxWh>
        <ExportImage :el="'.main-contain'" :text-name="'测试文档'" />
      </FixBoxWh>
      <FixBoxWh>
        <SelectTree :id.sync="selectTreeId" v-model="selectTreeName" />
      </FixBoxWh>

      <FixBoxWh>
        <SmallContain :title="'标题'" />
      </FixBoxWh>

      <FixBoxWh>

        <ExpandBtn v-model="fullmodel" />

      </FixBoxWh>

    </section> -->
    <router-view />
  </div>
</template>

<script>
// import html2image from 'html2image'
// import FileSaver from 'file-saver'
import html2canvas from 'html2canvas'
// import XLSX from 'xlsx'
export default {
  name: 'App',
  data() {
    return {
      // HelloWorld
      value: '9,11,0',
      msg: 'Welcome to moor UI!',
      color: 'red',

      selectTreeId: '',
      selectTreeName: '',
      fullmodel: false

    }
  },
  // computed(){
  //   el(){
  //     return this.$refs.echartRef
  //   }
  // },

  methods: {

  }
}
</script>

<style lang="scss">
#app{
  height: 100vh;
}
.main-contain{
  overflow: hidden;
  .main-contain-box{
    width:calc(25% - 10px);
    float: left;
    background: white;
    border: 1px solid #EBEEF5;
    margin: 5px 5px;
    .main-contain-box-ab{
      padding-bottom: calc(100% - 10px);
      position: relative;
    }
    .main-cotain-content{
      position: absolute;
      left: 0;
      top:0;
      bottom: 0;
      right: 0;
    }

  }
}
</style>
