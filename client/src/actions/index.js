// Action creators here

export const fakeNameHere = (param) => {
    return {
        type: "TYPE_HERE",
        payload: param
    };
};

export const trackScore = score => {
    return {
        type: "TRACK_SCORE",
        payload: score
    };
};