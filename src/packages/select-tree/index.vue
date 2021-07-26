<template>
  <div class="input-tree-style">

    <!-- @current-change="deptListTreeCurrentChangeHandle" -->
    <el-popover
      ref="deptListPopover"
      v-model="deptListVisible"
      placement="bottom-start"
      trigger="click"
    >
      <el-tree
        ref="deptListTree"
        :data="originList"
        :props="{ label: 'name', children: 'children' }"
        node-key="id"
        :highlight-current="true"
        :expand-on-click-node="false"
        accordion
        @node-click="handleNodeClick"
      />
    </el-popover>
    <el-input
      v-model="showVal"
      v-popover:deptListPopover
      :readonly="true"
      :placeholder="'placeholder'"
    />

  </div>
</template>

<script>
import data from './data.js'
export default {
  name: 'SelectTree',
  model: {
    event: 'set',
    prop: 'value'
  },
  props: {
    value: {
      type: String,

      default() {
        return ''
      }
    },
    id: {
      type: String,
      default() {
        return ''
      }
    },
    origin: {
      type: String,
      default() {
        return 'departments'
      }
    }
  },
  data() {
    return {
      deptListVisible: false,
      originList: data
    }
  },

  computed: {

    showVal: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('set', v)
      }
    },
    list() {
      const obj = { departments: this.departments, structureElectric: this.structureElectric }
      return obj[this.origin]
    }
  },
  created() {

  },
  methods: {
    handleNodeClick(data) {
      this.showVal = data.name
      this.$emit('update:id', data.id)
      this.$emit('change')
      this.deptListVisible = false
    }
  }
}
</script>
