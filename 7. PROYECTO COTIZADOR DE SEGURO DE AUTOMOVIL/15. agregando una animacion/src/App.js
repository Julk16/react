import React, { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'

import Resumen from './components/Resumen'

import Resultado from './components/Resultado'

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
 const [resumen, guardarResumen] = useState({
  cotizacion: 0,
  datos: {
   marca: '',
   year: '',
   plan: '',
  },
 })

 // extraer datos
 const { cotizacion, datos } = resumen
 return (
  <contenedor>
   <Header titulo='Cotizador de Seguros' />

   <contenedorformulario>
    <Formulario guardarResumen={guardarResumen} />

    <resumen datos={datos} />

    <resultado cotizacion={cotizacion} />
   </contenedorformulario>
  </contenedor>
 )
}

export default app
