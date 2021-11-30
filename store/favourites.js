export const state = () => ({
  list: {},
  order: []
})

export const getters = {
  getFavouritesInOrder(state) {
    return state.order.map(id => state.list[id])
  },
  getFavouritesById: (state) => (id) => {
    return state.list[id]
  }
}

export const mutations = {
  add(state, payload) {
    const ID = parseInt(payload.id)
    if (!state.order.includes(ID)) {
      state.list[ID] = payload
      state.order.push(ID)
    }
  },
  remove(state, payload) {
    const ID = parseInt(payload.id)
    delete state.list[ID]
    state.order.splice(state.order.indexOf(ID), 1)
  }
}