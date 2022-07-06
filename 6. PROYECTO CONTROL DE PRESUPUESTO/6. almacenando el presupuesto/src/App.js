import React, { useState } from 'react'
import pregunta from './components/pregunta'

function app() {
 // definir el state
 const [presupuesto, guardarPresupuesto] = useState(0)
 const [restante, guardarRestante] = useState(0)
 return (
  <div classname='container'>
   <header>
    <h1>gasto semanal</h1>

    <div classname='contenido-principal contenido'>
     <pregunta
      guardarPresupuesto={guardarPresupuesto}
      guardarRestante={guardarRestante}
     />
    </div>
   </header>
  </div>
 )
}

export default app
