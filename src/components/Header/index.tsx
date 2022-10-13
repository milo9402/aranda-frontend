import React from 'react'

export default function Header({children}:any) {
  return (
    <div className='header_container'>
      <h1 className='header_title'>RecipeApp</h1>
      {children}
    </div>
  )
}
