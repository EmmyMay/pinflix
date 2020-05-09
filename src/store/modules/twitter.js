import axios from 'axios'




const state = {
    tweetArr: []

};

const getters = {
    tweetPins: (state) => state.tweetArr.reverse(),
};

const actions = {
    async getTweets({
        commit
    }) {
        const response = await axios.get("https://pinflixx.herokuapp.com/pin/twitter");


        commit('Settweets', response.data);
    },
    async createTweet({
        commit
    }, twitterObject) {
        var getToken = localStorage.getItem('user');
        axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`;
        const response = await axios.post("https://pinflixx.herokuapp.com/pin/twitter", twitterObject);

        commit('postedTweet', response.data);
    }
};


const mutations = {
    Settweets: (state, tweetPin) => state.tweetArr = tweetPin,
    postedTweet: (state, tweet) => state.tweetArr.unshift(tweet)
};

export default {
    state,
    getters,
    actions,
    mutations
};