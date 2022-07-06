import React from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'

import styled from '@emotion/styled'

const Contenedor = styled.div`
 max-width: 600px;
 margin: 0 auto;
`

const ContenedorFormulario = styled.div`
 background-color: #fff;
 padding: 3rem;
`

function app() {
 return (
  <contenedor>
   <Header titulo='Cotizador de Seguros' />

   <contenedorformulario>
    <Formulario />
   </contenedorformulario>
  </contenedor>
 )
}

export default app
