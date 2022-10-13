import React from 'react'
import BannerImg from '../../assets/bcq.jpg';

export default function Banner() {
  return (
    <div className='banner_container'>
        <img className='banner_container_image' src={BannerImg} alt="Main Banner" />
    </div>
  )
}
