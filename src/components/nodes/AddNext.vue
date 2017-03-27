<template>
<div class="node-next">
<button @click="showUp">add next</button>

<div :style="{ display: show }">
ok
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: 'none'
    }
  },

  methods: {
    showUp () {
      this.show = 'block'
    }
  }
}
</script>
