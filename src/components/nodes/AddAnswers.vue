<template>
<div class="node-next-answers">
<fieldset v-if="notsaved">
  <!-- number -->
  <div v-if="!show">
    <input type="number" v-model="number"> answer(s)
    <button @click="changeNumber">Add</button>
  </div>

  <!-- forms -->
  <div v-if="show" class="new-answer-holder grid">
    <div class="new-answer col" v-for="a in answers">
      <strong>New Answer Node</strong>
      <br>
      <input type="text" v-model="a.text" placeholder="Text">
      <br>
      <input type="text" v-model="a.link" placeholder="Link">
    </div>
  </div>

  <!-- button -->
  <div v-if="show" class="new-answer-save">
    <button @click="save">Save</button>
  </div>
</fieldset>
</div>
</template>

<script>
import _ from 'lodash'
import AnswerNode from '../../utils/AnswerNode'

export default {
  props: ['following'],

  data () {
    return {
      show: null,
      notsaved: true,

      number: 0,
      answers: [],

      node: {
        type: null,
        text: '',
        link: '',
        next: null
      }
    }
  },

  methods: {
    changeNumber () {
      this.show = true
      for (let i = 0; i < this.number; i++) {
        this.answers.push(_.cloneDeep(this.node))
      }
    },

    save () {
      this.notsaved = false
      let nodes = this.answers.map(a => new AnswerNode(a))
      this.$store.dispatch('CREATE_ANSWER_NODES', { nodes, followingId: this.following.id })
    }
  }
}
</script>

<style scoped>
.new-answer-holder {
  overflow: hidden;
}

.new-answer {
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
}

.new-answer-save {
  clear: both;
}
</style>
