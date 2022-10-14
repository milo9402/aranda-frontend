import React from 'react'

export default function Header({children}:any) {
  return (
    <div className='header_container'>
      <h1 className='header_title'>
        Recipe
        <span className='header_title_complement'>
          App
        </span>
      </h1>
      {children}
    </div>
  )
}
