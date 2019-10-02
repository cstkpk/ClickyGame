import axios from "axios";
// const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + process.env.giphyKEY + "&limit=10&rating=G";
const queryURL = "https://api.giphy.com/v1/gifs/search?q=celebrate" + process.env.REACT_APP_GIPHY_KEY + "&limit=1&rating=G";

export default {
    search: function() {
        return axios.get(queryURL); 
    }
};