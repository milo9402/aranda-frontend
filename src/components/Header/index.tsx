import React from 'react'

export default function Header({children}:any) {
  return (
    <div className='header_container'>
      <h3>RecipeApp</h3>
      {children}
    </div>
  )
}
