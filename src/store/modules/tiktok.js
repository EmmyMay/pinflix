import axios from 'axios'

const state = {
    tikArr: []

};

const getters = {
    tikPins: (state) => state.tikArr.reverse(),
};

const actions = {
    async getTiks({
        commit
    }) {
        const response = await axios.get("http://localhost:8080/pin/tiktok");

        commit('Settiks', response.data);
    },
    async createTik({
        commit
    }, tiktokObject) {
        var getToken = localStorage.getItem('user');
        axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`;
        const response = axios.post("http://localhost:8080/pin/tiktok", tiktokObject);
        commit('postedTik', response.data);
    }
};


const mutations = {
    Settiks: (state, tikPin) => state.tikArr = tikPin,
    postedTik: (state, tik) => state.tikArr.unshift(tik)
};

export default {
    state,
    getters,
    actions,
    mutations
};