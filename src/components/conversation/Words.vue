<template>
<div class="words" @click="next">
  {{ node }}
  <hr>
</div>
</template>

<script>
export default {
  props: ['node'],

  methods: {
    next () {
      this.$emit('gonext')
    }
  }
}
</script>
