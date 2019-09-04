// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  return <div>Hi there!</div>;
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />, //component created earlier
  document.querySelector("#root") //inside index.html, get the reference of the div with id of 'root'
);
