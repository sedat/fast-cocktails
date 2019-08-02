import React from "react";
import { connect } from "react-redux";
import DisplayResult from "./DisplayResult";
import DisplayIngredient from "./DisplayIngredient";

const Display = ({ results, ingredient }) => {
    if (results.drinks !== undefined) {
        console.log("here");
        const { drinks } = results;
        results.drinks = undefined;
        if (drinks) {
            return <DisplayResult drinks={drinks} />;
        }
        return <div>Couldn't find that!</div>;
    } else if (ingredient.ingredients !== undefined) {
        const ingredients = ingredient.ingredients;
        console.log("here");
        ingredient = undefined;
        if (ingredients) {
            console.log(ingredients);
            return <DisplayIngredient ingredient={ingredients} />;
        }
        return <div>Couldn't find that!</div>;
    }
    return <div />;
};

function mapStateToProps(state) {
    return {
        results: state.name,
        ingredient: state.ingredient
    };
}

export default connect(
    mapStateToProps,
    null
)(Display);
