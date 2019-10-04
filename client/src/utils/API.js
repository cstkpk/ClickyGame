import axios from "axios";
const queryURL = "https://api.giphy.com/v1/gifs/search?q=";
const queryURL2 = process.env.REACT_APP_GIPHY_KEY + "&limit=10&rating=G"

export default {
    search: function(topic) {
        return axios.get(queryURL + topic + queryURL2); 
    }
};