import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Recipe } from '../../interfaces/recipe.interface'
// import { getRecipes } from './thunk'


export interface RecipeState {
    randomRecipes: Recipe[],
    currentRecipe: {},
    isLoading: boolean
}

const initialState: RecipeState = {
  randomRecipes: [],
  currentRecipe: {},
  isLoading: false,
}


export const recipeSlice = createSlice({
  name: 'repice',
  initialState,
  reducers: {
    startLoadingRecipes: (state,action:PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getRandomRecipes:(state,action:PayloadAction<Recipe[]>) => {
      state.randomRecipes = action.payload
    },
    getCurrentRecipe:(state: RecipeState, action:PayloadAction<Recipe>) => {
        state.currentRecipe = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getRandomRecipes,getCurrentRecipe,startLoadingRecipes } = recipeSlice.actions

export default recipeSlice.reducer