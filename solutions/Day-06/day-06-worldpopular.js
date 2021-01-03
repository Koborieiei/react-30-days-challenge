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
 margin: 'auto',
}

const testSyle = () => {
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

const ChartPopulation = ({ worldpop: { country, population } }) => {
 const progressBarCalculation = (value) => {
  const dividedValue = (value / 7693165599) * 100
  return `${dividedValue}%`
 }
 return (
  <div style={testSyle()}>
   <div style={childStyle}>
    <h2>{country}</h2>
   </div>
   <div style={childStyle}>
    <div
     style={{
      backgroundColor: 'gray',
      width: progressBarCalculation(population),
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

const TextWrapper = () => {
 return (
  <div style={TextWrapperStyle}>
   <h1>30Day of React</h1>
   <h2>World Poppulation</h2>
  </div>
 )
}

const Container = ({ data }) => {
 const countryList = data.map((country) => (
  <ChartPopulation key={country.name} worldpop={country} />
 ))
 return <div style={containerStyle}>{countryList}</div>
}

const App = () => {
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
  <div className="app">
   <TextWrapper />
   <Container data={tenHighestPopulation} />
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
