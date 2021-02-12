## Fetch and Axios

    What is fetch ?
    - fetch is built-in js function to make http request.
    What is Axios
    - Library to make http request which is well formed of code

## Implementing fetch

    // Normally it nested in side componentDidMount method
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          data,
        })
      })
      .catch((error) => {
        console.log(error)
      })

    // For shorten code using async and await
    getUserData = async () => {
        const API_URL = `endpoint`
        const response = await fetch(url)
        const data = await response.json()
        this.setState({
            data,
        })
    }
    // Though, we might have to handle request error, hence we use try catch block
    getUserData = async () => {
        const API_URL = `endpoint`
        try {
            const response = await fetch(url)
            const data = await response.json()
            this.setState({
                data,
            })
        } catch(error) {
            console.log(error)
        }

    }
## Implementing Axios
    // The same style as fetch, though we need to import axios module

## Exercises: Level 1
What is HTTP request?
    - The request to get data on server which is the communication btw client and server
What are the most common HTTP requests?
    - PUT DELETE GET POST UPDATE
What is fetch?
    - fetch is built-in js function to make http request.
What is axios?
    - Library to make http request which is well formed of code
What is the difference between fetch and axios?
    - Flexible to many brower support
Do you prefer fetch to axios for make HTTP requests?
    - Both of them are fine