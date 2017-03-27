<template>
<div class="newnode">
  {{ node }}

  <hr>

  <dl>
    <dt>type</dt>
    <dd>
      <select v-model="node.type">
        <option :value="type" v-for="type in types">{{ type }}</option>
      </select>
    </dd>

    <dt>text</dt>
    <dd>
      <input type="text" v-model="node.text">
    </dd>

    <!-- Show Link for Normal Node -->
    <dt v-if="node.type=='normal'">link</dt>
    <dd v-if="node.type=='normal'">
      <input type="text" v-model="node.link">
    </dd>
  </dl>

  <button @click="add">Add</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      node: {
        id: null,
        type: 'normal',   // ['normal', 'question', 'answer'],
        text: '',
        link: '',
        children: null
      },

      types: ['normal', 'question', 'answer']
    }
  },

  methods: {
    add () {
      this.node.id = this.uuid()

      if (this.node.type == 'question') {
        this.node.children = []
      }
    },

    uuid () {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
					return v.toString(16)
				})
    }
  }
}
</script>
