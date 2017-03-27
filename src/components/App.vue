<template>
<div class="container">
  <div :class="{ 'active': showEditor }">
    <editor :startNodeId="startNodeId" />
  </div>
  <!--
  <div :class="{ 'active': showRunner }">
    <runner />
  </div>
  -->
</div>
</template>

<script>
import { save } from '../db'
import Editor from './Editor.vue'
import Runner from './Runner.vue'
import BaseNode from '../utils/BaseNode.js'

export default {
  data () {
    return {
      showEditor: true,
      showRunner: false,
      startNodeId: null
    }
  },

  created () {
    let start = new BaseNode({ type: 'start', text: 'start', link: 'http://baidu.com' })
    this.startNodeId = start.id
    save(start.id, start)
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
