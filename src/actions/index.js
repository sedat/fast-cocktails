import coctail from "../api/coctail";

export const searchName = name => async dispatch => {
    const response = await coctail.get(`/search.php?s=${name}`);
    dispatch({
        type: "SEARCH_NAME",
        payload: response.data
    });
};

export const searchIngredient = name => async dispatch => {
    const response = await coctail.get(`/search.php?i=${name}`);

    dispatch({
        type: "SEARCH_INGREDIENT",
        payload: response.data
    });
};
