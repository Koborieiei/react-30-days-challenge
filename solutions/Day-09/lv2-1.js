import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import styled from 'styled-components'
import summer from './images/summer.png'
import spring from './images/spring.png'
import winter from './images/winer.png'
import autumn from './images/autumn.png'

const SummerImage = styled.div`
 background: url(${summer});
 background-size: 100% 100%;
 /* background-size: cover; */
 height: 150px;
 width: 200px;
 margin: 10px auto;
`

const SpringImage = styled.div`
 background: url(${spring});
 background-size: 100% 100%;
 /* background-size: cover; */
 height: 150px;
 width: 200px;
 margin: 10px auto;
`

const WinterImage = styled.div`
 background: url(${winter});
 background-size: 100% 100%;
 /* background-size: cover; */
 height: 150px;
 width: 200px;
 margin: 10px auto;
`

const AutumnImage = styled.div`
 background: url(${autumn});
 background-size: 100% 100%;
 /* background-size: cover; */
 height: 150px;
 width: 200px;
 margin: 10px auto;
`

const Conatiner = styled.div`
 /* background-color: ${(props) => props.color}; */
 height: 100vh;
 display: flex;
 align-items: center;
 flex-direction: column;
`

const ButtonStyled = styled.button`
 background-color: palevioletred;
 cursor: pointer;
 color: white;
 margin: 0;
 width: 100px;
 height: 30px;
 border: none;
`

const Selector = styled.select`
 padding: 20;
 height: 30px;
`

const Div = () => {
 return (
  <div style={{ margin: 'auto' }}>
   <ButtonStyled>Test</ButtonStyled>
  </div>
 )
}

export default class App extends React.Component {
 state = {
  backgroundColor: 3,
  image: '',
 }

 changeState = (e) => {
  const season = e.target.value
  let color = ''

  switch (season) {
   case 'Winter':
    color = 'blue'
    break
   case 'Summer':
    color = 'red'
    break
   case 'Spring':
    color = 'Orange'
    break
   case 'Autumn':
    color = 'Brown'
    break
   default:
    break
  }

  this.setState({ backgroundColor: color })
 }
 render() {
  return (
   <>
    <Conatiner color={this.state.backgroundColor}>
     {/* <Div /> */}
     {this.state.backgroundColor === 'Brown' && <AutumnImage />}
     {this.state.backgroundColor === 'Orange' && <SpringImage />}
     {this.state.backgroundColor === 'red' && <SummerImage />}
     {this.state.backgroundColor === 'blue' && <WinterImage />}
     <Selector onChange={this.changeState}>
      <option defaultValue hidden value="Season">
       What is the season look like ?
      </option>

      <option value="Winter">Winter</option>
      <option value="Summer">Summer</option>
      <option value="Spring">Spring</option>
      <option value="Autumn">Autumn</option>
     </Selector>
    </Conatiner>
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
