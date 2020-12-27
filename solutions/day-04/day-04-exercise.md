# Exercises: Components

## Exercises: Level 1

1. What is the difference between a regular function and an arrow function?
   The difference is structure

## Regular function is

function(){
}

## Arrow function is

const functioname = () => {

   <!-- Code goes here  -->

}

2. What is a React Component?
   Ans = React component is a set of code used to build the components to assemble or building website

3. How do you make a React functional component?
   const functionName = () => (<h1> Message </hi>)

4. What is the difference between a pure JavaScript function and a functional component?
   Pure javascript can't convert XML Tag into Html Tag by assign xml tag directly.

5. How small is a React component?
   Only one tag is able to use in the variable.

6. Can we make a button or input field component?
   Yes, u can do by assign variable as jsx example
   const nameFunction = () => (<input type="text">)
   const Button = () => (<button type="submit">Test</button>)

7. Make a reusable Button component.
   const ReuseableButton = ({name}) => (<button type="submit">{name}</button>)

8. Make a reusable InputField component.
   const nameFunction = ({name}) => (<input placeholder={name} type="text">)
9. Make a reusable alert box component with one div parent element and one p

   const AlertContent = () => (<p>Hello Worlds</p>)

   const DivParent = () => (<div>
   <AlertContent/>
   </div>)

   const root = document.getElementById('root')

   reactDOM.render(<DivParent/>,root)

child element of the div(warning alert box, success alert box).

## Exercises: Level 2

1. Create functional components and display the following images
   ![Front end](../images/frontend_technologies.png)

2. Use functional component to create the following design

![News Letter](../images/news_letter_design.png)

## Exercises: Level 3

1. Use the given hexadecimal color generator in the example to create these random colors

![Hexadecimal colors](../images/hexadecimal_color_exercise.png)

2. Use functional component to design the following user card.

   ![User Card](../images/user_card_design_jsx.png)
