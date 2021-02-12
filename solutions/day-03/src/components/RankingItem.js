import React from 'react'
import styled from 'styled-components'
const progressBarCalculation = (value, hightest) => {
 const dividedValue = (value / hightest) * 100

 return `${dividedValue}%`
}

const Container = styled.div`
 padding: 0;
 margin: 0;
 margin-top: 10;
 width: '100%';
`

const Child = styled.div`
 width: 160px;
 display: inline-block;
 padding: 10px;
`

const ProgressBar = styled.div`
 background-color: grey;
 width: ${(props) => progressBarCalculation(props.value, 7693165599)};
 height: 10px;
`
export default function RankingItem({ name, value }) {
 return (
  <Container>
   <Child>
    <h2>{name}</h2>
   </Child>
   <Child>
    <ProgressBar value={value} />
   </Child>
   <Child>{value.toLocaleString()}</Child>
  </Container>
 )
}
