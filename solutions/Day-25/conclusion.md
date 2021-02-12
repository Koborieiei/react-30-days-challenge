## Custom Hooks

## What is a custom hook ? 
- It is one of react built-in function to track when the component life cycle mutated.

## How does it work ?
- It works when react life cycle happens mounting, updating, unmounting
- It is fully isolated from new call, ex when it is called by component A the state will be used only for Component A.

## Why should we use it ?
cause to reuse stateful logic (Subscription user status) many time as we wanted

## Example of use
    // Create javascript functional
    import { useState, useEffect } from 'react'

    // Create reusable 
    export const useFetch = (url) => {
    
    // Initiate state data
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
        }
        fetchData()
    }, [url]) >> When url is changed useEffect will be invoked.

    return data
    }
    
    // Export to use from another components
    export default useFetch


