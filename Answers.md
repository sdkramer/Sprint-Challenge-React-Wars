# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript	library, meaning it provides JS functions which can be used to make a web page in which pieces of the page are each a function, called a component. The components are linked by exporting. Data can be passed between the components as objects, referred to as props. Elements of the components can use state, that is, they can be paired with a callback function that updates them, based on some side effect or input.

1. Describe component state.

Component state is an object that keeps record of properties of a component that may change, usually due to an event handler tracking an event, maybe from the user, such as a click, or from a server.

1. Describe props.

Props are the arguments passed into the component-function. As object, the data within the object is accessed via dot notation. When the function component is used to output an element, the properties of the object that are needed in that element are set with variable binding.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are actions that occur outside the function but which are caused by operations inside the function (such as logging something on the console). In a React component side effects are synced to specific changes of state within the component by means of the useEffect hook: the changes of state are synced to by placing them inside the dependency array, which is the second argument of the useEffect function.