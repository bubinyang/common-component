<!--单个圆环-->
<template>
  <div class="lineChart">
    <div ref="lineChart" class="lineChart-contain" />
  </div>
</template>
<script>
import echarts from 'echarts'
// splitLine的样式控制
// const splitNumber = 5
// const splitColorIII = '#F1A556FF'
// const splitColorII = '#1079F3FF'
// const splitColorNormal = []
// for (let i = 0; i < splitNumber; i++) { splitColorNormal.push('#284282') }
var getvalue = [88]
export default {
  name: 'CircularChart',
  props: {
    bg: {
      type: Object,
      default: () => { return {} }
    }
  },
  created() {

  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init() {
      var myChart = echarts.init(this.$refs.lineChart)
      // const that = this
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: getvalue + '分',
          textStyle: {
            color: '#28BCFE',
            fontSize: 40
          },
          subtext: '综合得分',
          subtextStyle: {
            color: '#666666',
            fontSize: 30
          },
          itemGap: 20,
          left: 'center',
          top: '43%'
        },
        tooltip: {
          formatter: function(params) {
            return '<span style="color: #fff;">综合得分：' + getvalue + '分</span>'
          }
        },
        angleAxis: {
          max: 100,
          clockwise: true, // 逆时针
          // 隐藏刻度线
          show: false
        },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false

          },
          axisTick: {
            show: false
          }
        },
        polar: {
          center: ['50%', '50%'],
          radius: '100%' // 图形大小
        },
        series: [{
          type: 'bar',
          data: getvalue,
          showBackground: true,
          backgroundStyle: {
            color: '#BDEBFF'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 30,
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#25BFFF'
              }, {
                offset: 1,
                color: '#5284DE'
              }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >

   .lineChart{
      height: 100%;
      width:100%;
      .lineChart-contain{
        height: 100%;
        width:100%;
      }
   }
</style>
