import axios from 'axios'

const state = {
    tweetData: []

};

const getters = {
    tweetPins: (state) => state.tweetData,
};

const actions = {
    async getTweets({
        commit
    }) {
        const response = await axios.get("http://localhost:8080/pin/twitter");
        console.log(response.data);
        commit('tweets', response.data);
    },
    async createTweet({
        commit
    }, twitterObject) {
        const response = await axios.post("http://localhost:8080/pin/twitter", twitterObject);
        commit('postedTweet', response.data);
    }
};


const mutations = {
    tweets: (state, tweet) => (state.tweetData = tweet),
    postedTweet: (state, tweet) => state.tweetData.unshift(tweet)
};

export default {
    state,
    getters,
    actions,
    mutations
};