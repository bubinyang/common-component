<template>
  <div class="oneCirclePieChart">
  <div ref="oneCirclePieChart" class="oneCirclePieChart-contain"/>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  name: 'OneCirclePieChart',
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
      var myChart = echarts.init(this.$refs.oneCirclePieChart)

      // 指定图表的配置项和数据
      var option = {
        title: {
          textStyle: {
            fontSize: 16,
            color: '#999',
            lineHeight: 20
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          textAlign: 'center',
          left: '39.8%',
          top: '45%'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: '10%',
          top: 'center',
          itemGap: 10,
          selectedMode: false,
          icon: 'pin',
          data: ['南京a', '南京b', '南京c', '南京d', '南京e'],
          textStyle: {
            color: '#77899c',
            rich: {
              uname: {
                width: 100
              },
              unum: {
                color: '#4ed139',
                width: 40,
                align: 'right'
              }
            }
          },
          formatter (name) {
            return `${name}`
          }
        },
        color: ['#B7D9FB ', '#89C0FA', '#61A4E8', '#3389E1', '#1172D5'],
        // ['#47A2FF ', '#53C8D1', '#59CB74', '#FBD444', '#7F6AAD', '#585247']
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: [45, 90],
            center: ['50%', '50%'],
            label: {
              show: true,
              position: 'inside',

              textShadowColor: 'rgba(0,0,0,0.5)',
              textShadowOffsetY: 0.5
            },
            labelLine: {
              show: false
            },
            // itemStyle: {
            //   borderWidth: 3,
            //   borderColor: '#fff'
            // },
            data: [
              { name: '南京a', value: 100 },
              { name: '南京b', value: 100 },
              { name: '南京c', value: 100 },
              { name: '南京d', value: 100 },
              { name: '南京e', value: 100 }
            ]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >

   .oneCirclePieChart{
      height: 100%;
      width:100%;
      .oneCirclePieChart-contain{
        height: 100%;
        width:100%;
      }
   }
</style>
