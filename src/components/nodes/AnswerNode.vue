<template>
<div class="node answer">
  anser node {{ node.id }}

  <dl>
    <dt>text</dt>
    <dd><input type="text" v-model="node.text"></dd>

    <dt>link</dt>
    <dd><input type="text" v-model="node.link"></dd>
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

  components: {
    AddNext
  },
}
</script>
