<template>
  <div class="lineChart">
    <div ref="lineChart" class="lineChart-contain" />
  </div>
</template>
<script>
import echarts from 'echarts'
// splitLine的样式控制
const splitNumber = 5
const splitColorIII = '#F1A556FF'
const splitColorII = '#1079F3FF'
const splitColorNormal = []
for (let i = 0; i < splitNumber; i++) { splitColorNormal.push('#284282') }

export default {
  name: 'LineChart',
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
        legend: {
          data: ['Mon'],
          textStyle: {
            color: '#FFFFFF'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {

            textStyle: {
              color: '#FFFFFF',
              fontStyle: 'normal'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#284282'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#FFFFFF',
              fontStyle: 'normal'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#284282'
            }
          },
          axisTick: {
            show: false
          },

          splitLine: {
            lineStyle: {
              color: [splitColorIII, splitColorII],
              type: 'dashed'
            }
          }
        },
        series: [{
          name: 'Mon',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: 'rgba(88,216,208,0.8)'
            }, {
              offset: 1,
              color: 'rgba(88,216,208,0.8)'
            }])
          },
          lineStyle: {
            color: 'rgba(31,211,197,1)',
            width: 3
          },
          itemStyle: {
            normal: { color: 'rgba(31,211,197,1)' }
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
