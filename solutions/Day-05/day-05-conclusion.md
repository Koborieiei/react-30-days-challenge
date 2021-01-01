## What is props ?

    - Props means properties and used to carry data across components
    - Props is an object, it will be empty untill the data is passed
    - Props is able to hold many data types such as boolean, string, array, numeric, demical

## How to use props ?

    const NewComp = (props) => {
        return ( <h1>{props.firstName}</h1>
         <h1>{props.lastName}</h1> )
    }

    <NewComp firstName = 'Testing', lastName = 'Operation' />

## Props object

    Prop is an object which is passed across components

## Inject props with variable

    const Container = (props) => {
        <div> props.name </div>
    }
    const app = ()=> {
        const name = "Mawin"
        return (<Container> name={name} </Container>)
    }

    So now the container will render Mawin inside component

## Calculation value in props

    const Container = (props) => {
        <div> props.name </div>
    }
    const app = ()=> {
        const grade = 40
        const maxGrade = 90
        return (<Container> sumGrade={(grade * maxGrade) / 100} </Container>)
    }

    so 44% will be appeared

## Inject object to props

    const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format

const App = () => {
const data = {
welcome: 'Welcome to 30 Days Of React',
title: 'Getting Started React',
subtitle: 'JavaScript Library',
author: {
firstName: 'Asabeneh',
lastName: 'Yetayeh',
},
date: new Date(), // date needs to be formatted to a human readable format
}

return

<div className='app'>
<Header data={data} />
</div>

}

## Inject function with props

1. A one way
   const App = () => {
   const hey = () => {
   alert('hey')
   }
   return (<button onclick={hey}> </button>)
   }

2. In line function
   const App = () => {
   const hey = () => {
   alert('hey')
   }
   return (<button onclick={() => alert('test')} />)

   }

## Destructuring Props

    This will save the time we write code
    ## Inline Destructuring Props
        const data = props.data
        const {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
        } = data
    ## Step by Step Destructing
        const data = props.data
        const { followed by prop's keys }
        *If the key has more than 1 dimension inside object so we do like this
        const { key inside that prop } = prop's key
    ## Inside parentheses destructing
        const Components = ({
            data: {
                welcome,
                title,
                subtitle,
                author: { firstName, lastName },
                date,
            } 
## Exercise LV 1
What is props in a React component ?
How do you access props in a React component ?
What data types can we pass as props to components ?
Array, int, object, string, function, demical
What is a propTypes?
What is a default propTypes?