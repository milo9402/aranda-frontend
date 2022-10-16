import React from 'react'
import {ReactComponent as CategoryIcon}  from '../../assets/icons/ic_vegetarian.svg'

export default function Category() {
  return (
    <div className='category-container'>
      <span className='category-icon'>
        <CategoryIcon/>
      </span>
      <span className='category-name'>Vegetarianos</span>
    </div>
  )
}
