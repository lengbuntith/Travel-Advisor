export const state = () => ({
  user: '',
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  addToSaved(context, place_id) {
    this.$axios.post('/saved/add', {
      place_id: place_id,
    })
  },
}
