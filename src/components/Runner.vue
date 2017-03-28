<template>
<div class="runner">
  <h1>Runner</h1>
  <hr>
  <Conversation :nodeId="startNodeId" />
</div>
</template>

<script>
import Conversation from './conversation/Conversation.vue'

export default {
  computed: {
    startNodeId () {
      return this.$store.getters.startNode.id
    }
  },

  components: {
    Conversation
  }
}
</script>
