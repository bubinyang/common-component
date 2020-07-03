<template>
  <div id="app">
    11
    <div class="moor-item">
      <label>Title:</label>
      <moor-hello-world :color="color" />
    </div>

    <div class="moor-item">
      <label>Button:</label>
      <moor-button class="moor-btn" @click="onClick">确定</moor-button>
      <moor-button class="moor-btn" bgcolor="#409eff" color="#fff" @click="onClick">确定</moor-button>
      <moor-button class="moor-btn" bgcolor="#67c23a" color="#fff" @click="onClick">成功</moor-button>
      <moor-button class="moor-btn" bgcolor="#e6a23c" color="#fff" @click="onClick">警告</moor-button>
      <moor-button class="moor-btn" bgcolor="#f56c6c" color="#fff" @click="onClick">危险</moor-button>
    </div>

    <div class="moor-item">
      <label>Select: </label>
      <moor-select
        v-model="selectValue"
        class="moor-select"
        label="label"
        value="value"
        :options="options"
      />
    </div>

    <div class="moor-item">
      <label>Input: </label>
      <moor-input
        v-model="input1"
        placeholder="请输入信息"
      />

      <moor-input
        v-model="input2"
        placeholder="请输入信息"
      />

      <moor-input
        placeholder="输入框禁用"
        :disabled="inputDisabled"
      />
    </div>

    <div class="moor-item">
      <label>Switch: </label>

      <moor-switch
        v-model="lightSwitch"
      >开关(开):</moor-switch>

      <moor-switch
        v-model="switchLight"
      >开关(关):</moor-switch>
    </div>

    <moor-button class="moor-btn" @click="handlePrint">打印选项值</moor-button>

    <three-level-city v-model="value" />
    <ThreeDemo />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // HelloWorld
      value: '9,11,0',
      msg: 'Welcome to moor UI!',
      color: 'red',
      // Select
      selectValue: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }
      ],
      // input
      input1: '',
      input2: '这是默认值',
      inputDisabled: true,
      // switch
      lightSwitch: false,
      switchLight: true
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue)
  },
  methods: {
    onClick: function(e) {
      console.log('click', e)
    },
    handlePrint() {
      console.log('selectValue', this.selectValue)
      console.log('input1:', this.input1)
      console.log('input2:', this.input2)
    }
  }
}
</script>

<style lang="scss">
.moor-select, .moor-btn, .moor-switch, .moor-input {
  margin: 10px 6px;
}
.moor-item {
  display: flex;
  align-items: center;

  label {
    width: 100px;
    display: inline-block;
  }
}
</style>
