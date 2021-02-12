import React from 'react'

function FormInput({ name, event, placeholder }) {
 return (
  <>
   <input onChange={event} name={name} placeholder={placeholder} />
  </>
 )
}

export default FormInput
