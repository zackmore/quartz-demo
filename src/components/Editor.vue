<template>
<div class="editor">
  <h1>Editor</h1>
  {{ startNodeId }}
  <hr>
  <node :node="startNode" />
</div>
</template>

<script>
import Storage from '../db'
import Node from './nodes/Node.vue'

export default {
  props: ['startNodeId'],

  data () {
    return {
      startNode: {
        id: null,
        type: null,
        next: null
      }
    }
  },

  created () {
    this.startNode = Storage.get(this.startNodeId)
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
