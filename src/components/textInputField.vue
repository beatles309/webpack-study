<template>
  <input
    type='text'
    @click.prevent="inputText">
</template>

<script>
export default {
  name: 'textInputField',
  methods: {
    inputText (text) {
      this.$emit('inputText', text)
    }
  }
}
</script>
