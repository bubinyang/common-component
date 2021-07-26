<template>
  <section id="stageContain" class="edit-room-style">
    <div class="edit-room-top">
      <div class="html-contain">
        <Editor
          :language="'html'"
          :codes="htmlCodes"
          @onCodeChange="htmlOnCodeChange"
          @emitVal="getEditValue"
        />
      </div>

      <div class="css-contain">
        <Editor
          :language="'css'"
          :codes="cssCodes"
          @onCodeChange="cssOnCodeChange"
        />
      </div>

      <div class="javascript-contain">
        <Editor
          :language="'javascript'"
          :codes="javascriptCodes"
          @onCodeChange="javascriptCodeChange"
          @emitVal="getEditValue"
        />
      </div>
    </div>

    <div
      v-loading="iframeLoading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      class="edit-room-bottom"
    >
      <!-- <iframe ref="stageContainIframe" name="editIframe" class="stageContainIframe" src="/#/test" /> -->
      <iframe
        ref="stageContainIframe"
        name="editIframe"
        class="stageContainIframe"
        src="/#/editIframe"
      />
    </div>

  </section>
  <!-- <section class="rotate-contain" @click="set">
     旋转
     <div ref="box" class="box"></div>
  </section> -->
</template>

<script>
import { strToJson } from '@/utils'
import Vue from 'vue'
const languages = {
  html: 'htmlCodes',
  css: 'cssCodes',
  javascript: 'javascriptCodes'
}

export default {
  name: 'Home',

  data() {
    return {
      htmlCodes: `<section><div id="hehe-style" @click="showInfo('11')"> hehe </div>
                  <el-button type="primary">主要按钮</el-button>
                  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                  </section>
                  `,
      javascriptCodes: `{
        data:function(){
           return {
             value: "red",
             options: [{ label: "红色", value:"red" }, { label: "蓝色", value: "blue" }]
           }
        },
        methods: {
          showInfo(title) {
            console.log(this.color,this.options)
          }
        },
      }`,
      cssCodes: '',
      iFrameEl: '',
      iframeLoading: false
    }
  },
  created() {

  },
  mounted() {
    // eslint-disable-next-line no-eval

    // const rect = this.$refs.box.getBoundingClientRect()
    // const centerX = rect.left + rect.width / 2
    // const centerY = rect.top + rect.height / 2
    // const that = this
    // document.addEventListener('mousemove', function(e) {
    //   // 算出角度的公式
    //   const antn = Math.atan2(e.clientY - centerY, e.clientX - centerX) / (Math.PI / 180)
    //   that.$refs.box.style.transform = `rotate(${antn}deg)`
    // })

    this.iFrameEl = this.$refs['stageContainIframe']
    this.iFrameEl.onload = () => {
      this.compile()
    }
  },
  methods: {
    htmlOnCodeChange() {},
    cssOnCodeChange() {},
    javascriptCodeChange() {},

    getEditValue(val) {
      const { language, editValue } = val
      this[languages[language]] = editValue
      this.iFrameEl.contentWindow.location.reload()
      this.iFrameEl.onload = () => {
        this.compile()
      }
    },

    compile() {
      const jscode = this.javascriptCodes.replace(/([\n\r]+)/g, '')
      const extendParam = {
        obj: this.javascriptCodes,
        template: this.htmlCodes
      }
      this.iFrameEl.contentWindow.postMessage(extendParam, '*')
    }

  }
}
</script>
<style lang="scss">
.edit-room-style{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .edit-room-top{
    display: flex;
    flex:1;
   &>div{flex:1}
  }
  .edit-room-bottom{
    flex:1
  }
  .stageContainIframe{width: 100%;height: 100%;}

}
.rotate-contain{
    .box{width:200px;height: 200px;border:1px solid;margin: 0 auto;}
}
</style>
