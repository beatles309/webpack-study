<template>
  <div class="hello">
    <button @click="buttonClick">버튼</button>
  </div>
</template>

<script>
import { test, horror, action, ero } from '../js/IIFE'
export default {
  name: 'HelloWorld',
  mounted () {
    console.log(test())

    console.log(horror.get_movie())
    console.log(action.get_movie())
    console.log(ero.get_movie())

    ero.set_movie('반지하 제왕')

    console.log(horror)
    console.log(action.get_movie())
    console.log(ero.get_movie())
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
