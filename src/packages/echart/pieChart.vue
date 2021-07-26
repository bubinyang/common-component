<!--饼状图，南丁格尔玫瑰-->
<template>
  <div class="pieChart">

    <div ref="pieChart" class="pieChart-contain" />
  </div>
</template>
<script>
import echarts from 'echarts'
// splitLine的样式控制
export default {
  name: 'PieChartNightingale',
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
      var myChart = echarts.init(this.$refs.pieChart)
      // const that = this
      // 指定图表的配置项和数据
      var option = {
        backgroundColor: '#2c343c',
        title: {
          text: '南丁格尔玫瑰图',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },

        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            // colorLightness: [0, 1]
          }
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], // '#FBFE27','rgb(11,228,96)','#FE5050'
          data: [{
            value: 285,
            name: '黑名单查询'
          },
          {
            value: 410,
            name: '红名单查询'
          },
          {
            value: 274,
            name: '法人行政处罚'
          },
          {
            value: 235,
            name: '其它查询'
          }
          ].sort(function(a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',

          label: {
            normal: {
              formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
              rich: {
                c: {
                  color: 'rgb(241,246,104)',
                  fontSize: 20,
                  fontWeight: 'bold',
                  lineHeight: 5
                },
                b: {
                  color: 'rgb(98,137,169)',
                  fontSize: 15,
                  height: 40
                }
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgb(98,137,169)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20

            }
          },
          itemStyle: {
            normal: {
              shadowColor: 'rgba(0, 0, 0, 0.8)',
              shadowBlur: 50
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

   .pieChart{
      height: 100%;
      width:100%;
      .pieChart-contain{
        height: 100%;
        width:100%;
      }
   }
</style>
