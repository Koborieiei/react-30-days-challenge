import React, { Component } from 'react'
import './App.css'
import SignupForm from './components/SignupForm'

class App extends Component {
 state = {
  name: '',
  pass: '',
 }

 handleChnage = (e) => {
  const { name, value, type, checked } = e.target
  if (type === 'checkbox') {
   console.log('test')
   this.setState({ skills: { ...this.state.skills, [name]: checked } })
  } else {
   this.setState({ [name]: value })
  }
 }

 handleFormSubmit = (e) => {
  e.preventDefault()
  const { name, pass, skills } = this.state

  const skillsSet = []
  for (const key in skills) {
   if (skills[key]) {
    skillsSet.push(key.toUpperCase())
   }
  }
  const data = { name, pass, skills: skillsSet }
  console.log(data)
 }

 render() {
  return (
   <div className="App">
    <SignupForm
     onchange={this.handleChnage}
     onsubmit={this.handleFormSubmit}
     data={this.state}
    />
    name : {this.state.name}
    pass : {this.state.pass}
   </div>
  )
 }
}

export default App
