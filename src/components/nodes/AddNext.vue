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

  <div v-if="show == 'question'">Question</div>

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
import BaseNode from '../../utils/BaseNode.js'

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
      this.node.type = type

      if (type == 'end') {
        delete this.node.next
      }
    },

    save () {
      let node = new BaseNode(this.node)
      // Storage.upsert(node.id, node)
      // this.follow.next = node.id
      // Storage.upsert(this.follow.id, this.follow)
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
