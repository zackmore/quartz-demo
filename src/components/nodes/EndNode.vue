<template>
<div class="node end">
  end node {{ node.id }}

  <dl>
    <dt>text</dt>
    <dd><input type="text" v-model="node.text"></dd>

    <dt>link</dt>
    <dd><input type="text" v-model="node.link"></dd>
  </dl>
</div>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['node']
}
</script>
