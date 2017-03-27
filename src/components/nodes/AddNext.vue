<template>
<div class="node-next">

{{ follow }}

<fieldset>
  <div v-if="!show">
    <div v-if="follow.type != 'question'">
      <button @click="changeShow('normal')">Add Normal</button>
      <button @click="changeShow('question')">Add Question</button>
      <button @click="changeShow('end')">Add End</button>
    </div>
    <div v-else>
      <button @click="changeShow('answer')">Add Answer(s)</button>
    </div>
  </div>

  <div v-if="show == 'normal'">Normal</div>

  <div v-if="show == 'question'">Question</div>

  <div v-if="show == 'answer'">Answer(s)</div>

  <div v-if="show == 'end'">End</div>
</fieldset>


</div>
</template>

<script>
export default {
  props: ['follow'],

  data () {
    return {
      show: null
    }
  },

  methods: {
    changeShow (type) {
      this.show = type
    }
  }
}
</script>

<style scoped>
.new-type {
  display: none;
}
</style>
