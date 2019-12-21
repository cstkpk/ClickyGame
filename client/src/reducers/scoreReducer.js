export default (score = 0, action) => {
    switch (action.type) {
        case "TRACK_SCORE":
            return action.payload;
        default:
            return score;
    };
};