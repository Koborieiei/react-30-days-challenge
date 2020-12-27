import React from 'react'
import ReactDOM from 'react-dom'

// import './index.css'

import reportWebVitals from './reportWebVitals'

const containerStyle = {
 backgroundColor: '#A0E3F9',
 fontFamily: 'Helvetica Neue',
 padding: 25,
 width: '100%',
 lineHeight: 1.5,
 textAlign: 'center',
}

const inputWrapperStyle = {
 fontFamily: 'Helvetica Neue',
 paddingTop: 10,
 paddingBottom: 10,
}

const inputStyle = {
 fontFamily: 'Helvetica Neue',
 padding: 10,
 margin: 5,
 backgroundColor: 'White',
 border: 'none',
 borderRadius: 10,
}

const acitonButton = {
 fontFamily: 'Helvetica Neue',
 padding: 10,
 margin: 5,
 backgroundColor: '#FE938C',
 color: 'White',
 border: 'none',
 borderRadius: 10,
 cursor: 'pointer',
}

const HeaderText = <h1>Subscribe</h1>

const DescribtionText = (
 <p>Sign up with your E-mail Address to receives news and update</p>
)
const inputComponents = (
 <input style={inputStyle} placeholder="Firstname"></input>
)

const ActionButton = <button style={acitonButton}>Subscribe</button>

const inputWrapper = (
 <div style={inputWrapperStyle}>
  {inputComponents}
  {inputComponents}
  {inputComponents}
 </div>
)

const ButtonWrapper = <div>{ActionButton}</div>
const Container = (
 <div style={containerStyle}>
  {HeaderText}
  {DescribtionText}
  {inputWrapper}
  {ButtonWrapper}
 </div>
)

const root = document.querySelector('#root')
ReactDOM.render(<React.StrictMode>{Container}</React.StrictMode>, root)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
