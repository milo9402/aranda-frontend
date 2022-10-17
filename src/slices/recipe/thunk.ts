import { spoonacularApi } from "../../api";
import { getRandomRecipes, RecipeState, startLoadingRecipes } from "./repiceSlice"



export const getRecipes:any = (data:any) => async (dispatch:any) => {
    const apiKey = process.env.REACT_APP_ENV_API_KEY;
    console.log("esto es apiKey -> ", apiKey)
    try {
      const response = await spoonacularApi.get(`recipes/random?number=4&apiKey=${apiKey}`);
      console.log("esto es el data", response.data)
      dispatch(getRandomRecipes(response.data.recipes));
    } catch (err:any) {
      throw new Error(err);
    }
  };