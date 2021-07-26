<template>
  <section class="zxdemo-style">
    <div>
      <label>A</label>
      <el-radio-group v-model="radioFrist">
        <el-radio label="z">庄稼</el-radio>
        <el-radio label="x">夕阳</el-radio>
      </el-radio-group>
      <div class="input-style">
        <!-- <el-input type="number" @change="changeFrist" v-model.number="fristZ" placeholder="庄稼"></el-input>
           <el-input  type="number"  @change="changeFrist" v-model.number="fristX" placeholder="夕阳"></el-input> -->

        <el-select v-model="fristZ" placeholder="请选择" @change="changeFrist">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-select v-model="fristX" placeholder="请选择" @change="changeFrist">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        {{ resultFrist }}

      </div>

    </div>

    <div>
      <label>B</label>
      <el-radio-group v-model="radioSecond">
        <el-radio label="z">庄稼</el-radio>
        <el-radio label="x">夕阳</el-radio>
      </el-radio-group>
      <div class="input-style">
        <!-- <el-input  type="number" @change="changeSecond" v-model.number="secondZ" placeholder="庄稼"></el-input>
            <el-input  type="number" @change="changeSecond"  v-model.number="secondX" placeholder="夕阳"></el-input> -->

        <el-select v-model="secondZ" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-select v-model="secondX" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        {{ moneyResult }}
      </div>
    </div>

    <el-button type="primary" @click="refresh">刷新</el-button>
  </section>

</template>

<script>
export default {
  data() {
    return {
      radioFrist: 'z',
      radioSecond: 'z',

      fristZ: '0',
      fristX: '0',
      secondZ: '0',
      secondX: '0',
      options: [{
        value: '0',
        label: '0'
      }, {
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '5',
        label: '5'
      },
      {
        value: '6',
        label: '6'
      },
      {
        value: '7',
        label: '7'
      }, {
        value: '8',
        label: '8'
      },
      {
        value: '9',
        label: '9'
      }
      ],
      resultFrist: '', // 第一个结果
      moneyResult: '' // 推荐结果
    }
  },
  computed: {

  },

  methods: {
    refresh() {
      this.radioFrist = 'z'
      this.radioSecond = 'z'
      this.fristZ = '0'
      this.fristX = '0',
      this.secondZ = '0'
      this.secondX = '0'
      this.resultFrist = ''
    },
    changeFrist() {
      if (this.fristZ > this.fristX) {
        this.resultFrist = 'z'
      } else {
        this.resultFrist = 'x'
      }
      // 如果第一预判之等于结果，那么第二个值为相反的
      if (this.radioFrist === this.resultFrist) {
        this.moneyResult = ['z', 'x'].find(item => item !== this.radioSecond)
      } else {
        this.moneyResult = ['z', 'x'].find(item => item === this.radioSecond)
      }
    },
    changeSecond() {

    }
  }
}
</script>
<style lang="scss">
.zxdemo-style{
    width:1000px;
    display: flex;
    &>div{flex:1;
    padding:50px;
    box-shadow: 0px 5px 5px #888888;
        border-radius: 4px;
    border: 1px solid #ebeef5;

     &:first-child{margin-right: 10px;}
    }
    .input-style{display: flex;margin-top: 30px;}
}
</style>
