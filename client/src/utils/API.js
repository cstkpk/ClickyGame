import axios from "axios";
const queryURL = "https://api.giphy.com/v1/gifs/search?q=";
const queryURL2 = process.env.REACT_APP_GIPHY_KEY + "&limit=10&rating=G"
// To solve issue accessing environment variables from back end Heroku config vars:
    // Hard code the API key right in here, do a git commit and push to heroku, but don't push to GH
    // The API key will be visible anyway, even if it were working from the config vars, because the code is compiled in build
    // This way at least it's not just sitting on GH
    // Although there SHOULD be a way to get the config vars working...
// const queryURL2 = GIPHY_KEY + "&limit=10&rating=G"

export default {
    search: function(topic) {
        return axios.get(queryURL + topic + queryURL2); 
    }
};

// export default {
//     search: function(topic) {
//         return axios.get("/api/giphy", topic); 
//     }
// };