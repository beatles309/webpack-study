<template>
  <button @click="fetchResults">{{ value }}</button>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        value: null
      }
    },

    methods: {
      fetchResults() {
        const response = axios.get('mock/service')
        this.value = response.data
      }
    }
  }
</script>
