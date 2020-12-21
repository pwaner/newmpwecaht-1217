const mutations = {
  updateUser(state, option) {
    state.userDate = option
  },
  updatePropertyList(state, option) {
    state.propertyList = option
  },
  updateEstates(state, option) {
    state.estates.push(option)
  },
  updateCurrentEstate(state, option) {
    state.currentEstate = option
  }
}

export default mutations