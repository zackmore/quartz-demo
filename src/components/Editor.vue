<template>
<div class="editor">
  <h1>Editor</h1>
  {{ startNodeId }}
  <hr>
  <node :node="startNode" />
</div>
</template>

<script>
import { get } from '../db'
import Node from './Node.vue'

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
    this.startNode = get(this.startNodeId)
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
