import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
 padding: 0;
 margin: 0;
 margin-top: 10;
 width: 100%;
`

const ChiledDiv = styled.div`
 width: 160;
 display: inline-block;
 padding: 10;
`
class ChartPopulation extends Component {
 progressBarCalculation = (value) => {
  const dividedValue = (value / 7693165599) * 100
  return `${dividedValue}%`
 }

 render() {
  //  Reconstruct the props which reduce complexity on accessing the data
  const { country, population } = this.props.worldpop
  const { color } = this.props
  const style = {
   backgroundColor: color,
   width: this.progressBarCalculation(population),
   height: 10,
  }

  return (
   <>
    <ChiledDiv>
     <h2>{country}</h2>
    </ChiledDiv>
    <div style={style}></div>
    <ChiledDiv>
     <h3>{population.toLocaleString()}</h3>
    </ChiledDiv>
   </>
  )
 }
}
export default ChartPopulation
