export default (state = {}, action) => {
    switch (action.type) {
        case "SEARCH_INGREDIENT":
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
