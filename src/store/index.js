import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    userDate: {},  //用户信息
    propertyList: [],  //物业信息
    estates: [],  //订阅信息
    currentEstate : ''  //当前选中物业
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store