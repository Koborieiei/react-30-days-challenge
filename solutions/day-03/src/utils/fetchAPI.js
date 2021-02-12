import { useEffect, useState } from 'react'

export const useFetch = (url) => {
 const [data, setData] = useState([])

 useEffect(() => {
  const fetchData = async () => {
   try {
    const reps = await fetch(url)
    const data = await reps.json()
    setData(data)
   } catch (err) {
    console.log(err)
   }
  }
  fetchData()
 }, [url])
 return data
}

export default useFetch
