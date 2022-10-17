import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import CategoryGrid from '../components/CategoryGrid'
import { useAppDispatch } from '../hooks/redux.hook'
import { getRecipes } from '../slices/recipe/thunk'

export default function Layout({children}: any) {

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getRecipes())
  // },[dispatch])


  return (
    <div className='layout_container'>
        <Header>
          <Navbar/>
        </Header>
        <Banner/>
        <CategoryGrid/>
        <main>
          <div className='layout_mid_title'>Nuevas Recetas</div>
          <div className='layout-carrousel-contain'>
            <Carrousel/>
          </div>
        </main>
        {children}
        <Footer/>
    </div>
  )
}
