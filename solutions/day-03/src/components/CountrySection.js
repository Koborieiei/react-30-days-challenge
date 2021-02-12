import React, { useState, useEffect } from 'react'
import FunctionalSection from './FunctionalSection'
import Header from './Header'

const CountryItems = ({
 flag,
 countryname,
 capital,
 languages,
 population,
 currencies,
}) => {
 const langName = languages.map((lang) => lang.name)
 const currency = currencies.map((currency) => currency.name)
 //  console.log(currency)
 //  console.log(languages.map((lang) => lang.name.join()))
 return (
  <div>
   <div>
    <img
     style={({ width: '20px' }, { height: '50px' })}
     alt={flag}
     src={flag}
    ></img>
   </div>
   <h2>{countryname}</h2>
   <div>
    Capital : {capital} : Languages: {langName.join(',')}: Population:
    {population} : Currency : {currency}
   </div>
  </div>
 )
}

const BucketList = ({ data }) => {
 return data.map((country) => (
  <CountryItems
   flag={country.flag}
   key={country.name}
   capital={country.capital}
   countryname={country.name}
   languages={country.languages}
   population={country.population}
   currencies={country.currencies}
  />
 ))
}

export default function CountrySection({ data }) {
 const [searchValue, setSearchValue] = useState('')
 const [country, setCountryData] = useState([])

 const filerCountry = (e) => {
  setSearchValue(e.target.value)
 }

 useEffect(() => {
  let result = []
  let arr = []
  //   let a = country.findIndex((data) => data.name === searchValue)
  data.map((data2) => {
   const txtValue = data2.name
   if (txtValue.indexOf(searchValue) > -1) {
    arr.push(data2)
   }

   //    result = arr
   //    console.log(arr)
   return false
  })

  if (arr.length !== 0) {
   setCountryData(arr)
  }

  if (searchValue === '') {
   setCountryData(data)
  }
 }, [searchValue])

 //  console.log(country)
 return (
  <section>
   <Header data={country.length} />
   <FunctionalSection onchange={filerCountry} />
   <BucketList data={country} />
  </section>
 )
}
