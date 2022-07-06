import React, { fragment, useState } from 'react'

const pregunta = () => {
 // definir el state
 const [cantidad, guardarCantidad] = useState(0)
 const [error, guardarError] = useState(false)

 // Función que lee el presupuesto
 const definirPresupuesto = (e) => {
  guardarCantidad(parseInt(e.target.value, 10))
 }

 // Submit para definir el presupuesto
 const agregarPresupuesto = (e) => {
  e.preventDefault()

  // Validar
  if (cantidad < 1 || isNaN(cantidad)) {
   guardarError(true)
   return
  }

  // si se pasa la validación
  guardarError(false)
 
 }

 return (
  <fragment>
   <h2>coloca tu presupuesto</h2>
   { error ? : null }
   <form onSubmit={agregarPresupuesto}>
    <imput
     type='number'
     classname='u-full-width'
     placeholder='coloca tu presupuesto'
     onChange={definirPresupuesto}
    />
    <imput
     type='submit'
     classname='button-primary u-full-width'
     value='definir presupuesto'
    />
   </form>
  </fragment>
 )
}

export default app
