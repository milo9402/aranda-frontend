import React from 'react'
// Icons
import {ReactComponent as RecipeSizeIcon}  from '../../assets/icons/ic_portion.svg'
import {ReactComponent as RecipeTimeIcon}  from '../../assets/icons/ic_time.svg'
import {ReactComponent as RecipeDificultIcon}  from '../../assets/icons/ic_chef.svg'


export default function CardBody() {
  return (
    <div className='card_body'>
      <div className='card_body_info'>
          <span className='card_body_icon'>
            <RecipeSizeIcon/>
          </span>
          <span className="card_body_description">Tamaño de la preparación</span>
          <span className="card_body_value">4 raciones</span> 
      </div>
      <div className='card_body_info'>
          <span className='card_body_icon'>
            <RecipeTimeIcon/>
          </span>
          <span className="card_body_description">Tiempo de preparación</span>
          <span className="card_body_value">10 minutos</span> 
      </div>
      <div className='card_body_info'>
          <span className='card_body_icon'>
            <RecipeDificultIcon/>
          </span>
          <span className="card_body_description">Dificultad</span>
          <span className="card_body_value">4 reaciones</span> 
      </div>
    </div>
  )
}
