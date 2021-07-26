/*
 * @Descripttion:
 * @version:
 * @Author: BBY
 * @Date: 2020-10-19 11:32:49
 * @LastEditTime: 2020-12-10 13:32:45
 */
import FixBoxWh from './layout/fix-box-wh';// 布局
import SmallContain from './layout/smallContain';

import ExportImage from './component/exportImage';// 导出图片
// import ExpandButton from './component/expandButton';// 全屏按钮
import TreeNode from './component/treeNode';
import CascaderNode from './component/cascaderNode';
// import LabelInputSwitch from './component/labelInputSwitch';
// import ChangeYearMonthDay from './component/changeYearMonthDay';
// import HourMinSecond from './component/hourMinuteSecond';

import Editor from './component/editor';
const components = [
  FixBoxWh,
  ExportImage,
  SmallContain,
  TreeNode,
  CascaderNode,
  // LabelInputSwitch,
  Editor
  // ChangeYearMonthDay,
  // HourMinSecond
  // ThreeLangrunda
];

const install = {
  install: function(Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key]);
    });
  }
};

export default install;

