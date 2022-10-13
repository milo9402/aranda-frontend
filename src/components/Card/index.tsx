import React from 'react'
import CardBody from './CardBody'
import Icon from '../Icon'
import CardImage from '../../assets/cherry.png'

export default function Card() {
  return (
    <div className='card_container'>
        <img className='card_image' src={CardImage} alt="card_image" />
        <CardBody/>
        <div className='card_icons'>
            <span className='card_puntuation'>
                <Icon/>
                <p>5.0</p>
            </span>
            <Icon/>

        </div>
    </div>
  )
}
