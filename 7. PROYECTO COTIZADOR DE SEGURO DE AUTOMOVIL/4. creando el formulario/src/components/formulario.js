import React from 'react'
const formulario = () => {
 return (
  <form>
   <div>
    <label>marca</label>
    <select>
     <option value=''>--seleccione--</option>
     <option value='americano'>americano</option>
     <option value='europeo'>europeo</option>
     <option value='asiatico'>asiatico</option>
    </select>
   </div>

   <div>
    <label>año</label>
    <select>
     <option value=''>-- Seleccione --</option>
     <option value='2021'>2021</option>
     <option value='2020'>2020</option>
     <option value='2019'>2019</option>
     <option value='2018'>2018</option>
     <option value='2017'>2017</option>
     <option value='2016'>2016</option>
     <option value='2015'>2015</option>
     <option value='2014'>2014</option>
     <option value='2013'>2013</option>
     <option value='2012'>2012</option>
    </select>
   </div>
   <div>
    <Label>Plan</Label>
    <Input type='radio' name='plan' value='basico' /> Básico
    <Input type='radio' name='plan' value='completo' /> completo
   </div>

   <Button type='button'>Cotizar</Button>
  </form>
 )
}

export default formulario
