<template>
<div class="container">
  <div :class="{ 'active': showEditor }">
    <editor :dialogs="dialogs" />
  </div>
  <div :class="{ 'active': showRunner }">
    <runner :dialogs="dialogs" />
  </div>
</div>
</template>

<script>
import Editor from './Editor.vue'
import Runner from './Runner.vue'

import BaseNode from '../utils/BaseNode.js'

export default {
  data () {
    return {
      showEditor: true,
      showRunner: false,

      dialogs: []
    }
  },

  methods: {
    /*
    addNode ({ type, text, link }) {
    } 
    */
  },

  created () {
    let start = new BaseNode({ type: 'start', text: 'start', link: 'http://baidu.com' })
    this.dialogs.push(start)
  },

  components: {
    Editor,
    Runner
  }
}
</script>

<style scoped>
.container > div {
  display: none;
}

.container > div.active {
  display: block;
}
</style>
