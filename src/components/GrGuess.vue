
<template>
    <h2>Guesses</h2>
    <div v-if="this.guesses">
        <ol id="guesses">
            <li v-for="(guess,i) in this.guesses" :key="i">{{ guess }}</li>
        </ol>
    </div>
    <input v-model="this.guess" v-on:keyup.enter="doGuess" placeholder="Guess a function"/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GrGuess',
  data: function() {
      return {
        guess: ''
      }
  },
  computed: {
     guesses: function() {
        let guesses = this.todaysGuesses
        guesses = guesses ? guesses : [];

        return guesses;
     },
     ...mapGetters(['todaysGuesses']),
  },
  methods: {
      doGuess: function() {
          // TODO form validation
          console.log("guess fn was " + this.guess);
          this.$store.commit('addGuess', this.guess);
          this.guess = '';
      }
  }
}
</script>
