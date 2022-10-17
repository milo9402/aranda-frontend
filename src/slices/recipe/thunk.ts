import { spoonacularApi } from "../../api";
import { getRandomRecipes, RecipeState, startLoadingRecipes } from "./repiceSlice"


export const getRecipes = () => {
    return async (dispatch: any, getState: RecipeState) => {
        dispatch(startLoadingRecipes());
        // dispatch(getRandomRecipes)
        const prueba = await spoonacularApi.get('recipes/random?number=4&apiKey=65ebb248774f4444ab70166014b80e62')
        console.log("estas son las recentas --> ", prueba)

    }
}