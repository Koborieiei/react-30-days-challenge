30 Day react Challenge

## Class Components

    what is class components
    It has state and life cycle methods, also inherits from react component class

    - The way to create component class
    class Component {
        constructure(props) {
        }
    }
    - Inheriting from parent class
    class Child extends component {
        constructure(props) {
            super(props)
        }
    }

    Class based react componens
    class Child extends React.Component {

        <!-- Call render method to execute -->
        render() {
            <div>
                <div>test</div>
            </div>
        }
    }

    - Turn functional based component into class based components
    <!-- Functional component -->
    const TechList = () => {
        const techs = ['HTML', 'CSS', 'JavaScript']
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
    <!-- Class component -->
    class TechList extends React.components {
        constructor(props) {
            <!-- Use to call the parent call constructor function -->
            super(props)
        }
        render(){
            const techs = ['HTML', 'CSS', 'JavaScript']
            const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
            return techsFormatted
        }
    }

    <!-- Accessing props in Class -->
    To handle props in class based component, is to use this

    class Header extends React.Component {
    constructor(props) {
        <!-- init the props which is passed into this components -->

        super(props)
        // the code inside the constructor run before any other code
    }
        render() {
            return (
            <header>
                <div className='header-wrapper'>
                <!-- This is the way to invoke props data by this.props followed by key -->
                <h1>{this.props.data.welcome}</h1>
                <h2>{this.props.data.title}</h2>
                <h3>
                    {this.props.data.author.firstName} {this.props.data.author.lastName}
                </h3>
                <small>{this.props.data.date}</small>
                </div>
            </header>
            )
        }
    }
    const App = () => {
        <!-- Initation data object before pass into class component -->
        const data = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
            },
            date: 'Oct 7, 2020',
        }

        return (
            <div className='app'>
            <Header data={data} />
            </div>
        )
    }

    ## Avoiding repetition by using destructuring data
     class Header extends React.Component {
        constructor(props) {
            <!-- init the props which is passed into this components -->

            super(props)
            // the code inside the constructor run before any other code
        }
            render() {
                <!-- Destructuring code goes here -->
                We use the key which props data has
                const {
                    welcome,
                    title,
                    subtitle,
                    author: {firstName,lastName},
                    date,
                } = this.props.data << this one use to refer the passed props

                return (
                <header>
                    <div className='header-wrapper'>
                        <!-- This is the way to invoke props data by this.props followed by key -->
                        <h1>{welcome}</h1>
                        <h2>{title}</h2>
                        <h3>
                            {firstName} {lastName}
                        </h3>
                        <small>{date}</small>
                    </div>
                </header>
                )
            }
        }

        ## Inject method in class components
        class Header extends React.Component {
            constructor(props) {
                super(props)
            }
            render() {
                const {
                    welcome,
                    title,
                    subtitle,
                    author: {firstName,lastName},
                    date,
                } = this.props.data << this one use to refer the passed props

                return (
                <header>
                    <div className='header-wrapper'>
                        <!-- This is the way to invoke props data by this.props followed by key -->
                        <h1>{welcome}</h1>
                        <h2>{title}</h2>
                        <h3>
                            {firstName} {lastName}
                        </h3>
                        <small>{date}</small>
                    </div>
                </header>
                )
            }
        }


        class Main extends React.Component {
            constructor(props) {
                super(props)
            }
            render() {
                return (
                <main>
                    <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={this.props.techs} />
                    </ul>
                    <UserCard user={this.props.user} />
                    <Button
                        text='Greet People'
                        // After initiated the constructor function the methods we passed in should go inside the inline onClick like this VV
                        onClick={this.props.greetPeople}
                        style={buttonStyles}
                    />
                    <Button
                        text='Show Time'
                        onClick={this.props.handleTime}
                        style={buttonStyles}
                    />
                    </div>
                </main>
                )
            }
            }


        class App extends React.Component {
            showDate = (time) => {
                const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
                ]

                const month = months[time.getMonth()].slice(0, 3)
                const year = time.getFullYear()
                const date = time.getDate()
                return ` ${month} ${date}, ${year}`
            }

            // Most of the time methods will need to be initiated inside the highest class components
            handleTime = () => {
                alert(this.showDate(new Date()))
            }

            greetPeople = () => {
                alert('Welcome to 30 Days Of React Challenge, 2020')
            }

            render() {
                const data = {
                welcome: 'Welcome to 30 Days Of React',
                title: 'Getting Started React',
                subtitle: 'JavaScript Library',
                author: {
                    firstName: 'Asabeneh',
                    lastName: 'Yetayeh',
                },
                date: 'Oct 7, 2020',
                }
                const techs = ['HTML', 'CSS', 'JavaScript']

                // copying the author from data object to user variable using spread operator
                const user = { ...data.author, image: asabenehImage }

                return (
                <div className='app'>
                    <Header data={data} />
                    <Main
                    user={user}
                    techs={techs}

                     // Once we pass in the methods we will need to call this keyword following dot and function's name it will be like this VV
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                    />

                    <Footer date={new Date()} />
                </div>
                )
            }
            }

## Exercise 1

    How do you write a pure JavaScript function
    const components = ({onClick}) => {
        return <button style={test onClick={onClick}}> Test </button>
    }

    What is inheritance and how do you make a child from a parent class?
    The way to extends the components from parent 

    Class a extends React.components {

    }


    What is class based React component ?
    class based component is the way to build components which is able to create react event lifecycle

    What is the difference between functional React component and class based React component ?
    - Syntex to initiate the components 
    - Length of code
    - The way to use fuction
    When do we need to use class based components instead of functional components
    - We can use react lifecycle component
    What is the use cases of class based component ?
    - When we need to handle the react component lifecycle and state the components

    Which type of component do use most frequently ? functional or class-based component
    depends on the work we use, if presentational component is need so that we use functional 

    What is React life cycle ? (not covered yet) ?
    Sorts of method which use when initiated the components
    What is state in React ? (not covered yet)
    State means what is the current situation of data which inherited from the parent components
