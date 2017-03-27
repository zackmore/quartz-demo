<template>
<div class="node">
  {{ node }}

  <!-- the actual node -->
  <start-node :node="node" v-if="node.type=='start'" />

  <!-- the next(s) -->
  <!--
  <node :node="node" :time="thistime" v-if="time > 1" />
  -->
  <div v-if="!noNext">
    {{ nextNodes }}
  </div>


</div>
</template>

<script>
import Node from './Node.vue'

import StartNode from './nodes/StartNode.vue'
import EndNode from './nodes/EndNode.vue'
import NormalNode from './nodes/NormalNode.vue'
import QuestionNode from './nodes/QuestionNode.vue'
import AnswerNode from './nodes/AnswerNode.vue'

export default {
  name: 'node',

  props: ['node', 'nexts'],

  computed: {
    noNext () {
      return _.isEmpty(this.node.next)
    },

    nextNodes () {
      if (!_.isEmpty(this.node.next)) {
        return this.node.next
      }
    }
  },

  components: {
    StartNode,
  },
}
</script>
