## Day 06 Conclusion

Topic mapping array - Is array method to walk through the data structure - In JSX Context it is usually use for fetching HTML Elements following the data
Mapping and rendering array

    ## Mapping number
    const Numbers = ({ numbers }) => {
        return list
        const list = numbers.map((number) => <li> {number} </li>)
    }

    const App = () => {
        const numbers = [1, 2, 3, 4, 5]

    return (
        <div className='container'>
        <div>
            <h1>Numbers List</h1>
            <ul>
            <Numbers numbers={numbers} />
            </ul>
        </div>
        </div>
    )

}
##Mapping array of arrays
const skills = [
['HTML', 10 ],
['CSS', 10 ],
['Js', 10 ],
['React', 10 ]
]

    const skill = ( {skill: [tech, level] }) => (
        <li> {tech} {level}</li>
    )

    const Skills = ({ skills }) => {
        const skillsList = skills.map((skill) => <Skill skill={skill} />)
        console.log(skillsList)
    return <ul>{skillsList}</ul>
    }

    ##Mapping array of objects
    const countries = [
        { name: 'Finland', city: 'Helsinki' },
        { name: 'Sweden', city: 'Stockholm' },
        { name: 'Denmark', city: 'Copenhagen' },
        { name: 'Norway', city: 'Oslo' },
        { name: 'Iceland', city: 'Reykjavík' },
    ]

    const Country = ({ country: { name, city } }) => {
        return (
            <div>
                <h1>{name}</h1>
                <small>{city}</small>
            </div>
        )
    }

    const Countries = ({ countries }) => {
        const countryList = countries.map((country) => <Country country={country} />)
        return <div>{countryList}</div>
    }

    const App = () => (
        <div ClassName='container'>
            <div>
                <h1> Countries List </hi>
                <Countries countries={countries}>
            <div>
            </div>
    )

    ##Key in mapping arrays
    Why key because unique identifier following the item by array, otherwise it won't know what it has changed

## Exercises: Level 1

Why you need to map an array ?
For fetching HTML Elements following the data
Why we need keys during mapping an array ?
For setting a unique identifier to track what item has modified
Does destructuring make your code clean and easy to read ?
Yes, it seperate from them
What is the importance of destructuring your code ?
it is saving time to write code

Exercises: Level 2
