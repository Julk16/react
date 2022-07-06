import React, { fragment } from 'react'

const pregunta = () => {
 return (
  <fragment>
   <h2>coloca tu presupuesto</h2>
   <form>
    <imput
     type='number'
     classname='u-full-width'
     placeholder='coloca tu presupuesto'
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
