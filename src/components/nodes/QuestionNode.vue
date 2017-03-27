<template>
<div class="node question">
  question node {{ node.id }}

  <dl>
    <dt>text</dt>
    <dd><input type="text" v-model="node.text"></dd>

    <dt>link</dt>
    <dd><input type="text" v-model="node.link"></dd>
  </dl>

  <br>

  <add-answers :following="node" />
</div>
</template>

<script>
import _ from 'lodash'
import AddAnswers from './AddAnswers.vue'

export default {
  props: ['node'],

  components: {
    AddAnswers
  },
}
</script>
