import React from 'react'
import { HomeBanner, HomePerfil, HomePerfilImg, HomePerfilName, HomePerfilRole } from './style'

import perfil from "../../assets/foto.jpg"

export const Home = () => {
  return (
      <HomeBanner>
        <HomePerfil>
          <HomePerfilImg src={perfil}/>
          <HomePerfilName>Daniel</HomePerfilName>
          <HomePerfilRole>Web Dev</HomePerfilRole>
        </HomePerfil>
      </HomeBanner>    
  )
}