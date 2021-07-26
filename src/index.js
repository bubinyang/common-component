import HelloWorld from './packages/hello-world/moor-hello-world.vue';
import ThreeLevelCity from './packages/three-level-city/index.vue';
import ThreeDemo from './packages/threeDemo/demo/index.vue';
import LineChart from './packages/echart/lineChart.vue';
import CircularChart from './packages/echart/circularChart.vue';
import PieChartNightingale from './packages/echart/PieChart.vue';
import GagueChart from './packages/echart/gagueChart.vue';
// import SelectTree from './packages/select-tree';

import HourMinuteSecond from './packages/Widget/hourMinuteSecond';
import ChangeYearMonthDay from './packages/Widget/changeYearMonthDay';
import ExpandButton from './packages/Widget/expandButton';
import LabelInputSwitch from './packages/Widget/labelInputSwitch';
import InputTree from './packages/Widget/inputTree'

// layout
import ContainLayout from './packages/Layout/ContainLayout';
import SideLayout from './packages/Layout/SideLayout';

import tools from './utils';
// import ThreeLangrunda from './packages/threeDemo/langrunda/index.vue'

const components = [
  HelloWorld,
  ThreeLevelCity,
  ThreeDemo,
  LineChart,
  CircularChart,
  PieChartNightingale,
  GagueChart,
  // SelectTree,

  HourMinuteSecond,
  ChangeYearMonthDay,
  ExpandButton,
  LabelInputSwitch,
  InputTree,

  SideLayout,
  ContainLayout
  // ThreeLangrunda
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  tools
};
