import react from 'react'
import pregunta from './components/pregunta'

function app() {
 return (
  <div classname='container'>
   <header>
    <h1>gasto semanal</h1>

    <div classname='contenido-principal contenido'>
     <pregunta />
    </div>
   </header>
  </div>
 )
}

export default app
