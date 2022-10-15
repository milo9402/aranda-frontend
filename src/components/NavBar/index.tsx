import React from 'react'
import {ReactComponent as HomeIcon}  from '../../assets/icons/ic_home.svg'

export default function Navbar() {
  return (
    <div className='navbar_container'>
      <ul className='navbar_list'>
        <li className="navbar_item">Home</li>
        <li className="navbar_item">Vegetarianos</li>
        <li className="navbar_item">Platos principales</li>
        <li className="navbar_item">Tortas</li>
        <li className="navbar_item">Comida Rapida</li>
        <li className="navbar_item">Menu Niños</li>
        <li className="navbar_item">Sopas</li>
      </ul>
      <span className='navbar_home-icon'>
        <HomeIcon/>
      </span>
    </div>
  )
}
