import React, { Component } from 'react'
import FormInput from './FormInput'

export class SignupForm extends Component {
 render() {
  const options = ['name', 'pass']
  const FormInputs = options.map((option, index) => (
   <FormInput
    event={this.props.onchange}
    key={index}
    name={option}
    placeholder={option}
   />
  ))
  return (
   <>
    <form onSubmit={this.props.onsubmit}>
     {FormInputs}
     <label htmlFor="math">Math</label>
     <input onChange={this.props.onchange} type="checkbox" id="math" name="math" />
     <label htmlFor="Comsci">Comsci</label>

     <input onChange={this.props.onchange} type="checkbox" id="Comsci" name="Comsci" />
     <button>Submit</button>
    </form>
   </>
  )
 }
}

export default SignupForm
