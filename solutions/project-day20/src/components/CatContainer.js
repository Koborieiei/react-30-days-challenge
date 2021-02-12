import React from 'react'
import styled from 'styled-components'

const CatCardSection = styled.section`
 padding: 20px;
 align-items: center;
 height: 100%;
 width: 100%;
 display: flex;
 flex-flow: wrap;
`

const CardContainer = styled.div`
 height: 100%;
 width: 400px;
 box-shadow: 0px 3px 5px 1px #ccc;
 :hover {
  box-shadow: 0px 3px 15px 2px #ccc;
 }
 margin: 5px 0px 50px 30px;
 border-radius: 10px;
`

const CardDescriptionWrapper = styled.div`
 height: 100%;
 width: auto;
`
const CardImg = styled.img`
 max-width: 100%;
 min-width: 100%;
 transition: transform 1s ease;
 :hover {
  transform: scale(1.5);
 }
`

const CardTitleWrapper = styled.div`
 padding: 20px 20px 20px 20px;
 font-family: kanit;
 margin: 0;
 height: 100%;
 width: auto;
`

const CardTitleHeader = styled.h2`
 margin: 0;
 font-weight: 600;
 color: #404040;
`

const CardTitleSecondary = styled.h3`
 margin: 0;
 color: darkgray;
 font-weight: 500;
`

const CatImgContainer = styled.div`
 margin: 0;
 height: auto;
 width: 100%;
 overflow: hidden;
 border-radius: 10px;
`

const InformationText = styled.p`
 color: #404040;
 margin: 0;
`
// const CardContainerIndividual = (props) => {
//  const {
//   image,
//   weight: { metric },
//   temperament,
//   name,
//   life_span,
//   description,
//   origin,
//  } = props.data

//  return (
//   <CardContainer>
//    <CatImgContainer>
//     <CardImg loading="lazy" src={image && image.url}></CardImg>
//    </CatImgContainer>
//    <CardDescriptionWrapper>
//     <CardTitleWrapper>
//      <CardTitleHeader>{name}</CardTitleHeader>
//      <CardTitleSecondary>{origin}</CardTitleSecondary>
//      <InformationText>
//       Temperament: {temperament}
//       <br />
//       Life Span: {life_span} years
//       <br />
//       Weight: {metric} Kg
//      </InformationText>
//     </CardTitleWrapper>
//     <CardTitleWrapper>
//      <CardTitleSecondary>Description</CardTitleSecondary>
//      <InformationText>{description}</InformationText>
//     </CardTitleWrapper>
//    </CardDescriptionWrapper>
//   </CardContainer>
//  )
// }
const CatCardContainer = (props) => {
 const {
  image,
  weight: { metric },
  temperament,
  name,
  life_span,
  description,
  origin,
 } = props.data
 return (
  <CatCardSection>
   <CardContainer>
    <CatImgContainer>
     <CardImg loading="lazy" src={image && image.url}></CardImg>
    </CatImgContainer>
    <CardDescriptionWrapper>
     <CardTitleWrapper>
      <CardTitleHeader>{name}</CardTitleHeader>
      <CardTitleSecondary>{origin}</CardTitleSecondary>
      <InformationText>
       Temperament: {temperament}
       <br />
       Life Span: {life_span} years
       <br />
       Weight: {metric} Kg
      </InformationText>
     </CardTitleWrapper>
     <CardTitleWrapper>
      <CardTitleSecondary>Description</CardTitleSecondary>
      <InformationText>{description}</InformationText>
     </CardTitleWrapper>
    </CardDescriptionWrapper>
   </CardContainer>
  </CatCardSection>
 )
}

export default CatCardContainer
