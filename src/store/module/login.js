import types from '../types';

const state = {
    login: false,
    token: ''
}

const mutations = {
    [types.ALLOW_LOGIN](state) {
        state.login = true
    },
    [types.LOG_OUT](state) {
        state.login = false
    },
    [types.SET_TOKEN](state,payload) {
        state.token = payload.token
    }
}

export default {
    state,
    mutations
}