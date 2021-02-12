import styled from 'styled-components'
import React from 'react'

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
 const thisOld = data
 const CatOrigin = () => {
  let arr = []
  const catOriginList = thisOld.map((cat) => {
   if (arr.indexOf(cat.origin) === -1) {
    arr.push(cat.origin)
    return (
     <ButtonCat onClick={() => filter(cat.origin)} key={cat.origin}>
      {cat.origin} {fillterCat(data, cat.origin).length}{' '}
     </ButtonCat>
    )
   }
   return null
  })
  return <>{catOriginList}</>
 }
 //  const TestTest = () => {
 //   const arr = catOrigin()
 //   arr.map((origin) => <div>{origin}</div>)
 //  }

 //  const [totalCat, setTotalCat] = useState(data)
 //  const [catOrigin, setCatOrigin] = useState([])
 //  useEffect(() => {
 //   setTotalCat(data)
 //   //   if (totalCat) {
 //   //    console.log(fillterCat(data, 'Thailand'))
 //   //   }
 //  })
 //  const getEachCatOriginCountry = () => {
 //   console.log(totalCat)
 //  }

 return (
  <HeaderContainer>
   <HeaderText>CAT Breeds Aroud the World</HeaderText>
   <CatOrigin />
  </HeaderContainer>
 )
}

export default Header
