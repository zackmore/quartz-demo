<template>
<div class="node start">
start node
<br>
<br>
{{ node }}
<dl>
  <dt>text</dt>
  <dd><input type="text" v-model="node.text"></dd>
</dl>
<br>
<add-next v-if="noNext" />
</div>
</template>

<script>
import _ from 'lodash'
import AddNext from './AddNext.vue'
import BaseNodeMixins from '../../mixins/BaseNode.js'

export default {
  mixins: [BaseNodeMixins],

  data () {
    return {
      node: {
        id: null,
        type: 'start',
        text: '',
        next: null
      }
    }
  },

  computed: {
    noNext () {
      return _.isEmpty(this.node.next)
    }
  },

  created () {
    console.log(this.node)
    this.node.id = this.uuid()
  },

  components: {
    AddNext
  }
}
</script>
