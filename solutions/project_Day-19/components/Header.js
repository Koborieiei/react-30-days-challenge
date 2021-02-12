import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.section`
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

const Header = (totalCat) => {
 return (
  <HeaderContainer>
   <HeaderText>CAT Breeds Aroud the World</HeaderText>
  </HeaderContainer>
 )
}

export default Header
