import axios from 'axios'




const state = {
    tweetArr: [],
    dark: true

};

const getters = {
    tweetPins: (state) => state.tweetArr.reverse(),
    darkState: (state) => state.dark
};

const actions = {
    async getTweets({
        commit
    }) {
        const response = await axios.get("http://localhost:8080/pin/twitter");

        commit('Settweets', response.data);
    },
    async createTweet({
        commit
    }, twitterObject) {

        const response = await axios.post("http://localhost:8080/pin/twitter", twitterObject);
        commit('postedTweet', response.data);
    },
    setappmode({
        commit
    }, payload) {
        console.log(payload + " Payload");


        commit('appmode', payload);
    }
};


const mutations = {
    Settweets: (state, tweetPin) => state.tweetArr = tweetPin,
    postedTweet: (state, tweet) => state.tweetArr.unshift(tweet),
    appmode: (state, payload) => {
        state.dark = payload;
        console.log(state.dark + " Inside mutations");
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};