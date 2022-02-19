import { createStore } from 'vuex'

export default createStore({
  state: {
        guesses: {}
  },
  getters: {
    todaysGuesses(state) {
      return state.guesses[(new Date().setHours(0,0,0,0))]
    }
  },
  mutations: {
    addGuess (state, guess) {
      let today = new Date().setHours(0,0,0,0);

      if (!state.guesses[today]) {
        state.guesses[today] = [];
      }

      state.guesses[today].push(guess);
    },
  },
  actions: {
  },
  modules: {
  }
})

