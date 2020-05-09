import axios from 'axios'

const state = {
    user: null


};

const getters = {
    getUser: (state) => state.user
};

const actions = {
    async loginUser({
        commit
    }, user) {
        let response = await axios.post("https://pinflixx.herokuapp.com/pin/login", user);

        commit('saveuser', response.data)
    },
    logoutUser({
        commit
    }) {

        commit('logged_out')
    }

};


const mutations = {
    saveuser(state, payload) {
        var savedtoken = localStorage.setItem('user', payload.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${savedtoken}`;
        state.user = savedtoken;


    },
    logged_out(state) {
        localStorage.removeItem('user');
        axios.defaults.headers.common['Authorization'] = undefined;
        state.user = null;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};