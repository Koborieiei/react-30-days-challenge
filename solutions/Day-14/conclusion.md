## What is react lifecycling
    - the process of mounting, updating and destroying a react components
    - 
## React LifeCycling methods to class
    - When component is rendered, it is call mounting statement
    - When component is updated, it is called updating statment
    - When component is removed, it is call unmouting statement
    
    ## Mounting built-in methods run in order
        - constructor() Execution order to run : First
            Place to setup initial state or props
        - static getDerivedStateFormProps() Execution order to run : Second
            Place to setup initial state based on initial props
            static getDerivedStateFromProps(props, state) {
                console.log(
                'I am getDerivedStateFromProps and I will be the second to run.'
                )
                return { firstName: props.firstName }
            }
        - render() Execution order to run : Third
            Place to render the jsx file
        - componentDidMount() Execution order to run : Last
         a place place to setting time interval and calling API.
    
    ## Updating statement and built-in methods
        - It is called when state or props are change
        - static getDerivedStateFromProps()
            The same as above
        shouldComponentUpdate()
            - return boolean, to prevent component rendering when false the component will never update
            - it has 2 params one is nextProps, nextState

        render()
        getSnapshotBeforeUpdate()

        componentDidUpdate()
            - it has 2 params one is prevProps, prevState
    ## Unmounting



    ## 
## Life cycle Methods to use when components is unmouting or mounting
    - componentDidMount(), which runs after the component output has been rendered to DOM
    - componentWillUnmount(), which run when component is ever removed from the DOM
    - 
## Storing special instance variable using this keyword
    - free to add as many as you'd like to
## Stateful and Stateless
    - Stateful components which own the state while stateless is just data presentational components source : https://programmingwithmosh.com/javascript/stateful-stateless-components-react/#:~:text=The%20literal%20difference%20is%20that,always%20render%20the%20same%20thing


## Exercises: Level 1
What is component life cycles
    - the process of mounting, updating and destroying a react components
What is the purpose of life cycles
    - to change the components
What are the three stages of a component life cycle
    - Mounting
    - Updating
    - Unmounting
What does mounting means?
    - The state that component is being rendered
What does updating means
    - The state that component is being re-rendered when state or props is changed
What does unmounting means?
    - The state of destroy the components
What is the most common built-in mounting life cycle method?
    - constructor()
What are the mounting life cycle methods?
    - constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount()
What are the updating life cycle methods?
    static getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

What is the unmounting life cycle method
    componentWillUnmount