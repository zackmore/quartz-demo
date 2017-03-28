<template>
<div class="node">
  <!-- the actual node -->
  <start-node :node="node" v-if="node.type=='start'" />
  <normal-node :node="node" v-if="node.type=='normal'" />
  <question-node :node="node" v-if="node.type=='question'" />
  <answer-node :node="node" v-if="node.type=='answer'" />
  <end-node :node="node" v-if="node.type=='end'" />


  <!-- the next(s) -->

  <div class="answers-list grid" v-if="answersList">
    <node class="col" :nodeId="id" :key="id" v-for="id in nextNodes" v-if="!noNext"></node>
  </div>
  <div v-else>
    <node :nodeId="nextNodes" v-if="!noNext" />
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

  props: ['nodeId'],

  data () {
    return {
      node: null
    }
  },

  computed: {
    nodes () {
      return this.$store.getters.nodes
    },

    noNext () {
      return _.isEmpty(this.node.next)
    },

    nextNodes () {
      return this.node.next
    },

    answersList () {
      return _.isArray(this.node.next)
    }
  },

  created () {
    this.node = _.find(this.nodes, { id: this.nodeId })
  },

  components: {
    StartNode,
    NormalNode,
    QuestionNode,
    AnswerNode,
    EndNode
  }
}
</script>
