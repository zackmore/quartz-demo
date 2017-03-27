<template>
<div class="node normal">
  normal node {{ node.id }}

  <dl>
    <dt>text</dt>
    <dd><input type="text" v-model="node.text"></dd>

    <dt>link</dt>
    <dd><input type="text" v-model="node.link"></dd>
  </dl>

  <br>

  <add-next :follow="node" v-if="noNext"></add-next>
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

  components: {
    AddNext
  },
}
</script>
