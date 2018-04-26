const createStenografoStore = (endpoint) => {
  return {
    namespaced: true,
    state: {
      isWaiting: false
    },
    getters: {
      isWaiting: (state) => {
        return state.isWaiting
      }
    },
    mutations: {
    },
    actions: {
    }
  }
}

export default createStenografoStore
