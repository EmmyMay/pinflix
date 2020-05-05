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
        let response = await axios.post("http://localhost:8080/pin/login", user);
        console.log(response);
        commit('saveuser', response.data)
    }
};


const mutations = {
    saveuser(state, payload) {
        var savedtoken = localStorage.setItem('user', payload.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${savedtoken}`;
        state.user = savedtoken;
        // console.log(payload);
        // console.log(payload.token);

    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};