<template>
<div class="node start">
  start node 
  <br>
  {{ node }}

  <dl>
    <dt>text</dt>
    <dd><input type="text" v-model="node.text"></dd>
  </dl>
  <br>
  
  <add-next :following="node" v-if="noNext" />
</div>
</template>

<script>
import _ from 'lodash'
import AddNext from './AddNext.vue'

export default {
  props: ['node'],

  computed: {
    noNext () {
      return _.isEmpty(this.node.next)
    }
  },

  created () {
    console.log(this.node)
  },

  watch: {
    'node': function (val, oldVal) {
      console.log(val)
    }
  },

  components: {
    AddNext
  },
}
</script>
