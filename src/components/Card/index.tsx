import React, { useState } from 'react';
import CardBody from './CardBody'
import {ReactComponent as StarIcon}  from '../../assets/icons/ic_star.svg'
import {ReactComponent as HeartIcon}  from '../../assets/icons/ic-favorite.svg'
import { CardProps } from '../../interfaces/card.interface';
import CardImage from '../../assets/cherry.png'


export default function Card(props:CardProps) {
  const [isShown, setIsShown] = useState(false);
  const {
    imagesource,
    name,
    ingredient,
    puntuation,
    bodyContent,
  } = props;

  const { 
    servings,
    readyInMinutes,
    dificult,
  } = bodyContent; 

  return (
    <div 
      className={isShown ? 'card_container open' : 'card_container'}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <span>
        <img className='card_image' src={imagesource || CardImage} alt="card_image" />
      </span>
      
      {!isShown && (
        <span 
          className='card_title'
        >
            <div className="card_food">{name}</div>
            <div className="card_ingredient">{ingredient}</div>
        </span>
      )}
      <CardBody
        servings={servings}
        readyInMinutes={readyInMinutes}
        dificult={dificult}
      />
      {!isShown && (
        <div 
          className='card_icons'
        >
          <span className='card_puntuation'>
              <StarIcon/>
              <span className='card_puntuation_text'>{puntuation}</span>
          </span>
          <span className='card_favorite'>
            <HeartIcon/>
          </span>
        </div>
      )}
    </div>
  )
}
