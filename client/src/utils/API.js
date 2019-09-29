import axios from "axios";
// const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + process.env.giphyKEY + "&limit=10&rating=G";
const queryURL = "https://api.giphy.com/v1/gifs/search?q=celebrate" + process.env.GIPHY_KEY;

export default {
    search: function(topic) {
        return axios.get(queryURL); 
    }
};