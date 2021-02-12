## Context
What is the context ?
An Built-in api use to pass data through components in app

Why we use ?
To prevent cumbersome props when passing data to many components. so that same data don't need to pass to every level of the tree.

How context work ?
The data or value which make inside the ContextProvide Component, and then it will be consumed by Context.consumer

When we use context ?
When we share global data through the tree, for example authenticated user data or theme.

Example of code
    
    // Create context file which is reusable
    const Context = React.createContext();
    
    // Create Provider component which contains state (Data)
    class TodoProvider extends React.Component {
    
    // Initiated state
    state = {todos: [...]};
    render() {
        return (
        // Return component with value to be consume    
        <Context.Provider value={this.state.todos}>
            // Here is definding the childern with in parentheses tag
            {this.props.children}
        </Context.Provider>
        );
    }
    }

    Here Provider is called to define which childerns gonna use context data.
    TodoController extends React.Component {
        render() {
            return (
            <div className="todo-app">
                <TodoProvider>
                <TodoInput />
                <TodoCounter />
                <TodoList />
                </TodoProvider>
            </div>
            );
        }
    }


    // Create Component which will use Context by Context consumer tag
    class TodoList extends React.Component {
    render() {
      return (
          Create consumer tag to consume context data
        <Context.Consumer>
          {todos => ....}
        </Context.Consumer>
      );
    }
  }