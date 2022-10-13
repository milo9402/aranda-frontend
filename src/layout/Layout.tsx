import React from 'react'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/NavBar'

export default function Layout() {
  return (
    <>
        <Header>
          <Navbar/>
        </Header>
        <Banner/>
        <main>
          <Carrousel/>
        </main>
        <Footer/>
    </>
  )
}
