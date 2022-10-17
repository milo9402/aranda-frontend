import React from 'react'
// Icons
import {ReactComponent as RecipeSizeIcon}  from '../../assets/icons/ic_portion.svg'
import {ReactComponent as RecipeTimeIcon}  from '../../assets/icons/ic_time.svg'
import {ReactComponent as RecipeDificultIcon}  from '../../assets/icons/ic_chef.svg'
import { BodyCardProps } from '../../interfaces/card.interface'


export default function CardBody({servings, readyInMinutes, dificult}: BodyCardProps) {
  return (
    <div className='card_body'>
      <div className='card_body_info'>
          <span className='card_body_icon'>
            <RecipeSizeIcon/>
          </span>
          <span className="card_body_description">Tamaño de la preparación</span>
          <span className="card_body_value">{servings}</span> 
      </div>
      <div className='card_body_info'>
          <span className='card_body_icon'>
            <RecipeTimeIcon/>
          </span>
          <span className="card_body_description">Tiempo de preparación</span>
          <span className="card_body_value">{readyInMinutes} minutos</span> 
      </div>
      <div className='card_body_info'>
          <span className='card_body_icon'>
            <RecipeDificultIcon/>
          </span>
          <span className="card_body_description">Dificultad</span>
          <span className="card_body_value">{dificult}</span> 
      </div>
    </div>
  )
}
