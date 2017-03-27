<template>
<div class="container">
  <div :class="{ 'active': showEditor }">
    <editor />
  </div>

  <!--
  <div :class="{ 'active': showRunner }">
    <runner />
  </div>
  -->
</div>
</template>

<script>
import Storage from '../db'
import Editor from './Editor.vue'
import Runner from './Runner.vue'
import BaseNode from '../utils/BaseNode.js'

export default {
  data () {
    return {
      showEditor: true,
      showRunner: false,
    }
  },

  created () {
    let start = new BaseNode({ type: 'start', text: 'start', link: 'http://baidu.com' })
    this.$store.dispatch('CREATE_NODE', { node: start })
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
