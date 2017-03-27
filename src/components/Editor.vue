<template>
<div class="editor">
  <h1>Editor</h1>
  <hr>
  <div v-for="node in dialogs">
    <start-node :node="node" v-if="node.type=='start'" />
  </div>
</div>
</template>

<script>
import StartNode from './nodes/StartNode.vue'
import EndNode from './nodes/EndNode.vue'
import NormalNode from './nodes/NormalNode.vue'
import QuestionNode from './nodes/QuestionNode.vue'
import AnswerNode from './nodes/AnswerNode.vue'

export default {
  props: ['dialogs'],

  components: {
    StartNode,
    EndNode,
    NormalNode,
    QuestionNode,
    AnswerNode
  }
}
</script>

<style>
.editor {}

.editor .node {
  border: 1px solid red;
}
</style>
