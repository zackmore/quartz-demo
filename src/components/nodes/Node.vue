<template>
<div class="node">

  <!-- the actual node -->
  <start-node :node="node" v-if="node.type=='start'" />
  <normal-node :node="node" v-if="node.type=='normal'" />

  <!-- the next(s) -->
  {{ nextNodes }}

  <node :node="nextNodes" v-if="!noNext" />

  <!--
  <div v-if="!noNext">
    {{ nextNodes }}
  </div>
  -->
</div>
</template>

<script>
import _ from 'lodash'
import Storage from '../../db'

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
    },

    nextNodes () {
      if (this.node.type == 'question') {
        return []
      } else {
        return Storage.get(this.node.next)
      }
    }
  },

  watch: {
    node: function (val, oldVal) {
      console.log(val)
      console.log(oldVal)
    }
  },

  components: {
    StartNode,
    NormalNode
  }
}
</script>
