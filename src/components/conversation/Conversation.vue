<template>
<div class="node-runner">
  <words :node="node" :key="node.id" v-for="node in nodeString" v-on:gonext="goNext" />
</div>
</template>

<script>
import _ from 'lodash'
import Words from './Words.vue'

export default {
  props: ['startNodeId'],

  data () {
    return {
      currentNode: null,
      nodeString: []
    }
  },

  computed: {
    nodes () {
      return this.$store.getters.nodes
    },

    startNode () {
      return this.$store.getters.startNode
    }
  },

  created () {
    this.currentNode = this.startNode
    this.nodeString.push(this.currentNode)
  },

  methods: {
    goNext () {
      let nextId = this.currentNode.next
      console.log(nextId)

      if (_.isUndefined(nextId)) {
        // To the end
      } else if (_.isString(nextId)) {
        // normal node
        let nextNode = _.find(this.nodes, { id: nextId })
        this.currentNode = nextNode
        this.nodeString.push(nextNode)
      } else if (_.isArray(nextId)) {
        // answer nodes
      }
    }
  },

  components: {
    Words
  }
}
</script>

<style>
.node-runner {
  border: 1px solid red;
}
</style>
