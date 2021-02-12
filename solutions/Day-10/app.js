import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import ChartPopulation from './components/ChartPopulation'

const TextWrapperStyle = {
 width: '100%',
 textAlign: 'center',
}

const Button = ({ text, onClick }) => {
 return <button onClick={onClick}>{text}</button>
}

class TextWrapper extends Component {
 render() {
  const { decreaseOne, addOne, count, changeBg } = this.props
  return (
   <div style={TextWrapperStyle}>
    <h1>30Day of React</h1>
    <h2>World Poppulation</h2>
    <h2>{count}</h2>
    <Button text="Add One" onClick={addOne} />
    <Button text="Decrease One" onClick={decreaseOne} />
    <Button text="ChangeBg" onClick={changeBg} />
   </div>
  )
 }
}

class Container extends Component {
 render() {
  const countryList = this.props.data.map((country, index) => (
   <ChartPopulation
    key={index}
    color={this.props.color}
    worldpop={country}
    count={this.props.count}
   />
  ))
  return <>{countryList}</>
 }
}

export class App extends Component {
 hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let index = 0; index < 6; index++) {
   let index = Math.floor(Math.random() * str.length)
   color += str[index]
  }
  return `#${color}`
 }

 state = {
  count: 0,
  backgroundColor: this.hexaColor(),
 }
 handleAlert = () => {
  alert('heelo')
 }

 addOne = () => {
  this.setState({ count: this.state.count + 1 })
 }

 changeBackGround = () => {
  this.setState({ backgroundColor: `${this.hexaColor()}` })
 }

 decreaseOne = () => {
  this.setState({ count: this.state.count - 1 })
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
    <TextWrapper
     addOne={this.addOne}
     decreaseOne={this.decreaseOne}
     count={this.state.count}
     changeBg={this.changeBackGround}
    />
    <Container data={tenHighestPopulation} color={this.state.backgroundColor} />
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
