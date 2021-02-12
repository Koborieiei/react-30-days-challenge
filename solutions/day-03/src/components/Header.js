import styled from 'styled-components'
import React from 'react'

const HeaderContainer = styled.div`
 text-align: center;
 padding: 20px;
 margin: 0;
 height: 100%;
 width: auto;
`

const HeaderText = styled.h1`
 font-weight: 800;
 text-align: center;
 color: #404040;
`

const ButtonCat = styled.button`
 padding: 10px;
 /* background-color: g; */
 border: none;
 border-radius: 10px;
 cursor: pointer;
 margin: 3px;
 :hover {
  background-color: darkgray;
 }
`

const fillterCat = (arr, origin) => {
 //  arr.map((cat) => {
 //   console.log(cat.origin)
 //  })
 return arr.filter((cat) => cat.origin === origin)

 //  return arr.fillter((cat) => cat.origin === origin)
}

const Header = ({ data, filter }) => {
 return (
  <HeaderContainer>
   <HeaderText>{data} Countries are listed below</HeaderText>
  </HeaderContainer>
 )
}

export default Header
