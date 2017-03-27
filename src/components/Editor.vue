<template>
<div class="editor">
  <h1>Editor</h1>
  <hr>
  <node :node="startNode" />
</div>
</template>

<script>
import Storage from '../db'
import Node from './nodes/Node.vue'

export default {
  computed: {
    startNode () {
      return this.$store.getters.startNode
    }
  },

  components: {
    Node
  }
}
</script>

<style>
.editor {}

.editor .node-holder {
  border: 1px solid red;
}
</style>
