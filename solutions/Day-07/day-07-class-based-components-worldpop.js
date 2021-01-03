import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

const testStyle = () => {
 return {
  padding: 0,
  margin: 0,
  marginTop: 10,
  width: '100%',
 }
}

const childStyle = {
 width: 160,
 display: 'inline-block',
 padding: 10,
}

const TextWrapperStyle = {
 width: '100%',
 textAlign: 'center',
}

const Button = ({ onClick }) => {
 return <button onClick={onClick}> Click me !</button>
}

class TextWrapper extends Component {
 render() {
  return (
   <div style={TextWrapperStyle}>
    <h1>30Day of React</h1>
    <h2>World Poppulation</h2>
    <Button onClick={this.props.onClick} />
   </div>
  )
 }
}

class ChartPopulation extends Component {
 progressBarCalculation = (value) => {
  const dividedValue = (value / 7693165599) * 100
  return `${dividedValue}%`
 }
 render() {
  //  Reconstruct the props which reduce complexity on accessing the data
  const { country, population } = this.props.worldpop
  return (
   <div style={testStyle()}>
    <div style={childStyle}>
     <h2>{country}</h2>
    </div>
    <div style={childStyle}>
     <div
      style={{
       backgroundColor: 'green',
       width: this.progressBarCalculation(population),
       height: 10,
      }}
     ></div>
    </div>
    <div style={childStyle}>
     <h3>{population.toLocaleString()}</h3>
    </div>
   </div>
  )
 }
}

const newFregment = () => {
 return (
  <>
   <input type="text"></input>
   <input type="password"></input>
  </>
 )
}

class Container extends Component {
 render() {
  const countryList = this.props.data.map((country, index) => (
   <ChartPopulation key={index} worldpop={country} />
  ))
  return <div>{countryList}</div>
 }
}

export class App extends Component {
 handleAlert = () => {
  alert('heelo')
 }
 render() {
  const tenHighestPopulation = [
   { country: 'World', population: 7693165599 },
   { country: 'China', population: 1377422166 },
   { country: 'India', population: 1295210000 },
   { country: 'United States of America', population: 323947000 },
   { country: 'Indonesia', population: 258705000 },
   { country: 'Brazil', population: 206135893 },
   { country: 'Pakistan', population: 194125062 },
   { country: 'Nigeria', population: 186988000 },
   { country: 'Bangladesh', population: 161006790 },
   { country: 'Russian Federation', population: 146599183 },
   { country: 'Japan', population: 126960000 },
  ]

  return (
   <>
    <TextWrapper onClick={this.handleAlert} />
    <Container data={tenHighestPopulation} />
   </>
  )
 }
}

const root = document.querySelector('#root')
ReactDOM.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>,
 root
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
