<template>
<div class="editor">
  <h1>Editor</h1>
  {{ dialogs }}
  <hr>
  <node :node="startNode" :time="3" />
</div>
</template>

<script>
import _ from 'lodash'
import Node from './Node.vue'

export default {
  props: ['dialogs'],

  computed: {
    startNode () {
      return _.find(this.dialogs, { type: 'start' })
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
