import React, { useState } from 'react';
import CardBody from './CardBody'
import CardImage from '../../assets/cherry.png'
import {ReactComponent as StarIcon}  from '../../assets/icons/ic_star.svg'
import {ReactComponent as HeartIcon}  from '../../assets/icons/ic-favorite.svg'


export default function Card() {
  const [isShown, setIsShown] = useState(false);


  return (
    <div 
      className={isShown ? 'card_container open' : 'card_container'}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img className='card_image' src={CardImage} alt="card_image" />
      
      {!isShown && (
        <span 
          className='card_title'
        >
            <div className="card_food">Ojingeo</div>
            <div className="card_ingredient">Muchim</div>
        </span>
      )}
      <CardBody/>
      {!isShown && (
        <div 
          className='card_icons'
        >
          <span className='card_puntuation'>
              <StarIcon/>
              <span className='card_puntuation_text'>5.0</span>
          </span>
          <span className='card_favorite'>
            <HeartIcon/>
          </span>
        </div>
      )}
    </div>
  )
}
