import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/NavBar'

export default function Layout() {
  return (
    <div>
        Este es mi Layout
        <Header>
          <Navbar/>
        </Header>
        <Footer></Footer>
    </div>
  )
}
