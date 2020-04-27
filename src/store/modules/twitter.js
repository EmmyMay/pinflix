import axios from 'axios'
// const storage = localStorage.getItem('mode');


// localStorage.setItem('light-mode', state.appMode)


const state = {
    tweetArr: [],
    appMode: false

};

const getters = {
    tweetPins: (state) => state.tweetArr.reverse(),
    darkState: (state) => state.appMode


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
    setAppMode({
        commit
    }, payload) {

        // console.log("I am from the payload  *** *** " + payload + " ***");

        commit('changeAppMode', payload)
    }
};


const mutations = {
    Settweets: (state, tweetPin) => state.tweetArr = tweetPin,
    postedTweet: (state, tweet) => state.tweetArr.unshift(tweet),
    changeAppMode: (state, appstate) => {



        state.appMode = appstate

        // console.log("I am from mutations " + appstate);
        // console.log("I am from mutations for the main State " + state.appMode);



    }
};

export default {
    state,
    getters,
    actions,
    mutations
};