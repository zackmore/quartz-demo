<template>
<div class="container">
  <button @click="run" v-if="showEditor">Run</button>

  <div :class="{ 'active': showEditor }">
    <editor />
  </div>

  <div :class="{ 'active': showRunner }">
    <runner />
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

  <div style="display: block">
    <button @click="generateJSON">Generate Data</button>
  </div>
</div>
</template>

<script>
import Storage from '../db'
import Editor from './Editor.vue'
import Runner from './Runner.vue'
import StartNode from '../utils/StartNode.js'

export default {
  data () {
    return {
      showEditor: true,
      showRunner: false,
    }
  },

  computed: {
    nodes () {
      return this.$store.getters.nodes
    }
  },

  created () {
    let start = new StartNode({ text: 'start', link: 'http://baidu.com' })
    this.$store.dispatch('CREATE_NODE', { node: start })
  },

  methods: {
    generateJSON () {
      console.log(this.nodes)
    },

    run () {
      this.showEditor = false
      this.showRunner = true
    }
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
