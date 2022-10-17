import React, { ReactElement, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { getRecipes } from '../../slices/recipe/thunk';
import { RootState } from '../../store';
import Card from '../Card'

export default function Carrousel() {

  const dispatch = useAppDispatch();
  const randomRecipes = useAppSelector((state: RootState) => state.recipe.randomRecipes)

  useEffect(() => {
    dispatch(getRecipes())
  },[])
  
  
  const cards = ():any => {
    console.log(randomRecipes)
      const cardsArray = 
      randomRecipes.map((element) => {
        const title:string = element.title.split(" ")[0]
        const subtitle:string = element.sourceName.split(" ")[0]
        const bodyInfo = {
          servings: element.servings,
          readyInMinutes: element.readyInMinutes,
          dificult: element.cheap ? 'Facil' : 'Dificil'
        }
        return(
            <Card
              key={element.id}
              imagesource={element.image}
              name={title}
              ingredient={subtitle}
              puntuation={element.healthScore/10}
              bodyContent={bodyInfo}
            />
        )
      })
      return cardsArray;
  }

  return (
    
    <div className='carrousel_container'>
      {randomRecipes && cards()}
    </div>
  )
}
