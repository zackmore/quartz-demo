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

  <div v-if="show == 'normal'">
    <strong>New Normal Node</strong>
    <br>
    <input type="text" v-model="node.text" placeholder="Text">
    <br>
    <input type="text" v-model="node.link" placeholder="Link">
  </div>

  <div v-if="show == 'question'">Question</div>

  <div v-if="show == 'answer'">Answer(s)</div>

  <div v-if="show == 'end'">End</div>

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
  props: ['follow'],

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
    },

    save () {
      let node = new BaseNode(this.node)
      Storage.upsert(node.id, node)
      this.follow.next = node.id
      Storage.upsert(this.follow.id, this.follow)

      /*
      console.log(JSON.parse(JSON.stringify(this.node)))
      */
      console.log(Storage.nodes)
    }
  }
}
</script>

<style scoped>
.new-type {
  display: none;
}
</style>
