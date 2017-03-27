<template>
<div class="node-next">

<fieldset>
  <!-- type -->
  <div v-if="!show">
    <div v-if="following.type != 'question'">
      <button @click="changeShow('normal')">Add Normal</button>
      <button @click="changeShow('question')">Add Question</button>
      <button @click="changeShow('end')">Add End</button>
    </div>
    <div v-else>
      <button @click="changeShow('answer')">Add Answer(s)</button>
    </div>
  </div>

  <!-- forms -->
  <div v-if="show == 'normal'">
    <strong>New Normal Node</strong>
    <br>
    <input type="text" v-model="node.text" placeholder="Text">
    <br>
    <input type="text" v-model="node.link" placeholder="Link">
  </div>

  <div v-if="show == 'question'">
    <strong>Question</strong>
    <br>
    <input type="text" v-model="node.text" placeholder="Question">
    <br>
    <input type="text" v-model="node.link" placeholder="Link">
  </div>

  <div v-if="show == 'answer'">Answer(s)</div>

  <div v-if="show == 'end'">
    <strong>End This</strong>
    <br>
    <input type="text" v-model="node.text" placeholder="Text">
    <br>
    <input type="text" v-model="node.link" placeholder="Link">
  </div>

  <!-- button -->
  <div v-if="show">
    <button @click="save">Save</button>
  </div>
</fieldset>


</div>
</template>

<script>
import Storage from '../../db'
// import BaseNode from '../../utils/BaseNode.js'
import StartNode from '../../utils/StartNode'
import NormalNode from '../../utils/NormalNode'
import QuestionNode from '../../utils/QuestionNode'
import AnswerNode from '../../utils/AnswerNode'
import EndNode from '../../utils/EndNode'

export default {
  props: ['following'],

  data () {
    return {
      show: null,

      node: {
        type: null,
        text: '',
        link: '',
        next: null
      }
    }
  },

  methods: {
    changeShow (type) {
      this.show = type
    },

    save () {
      let node = null

      switch (this.show) {
        case 'normal':
          node = new NormalNode(this.node)
          break
        case 'question':
          node = new QuestionNode(this.node)
          break
        case 'answer':
          node = new AnswerNode(this.node)
          break
        case 'end':
          node = new EndNode(this.node)
        default:
          break
      }

      this.$store.dispatch('CREATE_NODE', { node, followingId: this.following.id })
    }
  }
}
</script>

<style scoped>
.new-type {
  display: none;
}
</style>
