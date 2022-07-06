import React, { useState } from 'react'
import pregunta from './components/pregunta'
import Formulario from './components/Formulario'

function app() {
 // definir el state
 const [presupuesto, guardarPresupuesto] = useState(0)
 const [restante, guardarRestante] = useState(0)
 const [mostrarpregunta, actualizarPregunta] = useState(true)
 const [gastos, guardarGastos] = useState([])

 //cuando agreguemos un nuevo gasto
 const agregarnuevogasto = (gasto) => {
  guardarGastos([...gastos, gasto])
 }

 return (
  <div className='container'>
   <header>
    <h1>Gasto Semanal</h1>

    <div className='contenido-principal contenido'>
     {mostrarpregunta ? (
      <Pregunta
       guardarPresupuesto={guardarPresupuesto}
       guardarRestante={guardarRestante}
       actualizarPregunta={actualizarPregunta}
      />
     ) : (
      <div className='row'>
       <div className='one-half column'>
        <Formulario agregarnuevoGasto={agregarnuevoGasto} />
       </div>

       <div className='one-half column'>2</div>
      </div>
     )}
    </div>
   </header>
  </div>
 )
}

export default App
