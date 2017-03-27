<template>
<div class="node-holder">
  <!--
  {{ time }}
  <start-node :node="node" v-if="node.type=='start'" />
  <hr>
  -->

  {{ time }}
  <br>
  {{ node }}

  <node-holder :node="node" :time="thistime" v-if="time > 0" />
</div>
</template>

<script>
import NodeHolder from './NodeHolder.vue'

import StartNode from './StartNode.vue'
import EndNode from './EndNode.vue'
import NormalNode from './NormalNode.vue'
import QuestionNode from './QuestionNode.vue'
import AnswerNode from './AnswerNode.vue'

export default {
  name: 'node',

  props: ['node', 'time'],

  computed: {
    thistime () {
      return this.time - 1
    }
  },

  components: {
    NodeHolder,
    StartNode,
    EndNode,
    NormalNode,
    QuestionNode,
    AnswerNode
  }
}
</script>
