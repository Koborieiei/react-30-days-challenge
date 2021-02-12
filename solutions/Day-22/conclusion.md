## React hook with form and input

- Implementation code
const [var, setVar] = useState('') // initiate state value
const inputHandle = (e) => {
    setVar(e.target.value)
}
State will be changed as input value has changed