import React from 'react'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import CategoryGrid from '../components/CategoryGrid'

export default function Layout() {
  return (
    <div className='layout_container'>
        <Header>
          <Navbar/>
        </Header>
        <Banner/>
        <CategoryGrid/>
        <main>
          <div className='layout_mid_title'>Nuevas Recetas</div>
          {/* <Carrousel/> */}
        </main>
        <Footer/>
    </div>
  )
}
