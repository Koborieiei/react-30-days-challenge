import React from 'react'
import './styles.css'

const techs = ['HTML', 'CSS', 'JS']
const techsFormatted = techs.map((tech, index) => <li key={index}>{tech}</li>)

const mainMessage = 'Welcome to 30 Days Of React'

const style = { border: '2px solid orange', color: 'black', fontSize: '18px' }
const header = (
 <header style={style}>
  <div className="header-wrapper">
   <h1>{mainMessage}</h1>
   <h2>Getting Started React</h2>
   <h3>JavaScript Library</h3>
   <ul>{techsFormatted}</ul>
   <small>Oct 2, 2020</small>
  </div>
 </header>
)

const newApp = <div className="app">{header}</div>
export default function App() {
 return <div className="App">{newApp}</div>
}


