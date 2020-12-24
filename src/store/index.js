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
    currentEstate : '',  //当前选中物业
    openId: 'o26Dk5IrQFe1EwPkvsw1T71DPXh4',  //微信开放id  o26Dk5CgqApdeQKJiMcCsnWJqWSc
    appId: '101'  //微信appid
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store