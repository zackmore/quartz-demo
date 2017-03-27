<template>
<div class="node">

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
import _ from 'lodash'
import Node from './Node.vue'

import StartNode from './StartNode.vue'
import EndNode from './EndNode.vue'
import NormalNode from './NormalNode.vue'
import QuestionNode from './QuestionNode.vue'
import AnswerNode from './AnswerNode.vue'

export default {
  name: 'node',

  props: ['node', 'nexts'],

  computed: {
    noNext () {
      return _.isEmpty(this.node.next)
    },

    nextNodes () {
      return this.node.next
    }
  },

  components: {
    StartNode,
  }
}
</script>
