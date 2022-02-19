<template>
    <h1>GRAPHLE</h1>
    <GrGraph />
    <GrGuess ref="guess" />
</template>

<script>
import GrGraph from './components/GrGraph.vue'
import GrGuess from './components/GrGuess.vue'

export default {
  name: 'App',
  computed: function() {
  },
  created: function() {
  },
  components: {
    GrGuess, GrGraph
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
