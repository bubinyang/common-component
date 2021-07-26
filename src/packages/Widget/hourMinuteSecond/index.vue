<template>
  <section class="hourMinSecond-style">
    <el-tooltip class="item" effect="dark" content="小时" placement="top">
      <el-select v-model="hourValue" placeholder="时" @change="changeDate">
        <el-option
          v-for="item in hourList"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </el-tooltip>

    <el-tooltip class="item" effect="dark" content="分钟" placement="top">
      <el-select v-model="minutesVal" placeholder="分" @change="changeDate">
        <el-option
          v-for="item in minutes"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </el-tooltip>

    <template v-if="isRange">
      <label class="linkSign">-</label>

      <el-tooltip class="item" effect="dark" content="小时" placement="top">
        <el-select v-model="hourValueEnd" placeholder="时" @change="changeDate">
          <el-option
            v-for="item in hourList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" content="分钟" placement="top">
        <el-select v-model="minutesValEnd" placeholder="分" @change="changeDate">
          <el-option
            v-for="item in minutes"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-tooltip>
    </template>

  </section>
</template>

<script>
const typeObj = { 0: 'HH', 1: 'mm' };
export default {
  name: 'HourMinuteSecond',
  model: {
    event: 'set',
    prop: 'value'
  },

  props: {
    value: {
      type: [Date, Array, String],
      default() {
        return new Date();
      }
    },
    isRange: {
      type: Boolean,
      default() {
        return false;
      }
    },
    intervalTime: {
      type: Number,
      default() {
        return 5;
      }
    }

  },
  data() {
    return {
      hourList: [],
      minutes: [],
      dateValue: {}
      // hourValue: '',
      // minutesVal: '',
    };
  },

  computed: {

    hourValue: {
      get() {
        const dateValKey = this.computePublic();
        return dateValKey['HH'];
      },
      set(v) {
        if (!this.isRange) {
          const list = [v, this.minutesVal];
          this.$emit('set', `${list.join(':')}:00`);
        } else {
          this.computeSet({ v, groupIndex: 0, itemIndex: 0 });
        }
      }
    },

    minutesVal: {
      get() {
        const dateValKey = this.computePublic();
        return dateValKey['mm'];
      },
      set(v) {
        if (!this.isRange) {
          const list = [this.hourValue, v];
          this.$emit('set', `${list.join(':')}:00`);
        } else {
          this.computeSet({ v, groupIndex: 0, itemIndex: 1 });
        }
      }
    },

    hourValueEnd: {
      get() {
        const dateValKey = this.computePublic(1);
        return dateValKey['HH'];
      },
      set(v) {
        if (!this.isRange) {
          const list = [v, this.minutesValEnd];
          this.$emit('set', `${list.join(':')}:00`);
        } else {
          this.computeSet({ v, groupIndex: 1, itemIndex: 0 });
        }
      }
    },

    minutesValEnd: {
      get() {
        const dateValKey = this.computePublic(1);
        return dateValKey['mm'];
      },
      set(v) {
        if (!this.isRange) {
          const list = [this.hourValueEnd, v];
          this.$emit('set', `${list.join(':')}:00`);
        } else {
          this.computeSet({ v, groupIndex: 1, itemIndex: 1 });
        }
      }
    }

  },
  mounted() {
    this.getHours();
    this.getMinutes();
  },
  methods: {
    getHours() {
      let i = 0;
      while (i < 24) {
        this.hourList.push(i < 10 ? `0${i}` : i);
        i++;
      }
    },
    getMinutes() {
      let i = 0;
      while (i < 60) {
        this.minutes.push(i < 10 ? `0${i}` : i);
        i += this.intervalTime;
      }
    },
    // 将转入的数值转成json，有数值类型key
    doOrigin(val = this.value) {
      const dateValList = val.split(':');
      return dateValList.reduce((total, item, index) => {
        const key = typeObj[index];
        total[key] = dateValList[index];
        return total;
      }, {});
    },
    // compute set情况下的公共方法
    computeSet({ v, groupIndex, itemIndex }) {
      if (!this.isRange) {
        const list = [v, this.minutesVal];
        this.$emit('set', `${list.join(':')}:00`);
      } else {
        const list = [[this.hourValue, this.minutesVal], [this.hourValueEnd, this.minutesValEnd]];
        list[groupIndex][itemIndex] = v;
        const emitVal = list.map(item => {
          return `${item.join(':')}:00`;
        });
        this.$emit('set', emitVal);
      }
    },
    changeDate() {
      this.$emit('change');
    },
    computePublic(index = 0) {
      if (!this.isRange) {
        return this.doOrigin();
      } else {
        return this.doOrigin(this.value[index]);
      }
    }
  }
};
</script>

<style lang="scss">
.hourMinSecond-style{
    display: flex;
    align-items: center;
    .linkSign{margin:0 2.5px;
     &+.el-select{margin-left: 0;}
    }
  .el-select{width:70px;
   margin-left: 5px;
  }
}
</style>
