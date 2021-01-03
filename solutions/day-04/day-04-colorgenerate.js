import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

import reportWebVitals from './reportWebVitals'

const hexaColor = () => {
 let str = '0123456789abcdef'
 let color = ''
 for (let index = 0; index < 6; index++) {
  let index = Math.floor(Math.random() * str.length)
  color += str[index]
 }
 return `#${color}`
}

const divParent = {
 padding: 15,
 margin: 10,
 border: 2,
}

const DivHeaderStyle = {
 margin: 'auto',
 border: 2,
}

// const DivBodyStyle = {
//  margin: 'auto',
//  border: 2,
// }

const TextContent = () => <p>{hexaColor()}</p>
const TextHeader = () => <h1>Alert</h1>

const DivHeader = () => (
 <div style={DivHeaderStyle}>
  <TextHeader />
 </div>
)

const DivBody = () => (
 <div align="center">
  <TextContent />
 </div>
)

const ModalBody = () => (
 <div>
  <DivHeader />
  <DivBody />
 </div>
)

// const Divparent = () => (
//  <div style={{ backgroundColor: `${hexaColor()}` }}>
//   <ModalBody />
//  </div>
// )

const DivParent = () => {
 const newtest = ['test', 'test2', 'test3', 'test4', 'test5']
 const parent = newtest.map((newin) => (
  <div key={newin} style={{ backgroundColor: `${hexaColor()}` }}>
   <ModalBody />
  </div>
 ))
 return parent
}

const App = () => (
 <div className="app">
  <DivParent />
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
