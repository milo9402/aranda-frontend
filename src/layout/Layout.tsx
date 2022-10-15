import React from 'react'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/NavBar'

export default function Layout() {
  return (
    <div className='layout_container'>
        <Header>
          <Navbar/>
        </Header>
        <Banner/>
        <main>
          <div className='layout_mid_title'>Nuevas Recetas</div>
          {/* <Carrousel/>s */}
        </main>
        <Footer/>
    </div>
  )
}
