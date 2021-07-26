<template>
  <div class="barChart">
  <div ref="barChart" class="barChart-contain"/>
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
  name: 'BarChart',
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      var myChart = echarts.init(this.$refs.barChart)
      const that = this
      // 指定图表的配置项和数据
      var option = {
        color: that.color,
        tooltip: {},
        legend: {
          data: ['销量'],
          textStyle: {
            color: '#FFFFFF'
          }
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
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
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >

   .barChart{
      height: 100%;
      width:100%;
      .barChart-contain{
        height: 100%;
        width:100%;
      }
   }
</style>
