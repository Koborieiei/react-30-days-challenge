## Higher Order Component

    - Component take another component and return that components
    EX
    const btn = () => {
        return <button></button>
    }

    const buttonWithStyle = (CompParam) => {
        const buttonStyles = {
            backgroundColor: '#61dbfb',
            padding: '10px 25px',
            border: 'none',
            borderRadius: 5,
            margin: 3,
            cursor: 'pointer',
            fontSize: 18,
            color: 'white',
        }
        return (props) => {
            return <CompParam {...props} style={buttonStyles} />
        }
    }
    const NewButton = buttonWithStyle(Button)


    <NewButton/> so that button with style will be rendered

## Higher Order Function

    - The function take one function and return another one function

## Exercises: Level 1
What is higher order function
    - Function which take another one and return one function
    What is Higher Order Component
    - Components which take another one and return one function
What is the difference between higher order function and higher order component?
    - Use the different parameters
A higher order component can allow us to enhance a component. (T or F)
True, because it could implement vary style of the components