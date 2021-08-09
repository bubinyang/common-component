<template>
  <div id="app">

    <!-- <moor-hello-world :color="color" />-->
    <!-- <three-demo /> -->
    <!-- <three-level-city v-model="value" @chang-district="changDistrict" />

    <LineChart /> -->
    <section ref="echartRef" class="main-contain">
      <!-- <FixBoxWh>
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

      </FixBoxWh> -->

      <FixBoxWh>
        点击文字出现input框,进行编辑
        <LabelInputSwitch v-model="color" type="select" :options="options" />
        <!-- type="select" :options='options'  -->
      </FixBoxWh>

      {{ dateOption }}
      <!-- <ChangeYearMonthDay
        v-model="dateOption"
        :type-list="['realtime','day','month','year']"
        :realtime="true"
        :multiple="true"
        @change="init()"
      /> -->

      <!-- <HourMinuteSecond
        v-model="timeValue"
        :is-range="true"
        @change="init()"
      /> -->

      <div class="father">
        <div class="son" />
      </div>
    </section>
    <iframe id="stageContainIframe" ref="stageContainIframe" width="500" height="500" src="/#/rotate" />

    <section class="scroll-container" @click="test">
      <div class="content">
        <span>大概大概豆腐干大概大概豆腐干大概大概豆腐干大概大概豆腐干大概大概豆腐干</span>
      </div>
    </section>

    <change-year-month-day
      v-model="dateOption"
      :multiple="false"
      :type-list="['year']"
    />

    <!-- <SelectTree :id.sync="selectTreeId" v-model="selectTreeName" /> -->
    <!-- <section ref="markedContent" /> -->
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import CascaderNode from '@/components/component/cascaderNode';
import rotate from '@/views/rotate/index.vue';
import html2canvas from 'html2canvas';
import utils from '@/utils';
import Vue from 'vue';
import moment, { months } from 'moment';
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
      fullmodel: false,
      options: [{ label: '红色', value: 'red' }, { label: '蓝色', value: 'blue' }],

      dateOption: {
        dateOther: '2020-02-02 05:40:11',
        date: '2020-02-12 04:40:11',
        type: 'realtime'
      }

    };
  },
  // computed(){
  //   el(){
  //     return this.$refs.echartRef
  //   }
  // },
  created() {
    const arr = [{ type: 'shop', momey: 223 },
      { type: 'study', momey: 341 },
      { type: 'shop', momey: 881 },
      { type: 'transfer', momey: 822 },
      { type: 'study', momey: 823 }];
    const result = utils.findMax({ origin: arr, key: 'momey', type: 'min' });
    const dpayment = utils.once((param) => {
      console.log(param);
    });
    dpayment('hehe');
    dpayment();
    const str = utils.setNumberFormat().action({ value: 900000 });

    const urlStr = 'http://ksgis.dev.dsmcase.com:90/zl/api/v1/map/common/enclosure_download?file_path=202103261630185310bced-4f0f-4b27-b228-890d4def3320.png&file_name=avatar.png,http://ksgis.dev.dsmcase.com:90/zl/api/v1/map/common/enclosure_download?file_path=2021032616302049f075cc-16b7-4c44-ae7c-eca53b8b06a2.jpg&file_name=main-bg.jpg';
    const urlList = urlStr.split(',').map(item => {
      return utils.createrUrlJson(item);
    });

    rotate.methods.set = function() {
      console.log('set');
    };
  },
  mounted() {
    console.log(this.$moment('2020-02-02 05:40:11').startOf('day').format('YYYY-MM-DD HH:mm:ss'));
    const iFrameEl = this.$refs['stageContainIframe'];
    setTimeout(() => {
      const el = window.open('https://open.weixin.qq.com/connect/qrconnect?appid=wx85f17c29f3e648bf&response_type=code&scope=snsapi_login&redirect_uri=https%3A%2F%2Fpassport.baidu.com%2Fphoenix%2Faccount%2Fafterauth%3Fmkey%3D3176f325f37bba91a1ba90876ce5ee854b26f6c753a04ca308%26tpl%3Dmn%26appid%3Dwx85f17c29f3e648bf%26traceid%3D&state=1621493368&display=page&traceid=', 'test', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + 500 + ', height=' + 500 + ', top=' + 200 + ', left=' + 200);
    // el.focus()
    }, 2000);







   

//  const allotRatio=4
//  let balance=0

// document.querySelector('.reconnect-message__text') //重连标识

// Number(document.querySelector('.balance .fit-container__content2nPGiJBm9YMsqn0juLFoTe').innerText)

//  const newestNodeList=Array.prototype.slice.call(document.querySelector('.sicbo-history .sicbo-history__item-dice').querySelectorAll('.sicbo-history__item-dice-number')) 
//  const newestList=newestNodeList.map(item=>item.innerText)

//  const rules=[
     
//  {label:'big',values:['5,5','2,5','2,2']},
//  {label:'small',values:['1,3','3,3','1,1']}

// ]

//  const findResult=rules.find(item=>{
//    return item.values.some(childitem=>newestList.join(',').some(childitem))
//  })

// if(findResult.label==='big'){
//     clickBig()
// }else{
//     clickSmall()
// }



// function clickSmall(){
//     var e = document.createEvent("MouseEvents");
//      e.initEvent("click", true, true);
//      document.querySelector(".sicbo-bet-place_small .sicbo-bet-place__multiplier-background").dispatchEvent(e);
// }

// function clickBig(){
//     var e = document.createEvent("MouseEvents");
//      e.initEvent("click", true, true);
//      document.querySelector(".sicbo-bet-place_big .sicbo-bet-place__multiplier-background").dispatchEvent(e);
// }




  },

  methods: {
   test(){
   console.log(123)
   },
    compile() {
      const Component = Vue.extend({
        methods: {
          showInfo(title) {
            console.log(title);
          }
        },
        template: `<div id="hehe-style" @click='showInfo("11")'> hehe </div>`
      });
      const markedComponent = new Component().$mount();
      const stageContainEl = this.$refs['stageContainIframe'].contentWindow.document.querySelector('#stageContain');
      stageContainEl.appendChild(markedComponent.$el);
    },
    init() {
      console.log(this.dateOption);
    }

  }
};
</script>

<style lang="scss">
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

  .father{width:500px;border:1px solid;height: 500px;}
  .son{width: auto;height: 50px;background: red;}

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
      -moz-appearance:textfield;
  }
}

.scroll-container{
  width: 250px;
  height: 500px;
  border: 1px solid;
  overflow: auto;
  .content{
    span{white-space: nowrap;}
  }
}
</style>
