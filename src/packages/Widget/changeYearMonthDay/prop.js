export default {
  typeList: {
    type: Array,
    default() {
      return ['realtime', 'day', 'month', 'year'];
    },
    state: '显示实时年月日几种日期选择器'

  },
  multiple: {
    type: Boolean,
    default() {
      return false;
    },
    state: '是否为时间范围'
  },

  dateOption: {
    type: Object,
    default() {
      return {};
    },
    state: 'v-model辅助props'
  },

  increase: {
    type: Boolean,
    default() {
      return false;
    },
    state: '两个时间控件是否增序'
  },

  intervalTimeValue: {
    type: Object,
    default() {
      return {
        realtime: 1,
        day: 1,
        month: 1,
        year: 1
      };
    },
    state: '默认时间范围差'
  },

  titleList: {
    type: Array,
    default() {
      return [];
    },
    state: '不用在时间范围的情况下，时间控件前面设置的标题,[开始,结束]'
  },

  futureTime: {
    type: Boolean,
    default() {
      return false;
    },
    state: '是否可以选择未来时间'
  }

};
