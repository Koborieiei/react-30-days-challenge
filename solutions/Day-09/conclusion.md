Conditional Rendering

## Conditional Rendering

    - Rendering the jsx components at different components by using if else

## Conditional Rendering if and else

    - Inline conditional rendering
    let status = this.state.loggedIn ? (<h1>Welcome to 30 Days Of React</h1>) : (<h3>Please Login</h3>)

## Functional Conditionally render

    - Rendering with functional components
    const a = (<h1>Helow</h1>)
    const b = (<h1>World</h1>)

    Render method
    const status = this.state.loggedIn ? <a /> : <b />

## Exercise Level 1
What is conditional rendering?
    - Rendering the jsx components at different components by using if else
How do you implement conditional rendering?
    use it to generate the conditional according to the state
    const status = this.state.loggedIn ? <a /> : <b />
Which method of conditional rendering do you prefer to use?
    const status = this.state.loggedIn ? <a /> : <b />