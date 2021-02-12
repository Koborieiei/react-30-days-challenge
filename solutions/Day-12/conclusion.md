## About Forms
    - It is where to fill the data
## Type of Forms
    - Text, Number, range, email, pass, tel, checkbox, radio, color, url, image, file, hidden, date, datetime-local, month, week, time, reset, search, submit, button, textarea, select
## Evnet Handler
    - onChange,onSubmit, onBlur
## linking label to input
    - Use htmlFor on label element refer to input Id
## Destructuring bunch of input data
    - const {name, value} = e.target so that name of that input and value are stored
## Retrive data from option input type
    - type of that input is needed to deconstructred let add const {name, value, typem, checked} = e.target
    because they will be array of input so we use 
    skills: { ...this.state.skills, [name]: checked },
    checked return boolean so that it can notice.
## How to create validate()
    -  validate = () => {
            const errors = {
            firstName: '',
            }

            if (
            (this.state.touched.firstName && this.state.firstName.length < 3) ||
            (this.state.touched.firstName && this.state.firstName.length > 12)
            ) {
            errors.firstName = 'First name must be between 2 and 12'
            }
            return errors
        }

        It validated when state is mutated
        const { firstName } = this.validate()
        <{firstName}> so that error msg will be return.

## 
Exercises: Level 1
What is the importance of form?
    - It is where to fill the data
How many input types do you know?
    - Text, Number, range, email, pass, tel, checkbox, radio, color, url, image, file, hidden, date, datetime-local, month, week, time, reset, search, submit, button, textarea, select
Mention at least four attributes of an input element
    name, id, type, value
What is the importance of htmlFor?
    - use to refer to input by that label
Write an input type which is not given in the example if there is?
    - <input type="hidden">
What is a controlled input?
    - Which has handle change event to update state
What do you need to write a controlled input?
    - when we need to store its input
What event type do you use to listen changes on an input field?
    - onChange
What is the value of a checked checkbox?
    - boolean
When do you use onChange, onBlur, onSubmit?
    - onChange to store value, onBlur to detect if user leave the input, onSubmit to detect whether form is submitted or not.
What is the purpose of writing e.preventDefault() inside the submit handler method?
    - To prevent default behavior of html form submitting, it won't refresh the page
How do you bind data in React? The first input field example is data binding in React.
    - use onchange with state value
What is validation?
    - to validate the input data
What is the event type you use to listen when an input changes?
    - onChange
What are event types do you use to validate an input?
    - onSubmit