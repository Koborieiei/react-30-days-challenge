## Uncotrolled Components

    - It is the way to get data from Input fields same as traditional HTML by not writing and event handler every state

## Using Uncontrollen components

    - Input's name = react.createRef()

## How Uncontrolled components get data ?

    - React do this instead by using ref

## Call Out Input valuez

    - this.inputName.current.value

## When to use ?

    - When to target dom element to get that content

## Exercises: Level 1
What is a controlled input?
    - It is Input that has handleChange function
What is an uncontrolled input
    - It is the way to get data from Input fields same as traditional HTML by not writing and event handler every state
How do you get a content of a certain HTML element in React ?\
    - Using attribute ref to target that content follow this.name.current.value
Why it is not a good idea to touch the DOM directly in React ?
    - It will be heavily optimized for DOM manipulation
What is most frequently used in React ? Controlled or Uncontrolled input.
    - Controlled Input
What do you need to write uncontrolled input?
    - Dome value
Does state require to write uncontrolled input?
    - Nope
When do you use uncontrolled input?
    - When targeting dom is needed
    - When handle input type file
When do you use controlled input?
    - When you need to handle input
Do you use a controlled or uncontrolled input to validate form input fields?
    - uncontrolled input