import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

import reportWebVitals from './reportWebVitals'

const divParent = {
 padding: 15,
 margin: 10,
 border: 2,
 backgroundColor: 'gray',
}

const DivHeaderStyle = {
 margin: 'auto',
 border: 2,
}

const DivBodyStyle = {
 margin: 'auto',
 border: 2,
}

const TextContent = () => <p>Parent textContent</p>
const TextHeader = () => <h1>Alert</h1>

const DivHeader = () => (
 <div style={DivHeaderStyle}>
  <TextHeader />
 </div>
)

const DivBody = () => (
 <div style={DivBodyStyle}>
  <TextContent />
 </div>
)

const ModalBody = () => (
 <div>
  <DivHeader />
  <DivBody />
 </div>
)

const Divparent = () => (
 <div style={divParent}>
  <ModalBody />
 </div>
)

const App = () => (
 <div className="app">
  <Divparent />
  <Divparent />
 </div>
)

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
