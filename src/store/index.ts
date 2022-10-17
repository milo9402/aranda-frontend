import { configureStore } from '@reduxjs/toolkit'
import recipeSlice from '../slices/recipe/repiceSlice'

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch