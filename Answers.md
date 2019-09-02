# Answers

### 1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

&nbsp; &nbsp; - React JS is a JavaScript library that is used to make building complex user interfaces an easier task. React allows you to work with the virtual DOM instead of always interacting with the actual DOM. This allows your code to be more efficient and have quicker load times. In React for every DOM Object there is a corresponding Virtual DOM object. Manipulating the actual DOM is very slow but manipulating the virtual DOM is much faster due to nothing actually getting drawn on the screen. Each time a new virtual DOM is rendered React know which components have changed and will update only those components to the actual DOM.  

### 2. What does it mean to _think_ in react?
&nbsp; &nbsp; - Thinking in React means to think about apps as you build them.


### 3. Describe state.

&nbsp; &nbsp; - With the example below you use the useState hook to set the state to an empty array. Then in the axios call you use setData to set the state to the array you are passing in from the api. At the end of the useEffect hook call you also place another empty array so that the api call is only run again if the state changes. 

Example: 

const [data, setData] = useState([]);

useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => { 
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


### 4. Describe props.
&nbsp; &nbsp; - Props are used to pass data from a parent component to a child component


### 5. What are side effects, and how do you sync effects in a React component to state or prop changes?

&nbsp; &nbsp; - A side effect is anything that effects something outside the scope of the function being executed. 

useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => { 
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

&nbsp; &nbsp; - Putting the empty array at the end of this useEffect function(example above) prevents an infinite loop from running. This empty array allows the api call to only run when the data inside the array has changed. You can also place a variable inside the array. Placing a variable there will allow you to "subscribe" to that variable and the function will only run when the data associated with that variable has changed.