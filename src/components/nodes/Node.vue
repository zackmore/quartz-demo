<template>
<div class="node">
  <!-- the actual node -->
  <start-node :node="node" v-if="node.type=='start'" />
  <normal-node :node="node" v-if="node.type=='normal'" />

  <end-node :node="node" v-if="node.type=='end'" />


  <!-- the next(s) -->
  <node :nodeId="nextNodes" v-if="!noNext" />

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

    /*
    nextNodes () {
      if (this.node.type == 'question') {
        return []
      } else {
        return Storage.get(this.node.next)
      }
    }
    */
  },

  created () {
    this.node = _.find(this.nodes, { id: this.nodeId })
  },

  components: {
    StartNode,
    NormalNode,
    EndNode
  }
}
</script>
