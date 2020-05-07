import axios from 'axios'

const state = {
    tikArr: [],
    msg: ''

};

const getters = {
    tikPins: (state) => state.tikArr.reverse(),
    getmsg: (state) => state.msg
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
        const response = await axios.post("http://localhost:8080/pin/tiktok", tiktokObject);

        commit('postedTik', response.data.message);
    }
};


const mutations = {
    Settiks(state, tikPin) {
        state.tikArr = tikPin;

    },

    postedTik(state, tik) {
        state.message = tik;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};