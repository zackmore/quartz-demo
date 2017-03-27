<template>
<div class="editor">
  <h1>Editor</h1>
  {{ allNodes }}
  <hr>
  <node :nodeId="startNodeId" />
</div>
</template>

<script>
import Storage from '../db'
import Node from './nodes/Node.vue'

export default {
  computed: {
    allNodes () {
      return this.$store.getters.nodes
    },

    startNodeId () {
      return this.$store.getters.startNode.id
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
