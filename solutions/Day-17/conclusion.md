## React router
    - The route to get to some components
## When impletment React Router
    import {
        BrowserRouter,
        Route,
        NavLink,
        Switch,
        Redirect,
        Prompt,
        withRouter,
    } from 'react-router-dom'
## What is BrowerRouter 
    - parent component use to wrap the application route
## Route Component
    - Route component allows to navigate btw components, which is the way to move from one components to another component
        It is router setup which will handle those Navlink or any route link

    2 parameters which are needed
        1. path props is the location that component has to be rendered
        2. props is the component to be rendered on that page
    Problem with linbgering home page is 3 possible way 
    1. <Route exact path='/' component={Home} /> use exact attribute only that component wil be render
    2. <Route exact strict path='/About' component={About} /> Need to specific on that path only when path is /About/test it won't render
    Using Switch will solve this problems by allowing only on component to be rendered
    2. <Route exact path='/' component={Home} />
## NavLink
    - Navlink is component which navigates to the component that we need
    <NavLink to='/'>Home</NavLink>
    <Route path='/' component={Home} />
## Nested Routing
    - Nested the router in side router
    How ??
    Is to use the same pattern as before
## Redirect
    Problem is when user doesn't login how to can redirect ?
    so the problem is going to be solve by redirect function
    use this tag
    <Redirect to='/user/asabeneh' />
## Prompt
    - Using prompt is to ask before user leave the path
    <Prompt message='Are you sure you want to leave?' />
    or it can be written with checking condition
     <Prompt
            message={({ pathname }) => {
              return this.state.isLoggedIn &&
                pathname.includes('/user/Asabeneh')
                ? 'Are you sure you want to logout?'
                : true
            }}
          />
## Exercises: Level 1
What package do you use to implement routing in react?
    - react-router-dom
What is the default export in react-router-dom?
What is the use of the following Components (Route, NavLink, Switch, Redirect, Prompt)