import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

const numberBoxStyleRed = {
 padding: 20,
 width: 50,
 height: 50,
 margin: 1,
 display: 'inline-block',
 fontFamily: 'Kanit',
 backgroundColor: 'red',
}
const numberBoxStyleYellow = {
 padding: 20,
 width: 50,
 margin: 1,
 height: 50,
 display: 'inline-block',
 fontFamily: 'Kanit',
 backgroundColor: 'yellow',
}

const numberBoxStyleGreen = {
 padding: 20,
 margin: 1,
 width: 50,
 height: 50,
 display: 'inline-block',
 fontFamily: 'Kanit',
 backgroundColor: 'green',
}

const containerStyle = {
 height: '100%',
 display: 'flex',
 flexWrap: 'wrap',
 alignItems: 'normal',
}

const TextWrapperStyle = {
 height: '100%',

 textAlign: 'center',
}

const NumberBox = ({ number, primenumber }) => {
 const newValue = number % 2
 const flag = primenumber.includes(number)

 switch (true) {
  case newValue === 0:
   if (flag === true) {
    return <div style={numberBoxStyleRed}>{number} red</div>
   } else {
    return <div style={numberBoxStyleGreen}>{number} green</div>
   }

  default:
   if (flag === true) {
    return <div style={numberBoxStyleRed}>{number} red</div>
   } else {
    return <div style={numberBoxStyleYellow}>{number} yellow</div>
   }
 }
}

const TextWrapper = () => {
 return (
  <div style={TextWrapperStyle}>
   <h1>30day of React</h1>
   <h2>Color Generator</h2>
  </div>
 )
}

const Container = ({ numbers, primenumber }) => {
 const numberBoxs = numbers.map((index, number) => (
  <NumberBox key={index} number={number} primenumber={primenumber} />
 ))
 return <div style={containerStyle}>{numberBoxs}</div>
}

const App = () => {
 const bunchOfNumber = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
 ]
 const primeNumbers = [3, 4, 9, 0, 15, 23]

 return (
  <div className="app">
   <TextWrapper />
   <Container numbers={bunchOfNumber} primenumber={primeNumbers} />
  </div>
 )
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
