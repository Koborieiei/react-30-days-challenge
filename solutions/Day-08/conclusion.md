Day08 Challenge is about state

## What is state

    - In English state is the particular condition that sth or sb is in at a specific time ... you are happy or sad, are you full or empty all of these adjevctive are about state
    - It is the object in react which make re-rendering components when state data changes

## Setting up the state

    - initiating inside or outside constructure fucntion of class
    - Not directly change or mutate, instead using built-in function setState() to reset to a new state
    - Accessing the state, type `this.state` and the prop name

## Resetting a state
    class App extends React.Component {
    // declaring state
    state = {
        count: 0,
    }
    render() {
        // accessing the state value
        const count = this.state.count
        return (
        <div className='App'>
            <h1>{count} </h1>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Add One
            </button>
        </div>
        )
    }
    }
    - Call methods this.setState({count: this.state.count+1}) this code above use to mutate state.count by increasing the value.
## Functional state mutation
    class App extends React.Component {
    // declaring state
    state = {
        count: 0,
    }
    // method which add one to the state

    addOne = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // method which subtract one to the state
    minusOne = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        // accessing the state value
        const count = this.state.count
        return (
        <div className='App'>
            <h1>{count} </h1>

            <div>
            <button className='btn btn-add' onClick={this.addOne}>
                +1
            </button>{' '}
            <button className='btn btn-minus' onClick={this.minusOne}>
                -1
            </button>
            </div>
        </div>
        )
    }
    }

## Exercises: Level 1

What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.
    - Quite now happy, because I'm quite lazy to make all things. and it is still gladeful to talk to somebody I would like.

What is state in React ?
    - It is the object in react which make re-rendering components when state data changes

What is the difference between props and state in React ?
    - The difference is props just an object which use to display, the components won't re-render when props is changed, On the other hand state is also the object when it changed the components will be re-rendered.

How do you access state in a React component ?
    - use `this.state` and the property of state

How do you set a set in a React component ?
    - state = {
        key: value
    }
    put in before render a component
