import React from 'react'
import useFetch from './utils/fetchAPI'
import CountrySection from './components/CountrySection'
import RankingSection from './components/RankingSection'

const App = () => {
 const url = 'https://restcountries.eu/rest/v2/all'
 const data = useFetch(url)

 return (
  <>
   {data.length !== 0 ? (
    <>
     <CountrySection data={data} /> <RankingSection data={data} />
    </>
   ) : (
    <div>Loading</div>
   )}
  </>
 )
}
export default App
