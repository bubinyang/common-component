<template>
  <div class="select-city">
    <el-select v-model="provinceVal" filterable placeholder="省" @change="showHandle('province')">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <el-select v-model="cityVal" filterable :disabled="provinceVal===''" placeholder="市" @change="showHandle('city')">
      <el-option
        v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <el-select v-model="districtVal" filterable :disabled="cityVal===''" placeholder="区" @change="showHandle('district')">
      <el-option
        v-for="item in districtList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

  </div>
</template>

<script>
/*
*v-model的值'9,11,0' 代表江苏，淮安，清河区
*
*/
import citys from './data'
export default {
  name: 'ThreeLevelCity',
  components: {

  },
  model: {
    event: 'change',
    prop: 'data'
  },

  props: {

    data: {
      type: String,
      default: ''
    }

  },
  data() {
    return {
      value: '',
      provinceVALUE: '',
      citysVALUE: '',
      districtVALUE: '',
      province: citys
    }
  },
  computed: {
    provinceVal: {
      get() {
        return this.data.split(',')[0] !== '' ? Number(this.data.split(',')[0]) : ''
      },
      set(v) {
        this.provinceVALUE = v
      }

    },
    cityVal: {

      get() {
        return this.data.split(',')[1] ? Number(this.data.split(',')[1]) : ''
      },
      set(v) {
        this.citysVALUE = v
      }

    },
    districtVal: {

      get() {
        return this.data.split(',')[2] ? Number(this.data.split(',')[2]) : ''
      },
      set(v) {
        this.districtVALUE = v
      }

    },

    cityList() {
      const filterItem = citys.filter(item => item.value === this.provinceVal)
      const item = filterItem[0] ? filterItem[0].children : []

      return item
    },
    districtList() {
      const filterItem = this.cityList.filter(item => item.value === this.cityVal)
      return filterItem[0] ? filterItem[0].children : []
    }
  },

  created() {

  },
  mounted() {

  },
  methods: {
    showHandle(type) {
      this.typeAction().selectNode(type)
      const arr = [this.provinceVALUE, this.citysVALUE, this.districtVALUE]
      this.$emit('change', arr.join(','))// 双向绑定emit
    },
    typeAction() {
      const actionTypes = {
        province: () => { this.cityVal = ''; this.districtVal = ''; this.$emit('chang-province', this.provinceVALUE) }, // 切换省份回调函数
        city: () => { this.$emit('chang-city', this.citysVALUE) }, // 切换城市回调函数
        district: () => { this.$emit('chang-district', this.districtVALUE) }// 切换行政区回调函数
      }
      return {
        selectNode(key) {
          return actionTypes[key] ? actionTypes[key]() : false
        }
      }
    }
  }
}
</script>

<style lang="scss">
.select-city{
    display: inline-block;
   .el-select{width:120px;}
}

</style>
