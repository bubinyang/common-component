<template>
  <div class="radarChart">
    <div ref="radarChart" class="radarChart-contain" />
  </div>
</template>
<script>
import echarts from 'echarts'
// splitLine的样式控制

export default {
  name: 'RadarChart',
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
      const dataList = [60, 73, 85, 40, 50]
      var myChart = echarts.init(this.$refs.radarChart)
      // const that = this
      // 指定图表的配置项和数据
      var option = {

        tooltip: {
          trigger: 'axis'
        },

        radar: [
          {
            indicator: [
              { text: '品牌', max: 100 },
              { text: '内容', max: 100 },
              { text: '可用性', max: 100 },
              { text: '功能', max: 100 },
              { text: '功能1', max: 100 }
            ],
            center: ['50%', '55%'],
            radius: 100,
            splitLine: {
              lineStyle: {
                color: ['#00B8E4FF'],
                width: 1
              }
            },
            splitArea: {
              show: false
            }

            // name: {
            //   rich: {
            //     a: {

            //       lineHeight: 10
            //     },
            //     b: {
            //       color: '#fff',
            //       align: 'center',
            //       backgroundColor: '#666',
            //       padding: 0,
            //       borderRadius: 4
            //     }
            //   },
            //   formatter: (a, b) => {
            //     i++;
            //     return `{a|${a}}\n{b|${dataList[i]}}`
            //   }
            // }

          }
        ],
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            areaStyle: {
              color: 'rgba(88,216,208,0.8)'
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: '#fff'
            },
            lineStyle: {
              color: 'rgba(31,211,197,1)',
              width: 3
            },
            data: [
              {
                value: dataList,
                name: '某软件',
                label: {}
              }
            ]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
      let i = -1
      myChart.setOption({
        radar: [
          {
            name: {
              rich: {
                a: {

                  lineHeight: 15
                },
                b: {
                  color: '#fff',
                  align: 'center',
                  padding: 0
                }
              },
              formatter: (a, b) => {
                i++
                return `{a|${a}}\n{b|${dataList[i]} 吨标准煤}`
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >

   .radarChart{
      height: 100%;
      width:100%;
      .radarChart-contain{
        height: 100%;
        width:100%;
      }
   }
</style>
