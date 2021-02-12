import React, { Component } from 'react'
// import useFetch from '../utils/fetchAPI'
import RankingItem from './RankingItem'

const RankingPopulation = () => {
 const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
 ]

 const populationRankItems = tenHighestPopulation.map((country, index) => (
  <RankingItem key={index} name={country.country} value={country.population} />
 ))

 return (
  <section>
   <h2>
    {tenHighestPopulation.length - 1} Most Populated Countries in The World
   </h2>
   {populationRankItems}
  </section>
 )
}

const RankingLanguages = ({ data }) => {
 let languages = []
 const result = []
 data.map((country, index) => {
  //   const { name } = country.languages[index]
  country.languages.map((language) => {
   if (languages.indexOf(language.name) === -1) {
    languages.push(language.name)
    result.push({ name: language.name, count: 0 })
   } else {
    console.log(result.indexOf(language.name))
   }
  })
 })
 //  console.log(langueges)
 //  const languagesTopTenItems = data
 return <div></div>
}

export default class RankingSection extends Component {
 constructor(props) {
  super(props)
 }
 render() {
  return (
   <>
    <RankingPopulation />
    <RankingLanguages data={this.props.data} />
   </>
  )
 }
}
