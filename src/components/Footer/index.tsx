import React from 'react'
import FooterImage from '../../assets/Grupo7610.png'
export default function Footer() {
  return (
    <div className='footer_container'>
      <p className='footer_text'>Con el patrocinio de</p>
      <img  className='footer_image'src={FooterImage} alt="footer_image" />
    </div>
  )
}
