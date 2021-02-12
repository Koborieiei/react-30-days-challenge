## Fetching Data Using Hooks
- What problem useEffect solve ?
    - It solve the problem how we hook when particular state is updated.
- useEffect usage
    - Function structure useEffect(() => {
        Callback function need to be called.
    }, [] //Callback arg goes here)
    ** If the array is empty componentDidMount will be called, otherwise components will be updated instead.

