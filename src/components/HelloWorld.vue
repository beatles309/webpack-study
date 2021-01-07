<template>
  <div class="hello">
    <button @click="buttonClick">버튼</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {

  },
  methods: {
    buttonClick: (() => {
      let count = 0
      return function () {
        count++
        alert(count)
      }
    })()
  }
}
</script>
