import React from 'react'
const Resumen = ({ datos }) => {
 // extraer de datos
 const { marca, year, plan } = datos

 if (marca === '' || year === '' || plan === '') return null

 return (
  <fragment>
   <h2>Resumen de Cotización</h2>
   <ul>
    <li>Marca: </li>
    <li>Plan: </li>
    <li>Año del Auto: </li>
   </ul>
  </fragment>
 )
}

export default resumen
