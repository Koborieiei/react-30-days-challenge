import React, { Component } from 'react'
import Header from './components/Header'
import CatCardContainer from './components/CatContainer'

class App extends Component {
 constructor(props) {
  super(props)
  this.filterCatOrigin.bind(this)
 }
 state = {
  data: [],
 }
 filterCatOrigin = (origin) => {
  console.log(origin)

  this.setState({
   data: this.state.oldData.filter((cat) => cat.origin === origin),
  })
 }

 componentDidMount() {
  this.fetchCatData()
  console.log(this.state.data)
 }

 fetchCatData = async () => {
  const req = await fetch('https://api.thecatapi.com/v1/breeds')
  const data = await req.json()
  this.setState({
   data: data,
   oldData: data,
  })
  console.log(this.state)
 }

 render() {
  return (
   <>
    {this.state.oldData && (
     <Header data={this.state.oldData} filter={this.filterCatOrigin} />
    )}
    {this.state.data &&
     this.state.data.map((cat, index) => (
      <CatCardContainer data={cat} key={index} />
     ))}
   </>
  )
 }
}

export default App
