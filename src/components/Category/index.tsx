import React from 'react'
import { CategoryProps } from '../../interfaces/category.interface'

export default function Category({name,icon,categoryName}:CategoryProps) {
  return (
    <div className='category-container'>
      <span className='category-icon'>
        {icon}
      </span>
      <span className='category-name'>{name}</span>
    </div>
  )
}
