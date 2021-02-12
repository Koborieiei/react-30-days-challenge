import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { countriesData } from './data/country'
import reportWebVitals from './reportWebVitals'
import styled from 'styled-components'

const ImageContainer = styled.div`
 background: url(${(props) => props.image});
 background-size: 100% 100%;
 /* background-size: cover; */
 height: 150px;
 width: 200px;
 margin: 30px auto;
`

const ButtonStyled = styled.button`
 background-color: palevioletred;
 cursor: pointer;
 color: white;
 margin: 0px 0px 0px 20px;
 width: 100px;
 height: 30px;
 border: none;
`
const Button = ({ onClick }) => {
 return <ButtonStyled onClick={onClick}> Click me !</ButtonStyled>
}

const Container = styled.div`
 width: 90%;
 height: 100%;
 margin: auto;
`
const CountryContainer = styled.div`
 padding: 10px;
 width: 90%;
 height: 50%;
 box-shadow: 10;
 margin: auto;
`

const HeaderText = styled.h1`
 font-family: kanit;
 color: dark;
 margin-top: 10;
 margin-bottom: 0;
 text-align: center;
`

const SecondaryText = styled.h2`
 font-family: kanit;
 font-weight: 500;
 margin: 0;
 color: gray;
 text-align: center;
`
class DataContainer extends Component {
 render() {
  console.log(this.props)
  const {
   name,
   flag,
   capital,
   languages,
   population,
   currency,
  } = this.props.data
  return (
   <CountryContainer>
    <ImageContainer image={flag} />
    <p>Country : {name}</p>
    <p>Capital : {capital}</p>
    <p>Language : {languages}</p>
    <p>Population: {population.toLocaleString()}</p>
    <p>Currency : {currency}</p>
   </CountryContainer>
  )
 }
}

export class App extends Component {
 state = {
  index: 0,
 }

 randomIndex = () => {
  this.setState({ index: Math.floor(Math.random() * countriesData.length) })
 }

 render() {
  return (
   <>
    <Container>
     <HeaderText>30Days React Challenge</HeaderText>
     <SecondaryText> Country generator</SecondaryText>
     <DataContainer data={countriesData[this.state.index]} />
     <Button onClick={this.randomIndex}>Click me !</Button>
    </Container>
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
