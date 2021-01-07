<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    ((sumVal) => { alert(sumVal) })('음냐뤼')
  },
  methods: {
  }
}
</script>
